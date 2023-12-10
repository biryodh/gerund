import React from 'react'
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from "yup";


const otpValidateSchema = Yup.object().shape({
    otp: Yup.string().required("This field is required").min(6).max(6),
});


const OTPField = (props)=>{
    return (
        <>
                <Formik 
                    validateOnMount
                    initialValues= {{
                        email:props.email
                    }}
                    validationSchema={otpValidateSchema}
                    onSubmit= {(values) => {
                        doRegister(values);
                    }} 
                    >

                { ({values, errors, touched, handleBlur, handleChange, onSubmit, handleSubmit }) => (
                  <form className="forms-sample">
                        <div style={{maxHeight:'70vh',overflow:'auto'}}>
                          <div className="form-group  pr-4">
                            <label htmlFor="otp"> Confirm <b>one time password!</b> </label>
                            <input type="text" name='otp' defaultValue={props.otp} className="form-control" id="otp" placeholder="Enter 6 digit code *" />
                          </div> 
                          {errors.otp && touched.otp ? (
                          <code>{errors.otp}</code>
                          ) : null}
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

export default OTPField;