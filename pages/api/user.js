import jwt from 'jsonwebtoken';
import User from "models/userModel";
import validation from "lib/middlewares/validation";
import schemas from "lib/validatorSchemas";
import connectDB from 'lib/middlewares/mongodb';


export default  connectDB(function func (req, res) {
  
    return new Promise(async(resolve) => {
    
      const { method } = req;
      try {
        switch (method) {
          case 'POST':
            /* Get Post Data */
            const { email, password } = req.body;
          
            
            /* Any how email or password is blank */
            // if (!email || !password) {
            //   return res.status(400).json({
            //     status: 'error',
            //     error: 'Request missing username or password',
            //   });
            // }
            /* Check user email in database */
              // const user = USERS.find(user => {
              //   return user.email === email;
              // });
            
            //   const user = await User.findOne({ email: email }).
            //   catch(err => console.log('Caught:', err.message));

             
            //  User.findOne({ email: email })
            // .then((user)=>{
            //   const userId = user._id,
            //   userEmail = user.email,
            //   userPassword = user.password,
            //   userCreated = user.createdAt;


          
            
            /* Check if exists */
            // if (!user) {
            //   /* Send error with message */
            //   res.status(400).json({ status: 'error', error: 'User Not Found' });
            // }
            /* Variables checking */
            // if (user) {
            //   const userId = user._id,
            //     userEmail = user.email,
            //     userPassword = user.password,
            //     userCreated = user.createdAt;
                
            //   /* Check and compare password */
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
            // }
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