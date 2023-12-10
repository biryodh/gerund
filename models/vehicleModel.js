import connectDB from "lib/middlewares/mongodb";
import {model, models, Schema } from "mongoose";
import build from "next/dist/build";
import { connectMongo } from "lib/middlewares/mongodb";

const vehicleSchema = new Schema({
  rdate: {
    type: String,
    required: true,
    default:null
  },
  rnumber: {
    type: String,
    required: true,
    default:null
  },
  vnumber: {
    type: String,
    required: true,
    default:null
  },
  owner: {
    type: String,
    required: true,
    default:null
  },
  address: {
    type: String,
    required: true,
    default:null
  },
  state: {
    type: String,
    required: true,
    default:null
  },
  eno: {
    type: String,
    required: true,
    default:null
  },
  cno: {
    type: String,
    required: true,
    default:null
  },
  fuel: {
    type: String,
    required: true,
    default:null
  },
  color: {
    type: String,
    required: true,
    default:null
  },
  user_id: {
    type: Object,
    required: false,
    default:null
  },
});

const Vehicle = models.Vehicle || model('Vehicle', vehicleSchema);

export default Vehicle;

// boolean functions
// {key:value}
// export const isUserExist = async (params)=>{
//   const user = await User.findOne({email:params.email}).catch(err => console.log('Caught:', err.message));
//   return !!user;
// }

// Get Functions 
// email
export const getVehicleByNumber = async (number)=>{
  const vehicle = await Vehicle.findOne({ vnumber: number }).
  catch(err => console.log('Caught:', err.message));
  if(!vehicle){
    return null;
  }
  return vehicle;
}
//username
export const getVehicles =async (username)=>{
  await connectMongo();
  const vehicle = await Vehicle.find({ }).
  catch(err => {console.log('Caught:', err.message)
  return null;
});
  return vehicle;  
}
//userid


export const getVehicleByID = async (vehicleId)=>{
  
  await connectMongo();
  const vehicle = await Vehicle.findOne( { _id: vehicleId } ).
  catch(err => console.log('Caught:', err.message));
  //console.log(user)
  if(!vehicle){
    return null;
  }
  //console.log(user)
  return vehicle;
}

//name
// export const getUserByName = (name)=>{
//   return true;
// }

//token and email
// export const verifyUserbyToken = async(token, email)=>{
//   console.log("------------");
//   console.log(token);
//   console.log(email);
//   //const filter = { verification_token: decodeURIComponent(token) };
//   const filter = { email: email,isactive: false };
//   const update = { isactive: true, verification_token:null };
  
//   const user = await User.findOneAndUpdate(filter,update, {
//     new: true
//   }).catch((err) => {
//       console.log(err);
//       return false;
//   });
//   return !!user;
// }

// Set Functions 

export const createVehicleRecord = async (params)=>{

  var record = new Vehicle({ 
    rdate:params.rdate, 
    rnumber:params.rnumber, 
    vnumber:params.vnumber, 
    owner:params.owner, 
    address:params.address, 
    state:params.state,
    eno:params.eno,
    cno:params.cno,
    fuel:params.fuel,
    color:params.color,
    user_id:params.user_id 
});

  const vehicle = await record.save().catch((error)=>{
    return null;
  });

  console.log(vehicle)

  return vehicle;
  
}