import Joi from "joi";

const schemas = { 
    LoginSchema: Joi.object({ 
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        fname:Joi.string().required(),
        lname:Joi.string().required()
      }),
    SigninSchema:Joi.object({ 
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })
    
  };
  
export default schemas;