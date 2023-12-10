import logo from "@styles/images/logo-dark.svg"
//import bkImage from "@styles/images/auth/login-bg.jpg"
import Image from 'next/image'
//import "@styles/css/style.css"
import { useRouter } from "next/router";

import {useState} from 'react';
import { Formik, Form, Field,  useFormik } from 'formik';
import * as Yup from "yup";
import Modal from 'react-modal';
import reqInstance from "@services/api";
import { WEBURL } from "lib/constants";
//import { redirect } from 'next/navigation';

const styling = {
    background: "url('/login-bg.jpg')"
}
  
const vehicleValidateSchema = Yup.object().shape({
    //email: Yup.string().email("Please enter a valid email").required("This field is required"),
    vnumber: Yup.string().required("This field is required"),
  });


export default function GenerateAlertForm() {
    const [response, setResponse]= useState("");
    const router = useRouter();

    const searchVehicle= async(data)=>{
        const url = WEBURL+"/api/vehicle-search";
        const user  = await reqInstance.post(url,data).then((response) => {
          setResponse("You has been registered successfully");
          router.push("/generate-alert/"+response.data.data._id);
          //router.reload(response.data.data._id);
          
          //setOk(true);
        }).catch((error)=>{
          setResponse("Oops! something went wrong, Please try again");
          //setOk(true);
        });
    }


    return (
      <>
        <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
                {/* <div className="brand-logo">
                    <Image src={logo} alt="logo" />
                </div>
                <h4>Pending</h4> */}
                <h6 className="font-weight-light">Search Vehicle  </h6>
                <Formik
                initialValues={{ 
                    vnumber: ""
                }}
                validationSchema={vehicleValidateSchema}
                validateOnMount
                onSubmit={async (values) => {
                    // await new Promise((resolve) => setTimeout(resolve, 500));
                    //alert(JSON.stringify(values, null, 2));
                    searchVehicle(values);
                    //Call to API
              }}
              >
                 {({values, errors, touched, handleBlur, handleChange, onSubmit, handleSubmit }) => ( 
                <form className="pt-3" method="post"  onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* <label for="exampleInputEmail">Username</label> */}
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                    <span className="input-group-text bg-transparent border-right-0">
                                        <i className="icon-search"></i>
                                    </span>
                                </div>
                                <Field type="text"  name='vnumber' className="form-control form-control-lg border-left-0" id="vnumber" placeholder="Enter Vehicle Number " />
                               
                            </div>
                            {errors.vnumber && touched.vnumber ? (
                                <code>{errors.vnumber}</code>
                          ) : null}
                    </div>
                    <div className="mb-2 d-flex">
                        <button type="submit"  className="btn btn-primary auth-form-btn flex-grow mr-1">
                            {/* <i className="mdi mdi-facebook mr-2"></i> */}
                            Search Vehicle
                        </button>
                    </div>
                </form>
                   )}
                </Formik>  
            </div>
        </div>
      </>
    )
}
  