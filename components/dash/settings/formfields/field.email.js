import React from 'react'
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from "yup";
import { WEBURL } from 'lib/constants';


const emailValidateSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required("This field is required"),
});


const EmailField = (props)=>{

    const emailupdateRequest= async(data)=>{
        //console.log(data);
        const url = WEBURL+"/api/user/edit";
        props.handleStep1(false);
        props.handleStep2(true);
        props.handleNewEmail(data.email);
        props.handleToken("token");
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
                        email:""
                    }}
                    validationSchema={emailValidateSchema}
                    onSubmit= {(values) => {
                        console.log(values);
                        emailupdateRequest(values);
                    }} 
                    >

                    {({values, errors, touched, handleBlur, handleChange, onSubmit, handleSubmit }) => (
                        <form className="forms-sample" onSubmit={handleSubmit}>
                            <div style={{maxHeight:'70vh',overflow:'auto'}}>
                            <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Current Email</label>
                                <input type="text" name='currentemail' defaultValue={props.email} readOnly className="form-control" id="currentemail" placeholder="Email" />
                                </div> 
                                <div className="form-group pr-4 ">
                                <label htmlFor="exampleInputName1">Enter new email *</label>
                                <input 
                                    type={"text"} 
                                    name='email' 
                                    defaultValue={values.email} 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="New Email" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.email && touched.email ? (
                                <code>{errors.email}</code>
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

export default EmailField