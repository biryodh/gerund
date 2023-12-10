import jwt from 'jsonwebtoken';
import User from "models/userModel";
import validation from "lib/middlewares/validation";
import schemas from "lib/validatorSchemas";
import connectDB from 'lib/middlewares/mongodb';
import {getVehicleByID} from "@models/vehicleModel";
import { getUserByID } from '@models/userModel';
import { Mailer } from '@services/nodemailer';
import { AlertTemplate } from "@components/email-templates/alert-template";
import { render } from '@react-email/render';

export default  connectDB(function func (req, res) {
  
    return new Promise(async(resolve) => {
    
      const { method } = req;
      try {
        switch (method) {
          case 'POST':
            /* Get Post Data */
            const { location, message, vid, name } = req.body;
            
            console.log(location,message, vid);

            const vObj = await getVehicleByID(vid);
            const uObj = await getUserByID(vObj.user_id);

            const html = render(<AlertTemplate message={message} location={location} />, {
                pretty: true
            });

            const mailData = {
                from: 'mbrosingh@gmail.com',
                to: uObj.email,
                subject: `Vehicle Alert!`,
                text: `Alert message from ${name} <br> ${message} <br><br> ${location}`,
                html: html
            }
            Mailer(mailData);
            res.status(200).send({
              status: true,
              message :"Alert has been sent to Owner"
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