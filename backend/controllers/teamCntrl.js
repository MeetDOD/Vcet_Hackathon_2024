const asyncHandler = require('express-async-handler');
const { Team } = require('../models/teamModel');
const {User} = require('../models/userModel');
const {sendTeamSelection,sendTeamRejection} = require('../utils/email')
const { Parser } = require('json2csv');

const getThadomal = async(req,res) => {

  const data = await Team.findById(req.params.id).populate('members');
  res.status(200).json(data)
}

const getAllTeams = asyncHandler(async (req, res) => {
  const teams = await Team.find({}).populate({
      path: 'leader',
      select: '-_id email'
  })
  .populate({
      path: 'members',
      select: '-_id email gender'
  })

  const formattedTeams = teams.map(team => {
      const membersEmails = team.members.map(member => member.email);
      let male = 0, female = 0;

      team.members.forEach((member) => {
          if (member.gender === "male") {
              male++;
          } else if (member.gender === "female") {
              female++;
          }
      });

      const genderRatio = `${male}:${female}`;

      

      return {
          _id: team._id,
          isSelected: team.isSelected,
          name: team.name,
          hasPaid: team.hasPaid,
          selectedProblem: team.selectedProblem.name,
          leader: team.leader.email,
          genderRatio: genderRatio,
          members: membersEmails,
          emailSent: team.emailSent
      };
  });

  return formattedTeams;
});


const teamJsonResp = asyncHandler(async(req,res) => {
    const teams = await getAllTeams();
    res.status(200).json(teams);
})

const exportTeam = asyncHandler(async (req, res) => {
    try {
        let teams = [];
        const formattedTeams = await getAllTeams(); 

        formattedTeams.forEach((team) => {
            const { name, leader, members, problems } = team;
            const formattedProblems = [];
           

            

            
            
            
           
           
            let member2 = members[1] !== undefined ? members[1] : "null";
            let member3 = members[2] !== undefined ? members[2] : "null";
            let member4 = members[3] !== undefined ? members[3] : "null";
            
            teams.push({
                "Team Name": name,
                "Leader": leader,
                "Member 2": member2,
                "Member 3": member3,
                "Member 4": member4,

            });
            
        });

        const teamHeaders = ["Team Name", "Leader", "Member 2", "Member 3", "Member 4"];
        const json2csvParser = new Parser({fields: teamHeaders });

        const csv = json2csvParser.parse(teams);

        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=teamData.csv");
        res.status(200).end(csv)

    } catch (error) {
        res.status(500).json({ error: "Error occurred: " + error.message });
    }
});


// Use the exportTeam function as a route handler




const addTeam = asyncHandler(async (req, res) => {
    const { name, leader, members,problemPreference } = req.body;

    try {

        const leaderId = await User.findOne({ email: leader });
        const membersId  = await User.find({ email: { $in: members } });
        
        const newTeam = new Team({
           
            name,
            leader: leaderId._id,
            members: membersId.map(memberM => memberM._id),
            problemPreference
        });

        newTeam.members.push(leaderId);
        const team_leader = await User.findById({_id: leaderId._id});
        team_leader.isTeamLeader = true;
        await team_leader.save()
        const savedTeam = await newTeam.save();
        let i = 1;

        for (const member of savedTeam.members) {
            const user = await User.findById(member);
            user.inTeam = savedTeam._id;
            await user.save();
        }


        res.status(201).json(savedTeam);
    } catch (error) {
        res.status(400);
        throw new Error("Not able to add teams" +error)
    }
});

const updateTeam = asyncHandler(async (req, res) => {
    const { id: teamId } = req.params;
    const { name, leader, members } = req.body;

    try {
        const teamToUpdate = await Team.findById(teamId);
        if (!teamToUpdate) {
            return res.status(404).json({ message: "Team not found" });
        }


        teamToUpdate.name = name;
        teamToUpdate.leader = leader;
        teamToUpdate.members = members;

        
        const updatedTeam = await teamToUpdate.save();

       
        


       
        res.status(200).json(updatedTeam);
    } catch (error) {
        res.status(400).json({ message: "Error updating team", error: error.message });
    }
});


const deleteTeam = asyncHandler(async (req, res) => {
    const { id: teamId } = req.params;

    try {
        const teamToDelete = await Team.findById(teamId);
        if (!teamToDelete) {
            return res.status(404).json({ message: "Team not found" });
        }

        
        for (const member of teamToDelete.members) {
            const user = await User.findById(member);
            user.inTeam = null;
            await user.save();
        }

        
       

        await Team.deleteOne({_id: teamId});

        res.status(204).json({ message: "Team deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting team", error: error.message });
    }
});
const getSingleTeam = asyncHandler(async (req, res) => {
   

    const { email: leaderemail } = req.params;

    try {
        const user = await User.findOne({ email: String(leaderemail) });
        if (!user) {
            res.status(404);
            throw new Error("User does not exist");
        }
        const team = await Team.findOne({ leader: user._id }).populate({
            path: 'problemPreference.problems',
            select: '-_id title'
        });

       

        
        res.status(200).json({message: "Nothing"})// Use formattedTeam.problems

    } catch (error) {
        res.status(500).json({ message: "Error getting team", error: error.message });
    }
});


const shortListTeam = async (req, res) => {
    const { teams } = req.body;
  
    try {
      // Use Promise.all to send emails asynchronously
      await Promise.all(
        teams.map(async (teamId) => {
          const existingTeam = await Team.findById(teamId);
          const teamLeader = await User.findById(existingTeam.leader);
  
          // Check if team members exist and retrieve their emails
          const teamMembers = existingTeam.members
            ? await User.find({ _id: { $in: existingTeam.members } }, 'email')
            : [];
  
          if (!existingTeam) {
            return res.status(404).json({ message: 'Team not exists' });
          }
  
          existingTeam.isSelected = true;
          existingTeam.emailSent = "Selected";

          await existingTeam.save();
  
          // Send the team selection email
          await sendTeamSelection(
            teamLeader.email,
            existingTeam.name,
            teamLeader.fname,
            teamMembers.map((member) => member.email),
            existingTeam.selectedProblem.name
          );
  
          console.log(`Email sent to ${teamLeader.email}`);
        })
      );
  
      res.status(200).json({ message: 'Teams selected successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error selecting teams', error: error.message });
    }
  };

const unShortListTeam = async (req, res) => {
    const { teams } = req.body;
  
    try {
      await Promise.all(
        teams.map(async (teamId) => {
          const existingTeam = await Team.findById(teamId);
          const teamLeader = await User.findById(existingTeam.leader);
  
          if (!existingTeam) {
            return res.status(404).json({ message: 'Team not exists' });
          }
  
          existingTeam.isSelected = false;
          existingTeam.emailSent = "Rejected";
          await existingTeam.save();
  
          // Send the team rejection email
          await sendTeamRejection(
            teamLeader.email,
            existingTeam.name,
            teamLeader.fname
          );
  
          console.log(`Rejection email sent to ${teamLeader.email}`);
        })
      );
  
      res.status(200).json({ message: 'Teams unselected successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error unselecting teams', error: error.message });
    }
  };
  
  const getShortListedTeams = asyncHandler(async (req, res) => {
    const shortListedTeams = await Team.find({ isSelected: true }).populate({
      path: 'leader',
      select: '-_id email'
    }).populate({
      path: 'members',
      select: '-_id email gender'
    });
  
    const formattedTeams = shortListedTeams.map((team) => {
      const membersEmails = team.members.map(member => member.email);
      let male = 0, female = 0;

      team.members.forEach((member) => {
            if (member.gender === "male") {
                male++;
            } else if (member.gender === "female") {
                female++;
            }
        });

    
     

      const genderRatio = `${male}:${female}`;
        return {
          _id: team._id,
          name: team.name,
          genderRatio: genderRatio,
          leader: team.leader.email,
          members: membersEmails,
          hasPaid: team.hasPaid,
          isSelected: team.isSelected

        }
    })
    let maleCount = 0;
    let femaleCount = 0;
    let paidTeams = 0;
  
    if (!shortListedTeams || shortListedTeams.length === 0) {
      return res.status(404).json("No teams selected");
    }
  
    // Loop through each team and its members to count males and females
    shortListedTeams.forEach(team => {
      team.members.forEach(member => {
        if (member.gender === "male") {
          maleCount++;
        } else if (member.gender === "female") {
          femaleCount++;
        }
      });
      if(team.hasPaid){
        paidTeams++;
      }
    });

    formattedTeams.sort((a, b) => {
        if (a.hasPaid === true && b.hasPaid === false) {
          return -1; // a comes before b
        } else if (a.hasPaid === false && b.hasPaid === true) {
          return 1; // b comes before a
        } else {
          return 0; // maintain the existing order
        }
      });
  
    res.status(200).json({
      formattedTeams,
      maleCount,
      femaleCount,
      paidTeams
    });
  });
  


  const getTeamsPaid = asyncHandler(async(req,res) => {
    const teams = await Team.find({hasPaid: true}).populate({
        path: 'leader',
        select: '-_id email'
      }).populate({
        path: 'members',
        select: '-_id email gender'
      });

      const formattedTeams = teams.map((team) => {
        const membersEmails = team.members.map(member => member.email);
        let male = 0, female = 0;
  
        team.members.forEach((member) => {
              if (member.gender === "male") {
                  male++;
              } else if (member.gender === "female") {
                  female++;
              }
          });
  
      
       
  
        const genderRatio = `${male}:${female}`;
          return {
            _id: team._id,
            name: team.name,
            genderRatio: genderRatio,
            leader: team.leader.email,
            members: membersEmails,
            hasPaid: team.hasPaid,
            isSelected: team.isSelected
  
          }
      })
      res.status(200).json({
        formattedTeams});
  })

  const getTeamsUnpaid = asyncHandler(async(req,res) => {
    const teams = await Team.find({hasPaid: false}).populate({
        path: 'leader',
        select: '-_id email'
      }).populate({
        path: 'members',
        select: '-_id email gender'
      });

      const formattedTeams = teams.map((team) => {
        const membersEmails = team.members.map(member => member.email);
        let male = 0, female = 0;
  
        team.members.forEach((member) => {
              if (member.gender === "male") {
                  male++;
              } else if (member.gender === "female") {
                  female++;
              }
          });
  
      
       
  
        const genderRatio = `${male}:${female}`;
          return {
            _id: team._id,
            name: team.name,
            genderRatio: genderRatio,
            leader: team.leader.email,
            members: membersEmails,
            hasPaid: team.hasPaid,
            isSelected: team.isSelected
  
          }
      })
      res.status(200).json({
        formattedTeams});
  })


const assignProblem = asyncHandler(async (req, res) => {
    // const { problemId, teamId } = req.body;
  
    // try {
    //   const problem = await Problem.findById(problemId);
    //   if (!problem) {
    //     return res.status(404).json({ message: "Problem with the given id not found" });
    //   }
  
    //   const team = await Team.findById(teamId);
    //   if (!team) {
    //     return res.status(404).json({ message: "Team with the given id not found" });
    //   }
  
    //   // Update the selectedProblem object
    //   team.selectedProblem.id = problemId; // Store the problemId directly
    //   team.selectedProblem.name = problem.title;
  
    //   // Find the matching preference and update abstract
    //   for (const preference of team.problemPreference) {
    //     if (preference.problems.toString() === problemId) {
    //         team.selectedProblem.abstract = preference.abstract;
    //     }
    //   }
  
    //   // Save the updated team
    //   await team.save();
    //   console.log(team.selectedProblem)
  
    //   return res.status(200).json({ message: "Problem assigned successfully" });
    // } catch (error) {
    //   console.error("Error assigning problem:", error);
    //   return res.status(500).json({ message: "Internal Server Error" });
    // }
  });

  

const removeAssignedProblem = asyncHandler(async(req,res) => {
    // const {teamId} = req.body
    // const team = await Team.findById(teamId);
    // team.selectedProblem.id = null 
    // team.selectedProblem.name = null
    // team.selectedProblem.abstract = null
    // await team.save()
    // res.status(200).json({message: "Problem removed successfully"})
})


const removeTeamFromDb = asyncHandler(async(req,res) => {
    const {teamId} = req.body
    const team = await Team.findById(teamId);
    team.isSelected = false;
    await team.save()
    res.status(200).json({message: "Team disqualified"});
})




const getCreatedAt = asyncHandler( async(req,res) => {
    const data = []
    const teams = await Team.find({});
    for(const team of teams){
        data.push({
            'teamName': team.name,
            'created_at': team.createdAt
        })
    }
    res.status(200).json(data)
})


const updatePayment = asyncHandler ( async (req,res) => {

    const {teamId} = req.body;
    const team = await Team.findById(teamId);
    if(team.hasPaid){
        team.hasPaid = false;
        await team.save()
    }else{
        team.hasPaid = true;
        await team.save();
    }
    
    res.status(200).json({message: "Payment Updated"})
})



module.exports = { teamJsonResp, getAllTeams, addTeam, unShortListTeam, updateTeam, deleteTeam, getShortListedTeams,
     getSingleTeam, exportTeam, shortListTeam, getThadomal, assignProblem, getTeamsPaid, getTeamsUnpaid, removeAssignedProblem, removeTeamFromDb,getCreatedAt,updatePayment};
