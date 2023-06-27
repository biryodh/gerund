//import clientPromise from "lib/mongo-temp"
//https://medium.com/swlh/jwt-json-web-tokens-user-authentication-in-next-js-web-application-51deab8f2e96


import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "models/userModel";
import validation from "lib/middlewares/validation";
import schemas from "lib/validatorSchemas";
import connectDB from 'lib/middlewares/mongodb';


/* JWT secret key */
const KEY = process.env.JWT_KEY;

export default  connectDB(validation( { body: schemas.SigninSchema },   function func (req, res) {
  
    return new Promise(async(resolve) => {
    
      const { method } = req;
      try {
        switch (method) {
          case 'POST':
            /* Get Post Data */
            const { email, password } = req.body;
            // console.log(email);
            // console.log(password);
            // console.log("--------");
            
            /* Any how email or password is blank */
            if (!email || !password) {
              return res.status(400).json({
                status: 'error',
                error: 'Request missing username or password',
              });
            }
            /* Check user email in database */
              // const user = USERS.find(user => {
              //   return user.email === email;
              // });
            
              const user = await User.findOne({ email: email }).
              catch(err => console.log('Caught:', err.message));

             
            //  User.findOne({ email: email })
            // .then((user)=>{
            //   const userId = user._id,
            //   userEmail = user.email,
            //   userPassword = user.password,
            //   userCreated = user.createdAt;


            //   bcrypt.compare(password, userPassword).then(isMatch => {
            //     /* User matched */
            //     if (isMatch) {
            //       /* Create JWT Payload */
            //       console.log("Hereeeee");
            //       const payload = {
            //         id: userId,
            //         email: userEmail,
            //         createdAt: userCreated,
            //       };
            //       /* Sign token */
            //       jwt.sign(
            //         payload,
            //         KEY,
            //         {
            //           expiresIn: 31556926, // 1 year in seconds
            //         },
            //         (err, token) => {
            //           /* Send succes with token */
            //           res.status(200).json({
            //             success: true,
            //             token: 'Bearer ' + token,
            //           });
            //         },
            //       );
            //     } else {
            //       /* Send error with message */
            //       res
            //         .status(400)
            //         .json({ status: 'error', error: 'Password incorrect' });
            //     }
            //   });

            // })
            // .catch((err)=>{
            //   res.status(400).json({ status: 'error', error: 'User Not Found' });
            // });
            
            /* Check if exists */
            if (!user) {
              /* Send error with message */
              res.status(400).json({ status: 'error', error: 'User Not Found' });
            }
            /* Variables checking */
            if (user) {
              const userId = user._id,
                userEmail = user.email,
                userPassword = user.password,
                userCreated = user.createdAt;
                
                console.log(user)
                //console.log()
              /* Check and compare password */
              bcrypt.compare(password, userPassword).then(isMatch => {
                /* User matched */
                if (isMatch) {
                  /* Create JWT Payload */
                  //console.log("Hereeeee");
                  const payload = {
                    id: userId,
                    email: userEmail,
                    createdAt: userCreated,
                  };

                  res.status(200).json(payload);
                  
                  /* Sign token */
                  // jwt.sign(
                  //   payload,
                  //   KEY,
                  //   {
                  //     expiresIn: 31556926, // 1 year in seconds
                  //   },
                  //   (err, token) => {
                  //     //Send succes with token 
                  //     res.status(200).json({
                  //       success: true,
                  //       token: 'Bearer ' + token,
                  //     });
                  //   },
                  // );
                } else {
                  /* Send error with message */
                  res
                    .status(400)
                    .json({ status: 'error', error: 'Password incorrect' });
                }
              });
            }
           resolve();
            break;
          case 'PUT':
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
  }));