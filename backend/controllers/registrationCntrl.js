const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const { Team } = require("../models/teamModel");
const { sendVerification } = require("../utils/email");

// Function to generate a random password
const generateRandomPassword = () => {
  let password = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 8; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// Helper functions for validation
const validateTeamName = (name) => {
  if (name.length > 30 || name.length < 5) {
    return "Team name should be greater than 5 and less than 30 characters";
  }
  return null;
};

const validateUsers = (users) => {
  if (!Array.isArray(users)) {
    return "Invalid user data format";
  }

  if (users.length > 4) {
    return "Not more than 4 members can be added";
  }

  for (let i = 0; i < users.length; i++) {
    for (let j = i + 1; j < users.length; j++) {
      if (users[i].phoneNo === users[j].phoneNo) {
        return "Duplicate phone numbers are not allowed";
      }
      if (users[i].email === users[j].email) {
        return "Duplicate emails are not allowed";
      }
      if (users[i].gitHubUrl === users[j].gitHubUrl) {
        return "Duplicate gitHubUrls are not allowed";
      }
    }
  }
  return null;
};

// Function to check if users or team already exist
const checkExistingUsersAndTeam = async (usersToAdd, teamName) => {
  for (const user of usersToAdd) {
    
    const userExists = await User.findOne({ email: user.email });
    if (userExists) {
      return `${user.email} - Email already exists`;
    }
    const phoneExists = await User.findOne({ phoneNo: user.phoneNo });
    if (phoneExists) {
      return `${user.phoneNo} - Phone number already exists`;
    }


    const existingGithubUrl = await User.findOne({ gitHubUrl: user.gitHubUrl });
        if (existingGithubUrl) {
            return "Github url already exists";
        }

return null;

}
  

  const existingTeamName = await Team.findOne({ name: teamName });
  if (existingTeamName) {
    return "Team name already exists";
  }
  return null;
};

// Function to create a new team
const createTeam = async (name, leader) => {
  const newTeam = new Team({ name, leader });
  await newTeam.save();
  return newTeam;
};

// Function to send verification email to team members
const sendVerificationEmails = async (team, leaderId) => {
  const teamMembers = await Promise.all(
    team.members.map(async (member) => {
      const user = await User.findById(member);
      return user.email;
    })
  );

  await sendVerification(leaderId.email, leaderId.fname);
};

// Main registration handler
const registration = asyncHandler(async (req, res) => {
  try {
    let { usersToAdd, leaderEmail, name  } = req.body;

    usersToAdd = usersToAdd.map((user) => {
      return {
        ...user,
        meals: [{ type: "breakfast" }, { type: "lunch" }, { type: "dinner" }],
        password: generateRandomPassword(),
      };
    });

    // Validate inputs
    const teamNameError = validateTeamName(name);
    if (teamNameError) {
      return res.status(400).json({ message: teamNameError });
    }

    const usersValidationError = validateUsers(usersToAdd);
    if (usersValidationError) {
      return res.status(400).json({ message: usersValidationError });
    }

    // Check if users or team already exist
    const existingError = await checkExistingUsersAndTeam(usersToAdd, name);
    if (existingError) {
      return res.status(400).json({ message: existingError });
    }

    // Insert users and create a new team
    const insertedUsers = await User.insertMany(usersToAdd);
    const leaderId = await User.findOne({ email: leaderEmail });
    leaderId.isTeamLeader = true;
    leaderId.inTeam = null;
    await leaderId.save();

    const newTeam = await createTeam(name, leaderId);
    newTeam.members.push(...insertedUsers);
    await newTeam.save();

    // Associate users with the team
    for (const user of insertedUsers) {
      user.inTeam = newTeam._id;
      await user.save();
    }

    // Send verification emails
    // await sendVerificationEmails(newTeam, leaderId);
    let answer = "";
    const trigger = async () => {
      const rest = await fetch(
        "https://slacky.app.n8n.cloud/webhook/24d316c2-3f28-4fa4-9468-dab176caf6fc",
        {
          method: "POST",
          headers: {

            "Content-Type": "application/json",
          },
          body: JSON.stringify(insertedUsers),
        }
      );

      const data = await rest.json();
      answer = data;
    };

    await trigger().then(() => console.log("workflow triggered"));
    console.log(answer);
    res.status(201).json({
      message: "Registration confirmation email has been sent",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

module.exports = { registration };
