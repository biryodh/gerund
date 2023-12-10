import jwt from 'jsonwebtoken';
import User from "models/userModel";
import validation from "lib/middlewares/validation";
import schemas from "lib/validatorSchemas";
import connectDB from 'lib/middlewares/mongodb';
import {getVehicleByID, getVehicleByNumber} from "@models/vehicleModel";
import { getUserByID } from '@models/userModel';
import { Mailer } from '@services/nodemailer';
import { AlertTemplate } from "@components/email-templates/alert-template";
import { render } from '@react-email/render';

import { getToken } from 'next-auth/jwt';
import { getUserByEmail } from 'models/userModel';

export default  connectDB(async function func (req, res) {
  
     const user = await getToken({req});
     const user_id = await getUserByEmail(user.email);
     console.log(user_id._id.toString())
    return ;

    return new Promise(async(resolve) => {
    
      const { method } = req;
      
      try {
        switch (method) {
          case 'POST':
            /* Get Post Data */
            const { vnumber } = req.body;
            
            const vObj = await getVehicleByNumber(vnumber);

            res.status(200).send({
              status: true,
              message :"Search complete",
              data:vObj
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