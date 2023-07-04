import connectDB from "lib/middlewares/mongodb";
import {model, models, Schema } from "mongoose";


const userSchema = new Schema({
      fname: {
        type: String,
        required: true,
        default:null
      },
      lname: {
        type: String,
        required: true,
        default:null
      },
      email: {
          type: String,
          required: true,
          unique: true,
          match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})$/,
            "Invalid email format"
          ],
          default:null
      },
      picture: {
        type: String,
        required: false,
        default:null
      },
      password: {
        type: String,
        required: true,
        default:null
      },
      socialsite: {
        type: String,
        required: false,
        default:null
      },
      socialid: {
        type: String,
        required: false,
        default:null
      },
      isactive: {
        type: Boolean,
        required: false,
        default:false
      },
      verification_token: {
        type: String,
        required: false,
        default:null
      },
      phone:{
        type: Number,
        required: false,
        default:null
      },
      since: {
          type: Date,
          default: Date.now
      }
  });

const User = models.User || model('User', userSchema);

export default User;

// boolean functions
// {key:value}
export const isUserExist = async (params)=>{
  console.log("dddddddddd");
  console.log(params);
  const user = await User.findOne({email:params.email}).catch(err => console.log('Caught:', err.message));
  return !!user;
}

// Get Functions 
// email
export const getUserByEmail = async (email)=>{
  const user = await User.findOne({ email: email }).
  catch(err => console.log('Caught:', err.message));
  if(!user){
    return null;
  }
  return user;
}
// username
export const getUserByUsername = (username)=>{
  return true;
}
//userid
export const getUserByID = (userid)=>{
  return true;
}
//name
export const getUserByName = (name)=>{
  return true;
}

//token and email
export const verifyUserbyToken = async(token, email)=>{
  console.log("------------");
  console.log(token);
  console.log(email);
  //const filter = { verification_token: decodeURIComponent(token) };
  const filter = { email: email,isactive: false };
  const update = { isactive: true, verification_token:null };
  
  const user = await User.findOneAndUpdate(filter,update, {
    new: true
  }).catch((err) => {
      console.log(err);
      return false;
  });
  return !!user;
}

// Set Functions 

export const createUser = async (params)=>{

  var user = new User({
    fname:params.fname,
    lname:params.lname,
    email:params.email,
    password:params.password,
    picture:params.picture,
    verification_token:params.verification_token
  });
  console.log("3333333333333333")
  const userdata = await user.save().catch((error)=>{
    //console.log(error.code);
    return null;
  });

  return userdata;
  
}