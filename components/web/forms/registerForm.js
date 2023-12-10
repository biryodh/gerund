import logo from "@styles/images/logo-dark.svg"
//import bkImage from "@styles/images/auth/login-bg.jpg"
import Image from 'next/image'
//import { roles } from "lib/constants"
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from "yup";
import reqInstance from "@services/api";
import { useState } from "react";

const styling = {
    background: "url('/login-bg.jpg')"
}

  
export default function Register(props) {

  const [isOk, setOk]= useState(false);
  const [response, setResponse]= useState("");

  const validateSchema = Yup.object().shape({
    fname: Yup.string().required("This field is required"),
    lname: Yup.string().required("This field is required"),
    email: Yup.string().email("Please enter a valid email").required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters")
      .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
      .matches(/\d/, "Password should contain at least one number")
      .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character")
    // confirmPassword: Yup.string().when("password", (password, field) => {
    //   if (password) {
    //     return field.required("The passwords do not match").oneOf([Yup.ref("password")], "The passwords do not match");
    //   }
    //}),
  });


  const doRegister= async(data)=>{
    console.log(data);
    const url = "http://localhost:3000/api/register";
    const user  = await reqInstance.post(url,data).then((response) => {
      console.log(response.data);
      setResponse("You has been registered successfully");
      setOk(true);
    }).catch((error)=>{
      console.log("error");
      setResponse("Oops! something went wrong, Please try again");
      setOk(true);
      console.log(error);
    });
  }

    return (
      <>
       <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
              <div className="brand-logo">
                <Image src={logo} alt="logo" />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">Join us today! It takes only few steps</h6>
                { !isOk && (<div>
                  <Formik 
                        validateOnMount
                        initialValues= {{
                          fname: "",
                          lname: "",
                          email: "",
                          password: ""
                        }}
                        validationSchema={validateSchema}
                        onSubmit= {(values) => {
                          doRegister(values);
                        }}
                      >

                  {({values, errors, touched, handleBlur, handleChange, onSubmit, handleSubmit }) => (
                    <form className="pt-3" method="post" onSubmit={handleSubmit}  >
                      <div className="form-group">
                        {/* <label>Username</label> */}
                        <div className="input-group">
                          <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0">
                              <i className="mdi mdi-account-outline text-primary"></i>
                            </span>
                          </div>
                          <input className="form-control form-control-lg border-left-0" placeholder="First Name"
                            name="fname"
                            type={"text"}
                            value={values.fname}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.fname && touched.fname ? (
                          <code>{errors.fname}</code>
                        ) : null}
                      </div>
                      <div className="form-group">
                        {/* <label>Username</label> */}
                        <div className="input-group">
                          <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0">
                              <i className="mdi mdi-account-outline text-primary"></i>
                            </span>
                          </div>
                          <input className="form-control form-control-lg border-left-0" placeholder="Last Name" 
                          name="lname"
                          type={"text"}
                          value={values.lname}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          />
                        </div>
                        {errors.lname && touched.lname ? (
                          <code>{errors.lname}</code>
                        ) : null}
                      </div>
                      <div className="form-group">
                        {/* <label>Email</label> */}
                        <div className="input-group">
                          <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0">
                              <i className="mdi mdi-email-outline text-primary"></i>
                            </span>
                          </div>
                          <input className={"form-control form-control-lg border-left-0"} placeholder="Email" 
                          name="email"
                          type={"email"}
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          />
                        </div>
                        {errors.email && touched.email ? (
                          <code>{errors.email}</code>
                        ) : null}
                      </div>
                      {/* <div className="form-group">
                        <label>Role</label>
                        <select name="role" className="form-control form-control-lg" id="exampleFormControlSelect2">
                        <option>Select role</option>
                        {roles.map(function(role, i){
                            return <option key={i} value={role.key}> {role.text} </option> ;
                        })}
                        </select>
                      </div> */}
                      <div className="form-group">
                        {/* <label>Password</label> */}
                        <div className="input-group">
                          <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0">
                              <i className="mdi mdi-lock-outline text-primary"></i>
                            </span>
                          </div>
                          <input className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" 
                          name="password"
                          type={"password"}
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          />
                        </div>
                        {errors.password && touched.password ? (
                          <code>{errors.password}</code>
                        ) : null}
                      </div>
                      {/* <div className="mb-4">
                        <div className="form-check">
                          <label className="form-check-label text-muted">
                            <input type="checkbox" className="form-check-input" />
                              I agree to all Terms & Conditions
                          </label>
                        </div>
                      </div> */}
                      <div className="mt-3">
                        <button type="submit" onClick={onsubmit}  className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
                      </div>
                    </form>
                  )}

                  </Formik>
                </div>) }
                { isOk && (<div>
                  <h2>{response}</h2>
                </div>)}
                <div className="text-center mt-4 font-weight-light">
                    Already have an account? <button type="button" className=" btn text-primary" onClick={()=>props.clickHandle()} >Login</button>
                </div>
              </div>
            </div>
                
      </>
    )
}
  