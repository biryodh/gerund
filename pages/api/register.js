//import clientPromise from "lib/mongo-temp"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import schemas from "lib/validatorSchemas";
import Joi from "joi";
import validation from "lib/middlewares/validation";
import User from "models/userModel";
import connectDB from 'lib/middlewares/mongodb';
import { resolve } from 'styled-jsx/css';
import { Mailer } from '@services/nodemailer';
import { createUser } from 'models/userModel';
import { encryption } from '@services/crypto';
import VerifyAccount from '@components/email-templates/email-verify';
import { render } from '@react-email/render';


//import Cookies from 'js-cookie';

/* JWT secret key */
const KEY = process.env.JWT_KEY;

export default connectDB(validation( { body: schemas.LoginSchema },  async function func (req, res) {
  
    switch (req.method) {
        case "POST":
          let {email,password,fname,lname} = (req.body);
          
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          const encryptedData = await encryption({
            email:email,
          });
          var data = {
            fname:fname,
            lname:lname,
            email:email,
            password:  hashedPassword,
            verification_token:encryptedData,
            picture:null
          };
  
          var usercreated = await createUser(data);
          //const vl= process.env.WEB_URL + '/verify-account?s='+encryptedData;
          
          if(usercreated){

            const html = render(<VerifyAccount token={encryptedData} />, {
              pretty: true
            });


            const mailData = {
              from: 'mbrosingh@gmail.com',
              to: usercreated.email,
              subject: `Registration`,
              text: `Testing email for registration`,
              html: html
          }
          Mailer(mailData);
          res.status(200).send({
            data: usercreated,
          });
        }else{
          res.status(401).send({
            error: "Error in registration",
          });
        }

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