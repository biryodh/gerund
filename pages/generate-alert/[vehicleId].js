import logo from "@styles/images/logo-dark.svg"
//import bkImage from "@styles/images/auth/login-bg.jpg"
import Image from 'next/image'
import {useState} from 'react'; 
import { useRouter } from "next/router"
import { Formik, Form, Field,  useFormik } from 'formik';
import * as Yup from "yup";
import {getVehicleByID} from "@models/vehicleModel";
import { getUserByID } from '@models/userModel';
import reqInstance from "@services/api";
import Modal from 'react-modal';
import {obscureEmail}  from "@helperFunctions/functions"
import { WEBURL } from 'lib/constants';
//import "@styles/css/style.css"

const styling = {
    background: "url('/login-bg.jpg')"
}

const locationValidateSchema = Yup.object().shape({
    //email: Yup.string().email("Please enter a valid email").required("This field is required"),
    location: Yup.string().required("This field is required"),
    message: Yup.string().required("This field is required"),
});


export async function getServerSideProps({ query }) {
    
    const vid = query.vehicleId;
    let isFind = false;
    let vObj = await getVehicleByID(vid);
    let uObj = null;
    console.log("vObj:",vObj);
    if(vObj!=null){
        isFind = true;
        uObj = await getUserByID(vObj.user_id);
    }
    
  
    return { 
      props: {
        isFind:isFind,
        vehicleId:vid,
        vehiclenumber:vObj!=null?vObj.vnumber:null,
        userEmail: uObj!=null?obscureEmail(uObj.email):null
      } 
    };
  
}

export default function GenerateAlertForm(props) {
    const router = useRouter();

    const [response, setResponse]= useState("");


    const sendAlert= async(data)=>{
        console.log(data);
        const url = WEBURL+"/api/generate-alert";
        const user  = await reqInstance.post(url,data).then((response) => {
          setResponse("You has been registered successfully");
          alert("Alert has been sent successfully");
          router.push('/generate-alert');
          //setOk(true);
        }).catch((error)=>{
          setResponse("Oops! something went wrong, Please try again");
          //setOk(true);
        });
    }

   
    return (
      <>
        <div className="col-lg-12 d-flex align-items-center justify-content-center">
           { props.isFind && <div className="auth-form-transparent text-left p-3">
                {/* <div className="brand-logo">
                    <Image src={logo} alt="logo" />
                </div>
                <h4>Pending</h4> */}
                <h4>Verified vehicle number is {props.vehiclenumber}</h4>
                <p>Send your message to <b>{props.userEmail}</b></p>
                <h6 className="font-weight-light">Current Location</h6>
                <Formik
                    initialValues={{ 
                        location: "",
                        message:"",
                        vid:props.vehicleId
                    }}
                validationSchema={locationValidateSchema}
                validateOnMount
                onSubmit={async (values) => {
                    // await new Promise((resolve) => setTimeout(resolve, 500));
                    //alert(JSON.stringify(values, null, 2));
                    sendAlert(values);
                    //Call to API
                }}
                >
                    {({values, errors, touched, handleBlur, handleChange, onSubmit, handleSubmit }) => ( 
                <form className="pt-3" method="post"  onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* <label for="exampleInputEmail">Username</label> */}
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                    {/* <span className="input-group-text bg-transparent border-right-0">
                                        <i className="icon-search"></i>
                                    </span> */}
                                </div>
                                <Field component="textarea" id="location" name="location" className="form-control form-control-lg border-left-0" placeholder="Current Address" />
                            </div>
                            {errors.location && touched.location ? (
                                <code>{errors.location}</code>
                            ) : null}
                    </div>
                    <div className="form-group">
                        {/* <label for="exampleInputEmail">Username</label> */}
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                    {/* <span className="input-group-text bg-transparent border-right-0">
                                        <i className="icon-search"></i>
                                    </span> */}
                                </div>
                                <Field component="textarea" id="message" name="message" className="form-control form-control-lg border-left-0" placeholder="Write a message" />
                            </div>
                            {errors.message && touched.message ? (
                                <code>{errors.message}</code>
                            ) : null}
                    </div>
                    <div className="mb-2 d-flex">
                        <button type="submit" className="btn btn-primary auth-form-btn flex-grow mr-1">
                            {/* <i className="mdi mdi-facebook mr-2"></i> */}
                            Send Alert
                        </button>
                    </div>
                </form>
                    )}
                </Formik>  
            </div>
            }
            {!props.isFind && <div>
                Register Vehicle is not found. <a href="/generate-alert" > Click</a> to search 
                </div>}
        </div>
      </>
    )
}
  