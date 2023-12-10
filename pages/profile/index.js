import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "@components/dash/layout";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "../api/auth/[...nextauth]";
import { getUserByID } from '@models/userModel';
import Head from 'next/head';

import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from "yup";
import reqInstance from "@services/api";
import EditProfile from "@components/dash/profile/edit.profile.modal";

/* start server side function */
export async function getServerSideProps (context){

  const session = await getServerSession(context.req, context.res, nextAuthOptions);

  //console.log(session.user.accessToken);
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  const userDetails = await getUserByID(session.user.accessToken);

  return {
    props: {
      user:{
        email:userDetails.email,
        fname:userDetails.fname,
        lname:userDetails.lname,
        gender:userDetails.gender,
        city:userDetails.city,
        about:userDetails.about
      }
    },
  };

}

/* End server side function */

const validateSchema = Yup.object().shape({
  fname:  Yup.string().required("This field is required"),
  lname:  Yup.string().required("This field is required"),
  //email:  Yup.string().email("Please enter a valid email").required("This field is required"),
  gender: Yup.string().required("This field is required"),
  city:   Yup.string().required("This field is required"),
  about:  Yup.string().required("This field is required"),
});

export default function Profile(props) {

  const { fname, lname, about, city, gender, email} = props.user;
  //const { data: session, status } = useSession();
  const [isOk, setOk]= useState(false);
  const [doEdit, toggleEdit] = useState(false);
  const [response, setResponse]= useState("");

  useEffect( () => {
   
  },[]);

  const handleModal = ()=>{
    toggleEdit(!doEdit);
  }

   const ProfileComponent = ()=>{
    return(
        <>
            <Head>
              <title>Profile</title>
            </Head>
            <div className="row">
            <div className="col-md-9 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className='row'>
                    <div className='col-10'> 
                      <h4 >Profile</h4>
                    </div> 
                    <div className='col-2'> 
                    <a  className="btn btn-success" style={{"float":"right"}} onClick={handleModal}>
                      <i className='fa fa-edit' >Edit</i>
                    </a>
                    </div>
                  </div>
                  {/* <p className="card-description">
                      Horizontal form layout
                  </p> */}
                
                    <div className="row">
                      <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-6">
                        <label className=" col-form-label"  placeholder="Email" >{email} </label>
                      </div>
                    </div>
                    <div className="row">
                      <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                      <div className="col-sm-6">
                        <label className=" col-form-label"  id="exampleInputMobile" placeholder="Mobile number"> {fname} </label>
                      </div>
                    </div>
                    <div className=" row">
                      <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">First Name</label>
                      <div className="col-sm-6">
                      <label className=" col-form-label" id="exampleInputPassword2" placeholder="Password" >{fname} </label>
                      </div>
                    </div>
                    <div className=" row">
                      <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Last Name</label>
                      <div className="col-sm-6">
                        <label className=" col-form-label"  id="exampleInputConfirmPassword2" placeholder="Password" > {lname}</label>
                      </div>
                    </div>
                    <div className=" row">
                      <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">City</label>
                      <div className="col-sm-6">
                        <label className=" col-form-label"  id="exampleInputConfirmPassword2" placeholder="Password" > {city}</label>
                      </div>
                    </div>
                    <div className=" row">
                      <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">About</label>
                      <div className="col-sm-9">
                        <label className=" col-form-label"  id="exampleInputConfirmPassword2" placeholder="Password" > {about}</label>
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
            </div>
            <EditProfile  user={props.user} handleModal={handleModal} stateModal={doEdit} />
        </>
    )
  }

  return (
    <>
      <Layout childComponent={<ProfileComponent />} />
    </>
  )
}

Profile.auth = true;

