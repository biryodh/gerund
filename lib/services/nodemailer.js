const nodemailer = require('nodemailer');

const config = {
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'mbrosingh@gmail.com',
      pass: "ytokohkagxaqkteq",
    },
    secure: true,
  }

  const transporter = nodemailer.createTransport(config);

  export const Mailer = (params)=>{
    transporter.sendMail(params, function (err, info) {
        if(err)
         { console.log(err)
          return false;}
        else
         { console.log(info)
          return true;}
      })
  }