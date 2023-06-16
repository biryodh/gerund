import {model, models, Schema } from "mongoose";

const userSchema = new Schema({
    fname: {
        type: String,
        required: true
      },
    lname: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})$/,
          "Invalid email format"
        ]
      },
    password: {
        type: String,
        required: true,
        select: false
      },
    since: {
        type: Date,
        default: Date.now
    }
  });

const User = models.User || model('User', userSchema);

export default User;