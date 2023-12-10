import React from 'react'
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from "yup";


const emailValidateSchema = Yup.object().shape({
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters")
      .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
      .matches(/\d/, "Password should contain at least one number")
      .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
    confirmPassword: Yup.string().when("password", (password, field) => {
      if (password) {
        return field.required("The passwords do not match").oneOf([Yup.ref("password")], "The passwords do not match");
      }
    })
});


const ChangePassword = (props)=>{

    const passwordUpdateRequest= async(data)=>{
        console.log(data);
        
        props.handleStep1(false);
        props.handleStep2(true);
        
        // const user  = await reqInstance.post(url,data).then((response) => {
        //   console.log(response.data);
        //   setResponse("You has been registered successfully");
        //   setOk(true);
        // }).catch((error)=>{
        //   console.log("error");
        //   setResponse("Oops! something went wrong, Please try again");
        //   setOk(true);
        //   console.log(error);
        // });
      }


    return (
        <>
                <Formik 
                    validateOnMount
                    initialValues= {{
                        password:"",
                        confirmPassword:""
                    }}
                    validationSchema={emailValidateSchema}
                    onSubmit= {(values) => {
                        console.log(values);
                        passwordUpdateRequest(values);
                    }} 
                    >

                    {({values, errors, touched, handleBlur, handleChange, onSubmit, handleSubmit }) => (
                        <form className="forms-sample" onSubmit={handleSubmit}>
                            <div style={{maxHeight:'70vh',overflow:'auto'}}>
                                <div className="form-group pr-4 ">
                                <label htmlFor="password">Enter new password *</label>
                                <input 
                                    type={"password"} 
                                    name='password' 
                                    defaultValue={values.password} 
                                    className="form-control" 
                                    id="password" 
                                    placeholder="New password" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.password && touched.password ? (
                                <code>{errors.password}</code>
                                ) : null}
                                </div> 
                            </div>
                            <div style={{maxHeight:'70vh',overflow:'auto'}}>
                                <div className="form-group pr-4 ">
                                <label htmlFor="confirmPassword">Confirm new password *</label>
                                <input 
                                    type={"password"} 
                                    name='confirmPassword' 
                                    defaultValue={values.confirmPassword} 
                                    className="form-control" 
                                    id="confirmPassword" 
                                    placeholder="Confirm New Password" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                <code>{errors.confirmPassword}</code>
                                ) : null}
                                </div> 
                                
                            </div>
                            <div style={{marginTop:'10px'}}>
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button className="btn btn-light" onClick={() => props.handleModal()} >Cancel</button>
                            </div>
                        </form>   
                    )}
            </Formik>
        </>
    )
}

export default ChangePassword