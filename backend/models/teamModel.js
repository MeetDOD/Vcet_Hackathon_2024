const mongoose = require("mongoose");


const TeamSchema = mongoose.Schema({

    
  
    name: {
        type: String,
        unique: [true, "Team name is already taken"],
        required: [true, "Must be provided"],
        toLowerCase: true,
    },

    leader: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "leader must be provided"]
    },

    members: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],

    isSelected: {
        type: Boolean,
        default: false
    },
    hasPaid:{
        type: Boolean,
        default: false
    },
    isVerified:{
        type: Boolean,
        default: false
    },
  
    selectedProblem: {
        
        id:{
            type: mongoose.Types.ObjectId,
            ref: "Problem"
        },
        name: {
            type:String
        },
        abstract: {
            type: String
        }
       
    },
    emailSent:{
        type: String,
        enum: ["Rejected","Selected", "null"],
        default: "null"
    }
},
    { timestamps: true }
);



const Team = mongoose.model("Team", TeamSchema)

module.exports = { Team, TeamSchema }