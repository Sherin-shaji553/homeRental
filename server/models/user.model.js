import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },

    lastName:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },
    
    profileImagePath:{
        type:String,
        default:"",
    },

    tripList:{
        type:Array,
        dafault:[],
    },
    wishList:{
        type:Array,
        dafault:[],
    },

    propertyList:{
        type:Array,
        dafault:[],
    },

    reservationList:{
        type:Array,
        dafault:[],
    }
}, {timestamps:true})

const User = mongoose.model("User", userSchema)

export default User