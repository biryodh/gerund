import bcrypt from 'bcryptjs';

export function encryptPassword(pass){
    //console.log("pass:  " + pass);
     return bcrypt.genSalt(10, (err, salt) => {
        return   bcrypt.hash(pass, salt, function(err, hash) {
              return hash;
              });
          })
    return pass;
}
