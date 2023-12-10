import bcrypt from 'bcryptjs';
import { TRUE } from 'sass';

export function encryptPassword(pass){
    //console.log("pass:  " + pass);
     return bcrypt.genSalt(10, (err, salt) => {
        return   bcrypt.hash(pass, salt, function(err, hash) {
              return hash;
              });
          })
    return pass;
}

export async function  passwordVerify (userPass,dbPass) {
    
    return bcrypt.compare(userPass, dbPass).then(isMatch => {
        /* User matched */
        if (isMatch) {
            //console.log("userPass", dbPass)
            return true;
        }
        return false
    });
    
}