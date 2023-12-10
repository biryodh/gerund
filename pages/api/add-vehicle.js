import jwt from 'jsonwebtoken';
import User from "models/userModel";
import validation from "lib/middlewares/validation";
import schemas from "lib/validatorSchemas";
import connectDB from 'lib/middlewares/mongodb';
import {getVehicleByID} from "@models/vehicleModel";
import {createVehicleRecord} from  "@models/vehicleModel";
import { getUserByID } from '@models/userModel';
import { Mailer } from '@services/nodemailer';
import { AlertTemplate } from "@components/email-templates/alert-template";
import { render } from '@react-email/render';
//import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import { getUserByEmail } from 'models/userModel';

export default  connectDB(async function func (req, res) {

      const user = await getToken({req});
      const user_id = await getUserByEmail(user.email);
      //console.log(user_id._id.toString())

    return new Promise(async(resolve) => {
      
      const session = await getSession();

      console.log("session:",session);
      const { method } = req;
      try {
        switch (method) {
          case 'POST':
            /* Get Post Data */
            const { rdate, rnumber, vnumber, owner, address, state, eno, cno, fuel, color } = req.body;

            const data = { 
                rdate:rdate, 
                rnumber:rnumber, 
                vnumber:vnumber, 
                owner:owner, 
                address:address, 
                state:state,
                eno:eno,
                cno:cno,
                fuel:fuel,
                color:color,
                user_id:user_id._id
            }

            var recordAdded = await createVehicleRecord(data);

            //const vObj = await getVehicleByID(vid);

            // const html = render(<AlertTemplate message={message} location={location} />, {
            //     pretty: true
            // });

            // const mailData = {
            //     from: 'mbrosingh@gmail.com',
            //     to: uObj.email,
            //     subject: `Vehicle Alert!`,
            //     text: `Alert message from ${name} <br> ${message} <br><br> ${location}`,
            //     html: html
            // }
            // Mailer(mailData);
            res.status(200).send({
              status: true,
              message :"Vehicle has been added to records.",
              data:recordAdded
            });
            
            break;
        case 'GET':
            
            break;
        case 'PUT':
            console.log("updating");
            break;
        case 'PATCH':
            break;
        default:
            break;
        }
      } catch (error) {
        throw error;
      }
      return resolve();
    });
  });