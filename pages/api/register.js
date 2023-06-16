//import clientPromise from "lib/mongo-temp"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import schemas from "lib/validatorSchemas";
import Joi from "joi";
import validation from "lib/middlewares/validation";
import User from "models/userModel";
import connectDB from 'lib/middlewares/mongodb';
import { resolve } from 'styled-jsx/css';



//import Cookies from 'js-cookie';

/* JWT secret key */
const KEY = process.env.JWT_KEY;

export default connectDB(validation( { body: schemas.LoginSchema },  async function func (req, res) {
  
    switch (req.method) {
        case "POST":
          let {email,password,fname,lname} = (req.body);
          
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
        
          var user = new User({
            fname:fname,
            lname:lname,
            email:email,
            password:  hashedPassword,
          });
  
          var usercreated = await user.save();

          res.status(200).send({
            data: usercreated,
          });

          break;
        case "GET":
          // const allPosts = await db.collection("posts").find({}).toArray();
          // res.json({ status: 200, data: allPosts });
          break;
        case "PUT":
            // const post = await db.collection("posts").find({}).toArray();
            // res.json({ status: 200, data: allPosts });
            break;
        default:
            break;
      }
}))