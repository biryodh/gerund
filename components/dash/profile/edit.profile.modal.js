import Head from 'next/head';
import React, { useState } from 'react'
import Modal from 'react-modal';
import { Formik, Form, Field,  useFormik } from 'formik';
import * as Yup from "yup";

const customStyles = {
    overlay: {
       backgroundColor: 'rgba(0, 0, 0, 0.6)',
       zIndex:9998,
       height: "100%",
       overflowY: "hidden"
    },
    content: {
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       width: '50%',
       transform: 'translate(-50%, -50%)',
       padding:'20px 0px 20px 20px'
    }
    
 }

 const profileValidateSchema = Yup.object().shape({
  //email: Yup.string().email("Please enter a valid email").required("This field is required"),
  fname: Yup.string().required("This field is required"),
  lname: Yup.string().required("This field is required"),
  gender: Yup.string().required("This field is required"),
  city: Yup.string().required("This field is required"),
  about: Yup.string().required("This field is required")
});

 export default  function EditProfile(props)  {
    
    const afterOpenModal =()=>{
      console.log("open modal");
    }

    const {fname, lname, city, about, gender} = props.user;
  
   return (
        <>
            <Modal isOpen={props.stateModal}  ariaHideApp={false} onAfterOpen={afterOpenModal} onRequestClose={console.log("onclose modal")} contentLabel="Example Modal" style={customStyles}>
            <h4 className="card-title" style={{backgroundColor:'f3f2f1'}}>Edit Profile</h4>
              <Formik
              initialValues={{ 
                fname: fname, 
                lname: lname,
                gender: gender,
                city:   city,
                about:  about }}
                validationSchema={profileValidateSchema}
                validateOnMount
                onSubmit={async (values) => {
                // await new Promise((resolve) => setTimeout(resolve, 500));
                // alert(JSON.stringify(values, null, 2));

              }}
              >
                 {({values, errors, touched, handleBlur, handleChange, onSubmit, handleSubmit }) => (
                <Form className="forms-sample" method='POST' onSubmit={handleSubmit}>
                      <div style={{maxHeight:'70vh',overflow:'auto'}}>
                        <div className="form-group  pr-4">
                          <label htmlFor="exampleInputName1">First Name</label>
                          <Field
                            type="text" name='fname' id="fname"
                            className="form-control" placeholder="Name" 
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {errors.fname && touched.fname ? (
                                <code>{errors.fname}</code>
                          ) : null}
                        </div>
                        <div className="form-group pr-4">
                          <label htmlFor="exampleInputName1">Last Name</label>
                          <Field type="text" className="form-control" name='lname'  id="lname" placeholder="Name" />
                          {errors.lname && touched.lname ? (
                                <code>{errors.lname}</code>
                          ) : null}
                        </div>
                        {/* <div className="form-group">
                          <label htmlFor="exampleInputEmail3">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword4">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
                        </div> */}
                        <div className="form-group pr-4">
                          <label htmlFor="exampleSelectGender">Gender</label>
                            <Field  as="select" className="form-control"  name='gender' id='gender' >
                              <option value="" >Select gender</option>
                              <option  value="M">Male</option>
                              <option  value="F">Female</option>
                              <option  value="N">Not to disclose</option>
                            </Field>
                            {errors.gender && touched.gender ? (
                                <code>{errors.gender}</code>
                          ) : null}
                          </div>
                        {/* <div className="form-group">
                          <label>File upload</label>
                          <input type="file" name="img[]" className="file-upload-default" />
                          <div className="input-group col-xs-12">
                            <input type="text" className="form-control file-upload-info" disabled="" placeholder="Upload Image" />
                            <span className="input-group-append">
                              <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                            </span>
                          </div>
                        </div> */}
                        <div className="form-group pr-4">
                          <label htmlFor="exampleInputCity1">City</label>
                          <Field type="text" name='city'   className="form-control" id="city" placeholder="Location"/>
                          {errors.city && touched.city ? (
                                <code>{errors.city}</code>
                          ) : null}
                        </div>
                        <div className="form-group pr-4">
                          <label htmlFor="exampleTextarea1">About yourself</label>
                          <Field as="textarea" className="form-control"   name='about' id="about" rows="4"></Field>
                          {errors.about && touched.about ? (
                                <code>{errors.about}</code>
                          ) : null}
                        </div>
                        </div>
                        <div style={{marginTop:'10px'}}>
                          <button type="submit" className="btn btn-primary mr-2">Submit</button>
                          <button className="btn btn-light" onClick={() => props.handleModal()} >Cancel</button>
                        </div>

                </Form>
                 )}
              </Formik>  
            </Modal>
          
        </>
    )
}