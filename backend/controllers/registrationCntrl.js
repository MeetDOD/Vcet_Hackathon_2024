const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const { Team } = require("../models/teamModel");
const { sendVerification } = require("../utils/email");
require("dotenv").config();

const generateRandomPassword = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 8 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
};

const validateTeamName = (name) => (name.length > 30 || name.length < 5) ? "Team name should be greater than 5 and less than 30 characters" : null;

const validateUsers = (users) => {
  if (!Array.isArray(users)) return "Invalid user data format";
  if (users.length > 4) return "Not more than 4 members can be added";

  const emails = new Set();
  const phoneNos = new Set();
  const gitHubUrls = new Set();

  for (const user of users) {
    if (emails.has(user.email)) return "Duplicate emails are not allowed";
    if (phoneNos.has(user.phoneNo)) return "Duplicate phone numbers are not allowed";
    if (gitHubUrls.has(user.gitHubUrl)) return "Duplicate gitHubUrls are not allowed";

    emails.add(user.email);
    phoneNos.add(user.phoneNo);
    gitHubUrls.add(user.gitHubUrl);
  }

  return null;
};

const checkExistingUsersAndTeam = async (usersToAdd, teamName) => {
  const emails = usersToAdd.map(user => user.email);
  const phoneNos = usersToAdd.map(user => user.phoneNo);
  const gitHubUrls = usersToAdd.map(user => user.gitHubUrl);

  const [userExists, phoneExists, githubExists, existingTeamName] = await Promise.all([
    User.findOne({ email: { $in: emails } }),
    User.findOne({ phoneNo: { $in: phoneNos } }),
    User.findOne({ gitHubUrl: { $in: gitHubUrls } }),
    Team.findOne({ name: teamName })
  ]);

  if (userExists) return `${userExists.email} - Email already exists`;
  if (phoneExists) return `${phoneExists.phoneNo} - Phone number already exists`;
  if (githubExists) return "Github URL already exists";
  if (existingTeamName) return "Team name already exists";

  return null;
};

const createTeam = async (name, leader) => {
  const newTeam = new Team({ name, leader });
  await newTeam.save();
  return newTeam;
};

const registration = asyncHandler(async (req, res) => {
  try {
    let { usersToAdd, leaderEmail, name } = req.body;

    usersToAdd = usersToAdd.map(user => ({
      ...user,
      meals: [{ type: "breakfast" }, { type: "lunch" }, { type: "dinner" }],
      password: generateRandomPassword(),
    }));

    const teamNameError = validateTeamName(name);
    if (teamNameError) return res.status(400).json({ message: teamNameError });

    const usersValidationError = validateUsers(usersToAdd);
    if (usersValidationError) return res.status(400).json({ message: usersValidationError });

    const existingError = await checkExistingUsersAndTeam(usersToAdd, name);
    if (existingError) return res.status(400).json({ message: existingError });

    const insertedUsers = await User.insertMany(usersToAdd);
    const leaderId = await User.findOne({ email: leaderEmail });

    const newTeam = await createTeam(name, leaderId);
    newTeam.members.push(...insertedUsers);
    await newTeam.save();

    leaderId.isTeamLeader = true;
    leaderId.inTeam = newTeam._id;
    await leaderId.save();

    await Promise.all(insertedUsers.map(user => {
      user.inTeam = newTeam._id;
      return user.save();
    }));

    const N8N_URL = process.env.DEV_MODE == "true" ? process.env.N8N_DEV_URL : process.env.N8N_PROD_URL;
    // Asynchronous trigger, non-blocking
    const triggerN8nWorkflow = fetch(N8N_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usersToAdd: usersToAdd.map(user => ({
          "First Name": user.fname,
          "Last Name": user.lname,
          "Team Name": name,
          "Email": user.email,
          "Contact": user.phoneNo,
          "Gender": user.gender,
          "State": user.state,
          "Pincode": user.pincode,
          "College": user.college,
          "Department": user.dept,
          "Year": user.year,
          "Degree": user.degree,
          "Github URL": user.gitHubUrl,
          "Leader": leaderEmail,
        })),
      }),
    });

    triggerN8nWorkflow.then(() => console.log("Workflow triggered"));

    res.status(201).json({ message: "Registration successful, email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

module.exports = { registration };
