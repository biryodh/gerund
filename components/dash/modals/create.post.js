import Head from 'next/head';
import React, { useState } from 'react'
import Modal from 'react-modal';
import { Formik, Form, Field,  useFormik } from 'formik';
import reqInstance from "@services/api";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { WEBURL } from 'lib/constants';

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

 const vehicleValidateSchema = Yup.object().shape({
    //email: Yup.string().email("Please enter a valid email").required("This field is required"),
    rdate: Yup.string().required("This field is required"),
    rnumber: Yup.string().required("This field is required"),
    vnumber: Yup.string().required("This field is required"),
    owner: Yup.string().required("This field is required"),
    address: Yup.string().required("This field is required"),
    className:Yup.string().required("This field is required"),
    state:Yup.string().required("This field is required"),
    eno:Yup.string().required("This field is required"),
    cno:Yup.string().required("This field is required"),
    fuel:Yup.string().required("This field is required"),
    color:Yup.string().required("This field is required"),
  });

//Modal.setAppElement('#AppElement');

export default  function CreatePostModal(props)  {
    const [isOpenModel, openmodel] = useState(true);
    const [response, setResponse]= useState("");
    const router =  useRouter();

   const afterOpenModal =()=>{
    console.log("open modal");
   }

   const addVehicle= async(data)=>{
    console.log(data);
    const url = WEBURL+"/api/add-vehicle";
    const user  = await reqInstance.post(url,data).then((response) => {
      setResponse("You has been registered successfully");
      //setOk(true);
      toast.success("Vehicle has been registered successfully");

      props.handleModal();
      router.reload();
    }).catch((error)=>{
      setResponse("Oops! something went wrong, Please try again");
      toast.error("Oops! something went wrong, Please try again");
      //props.handleModal();
      //setOk(true);
    });
}
console.log(props.stateModal);

    return (
        <>
            <Modal isOpen={props.stateModal}  ariaHideApp={false} onAfterOpen={afterOpenModal}  contentLabel="Vehicle Registration" style={customStyles}>    
            <h4 className="card-title" style={{backgroundColor:'f3f2f1'}}>Add Vehicle</h4>
                <Formik
                    initialValues={{ 
                            rdate: "", 
                            rnumber: "",
                            vnumber:"",
                            owner: "",
                            address:   "",
                            state:   "",
                            eno:   "",
                            cno:   "",
                            fuel:   "",
                            color:  "" 
                        }}
                        // validationSchema={vehicleValidateSchema}
                        validateOnMount
                        onSubmit={(values) => {
                        // await new Promise((resolve) => setTimeout(resolve, 500));
                        //alert(JSON.stringify(values, null, 2));
                        addVehicle(values);

                    }}
                >
                
                {({values, errors, touched, handleBlur, handleChange, onSubmit, handleSubmit }) => (
                    <Form className="forms-sample" method='POST' onSubmit={handleSubmit}>
                        <div style={{maxHeight:'70vh',overflow:'auto'}}>
                            
                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Registration Number</label>
                                <Field
                                    type="text" name='rnumber' id="rnumber"
                                    className="form-control" placeholder="Registration Number" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.rnumber && touched.rnumber ? (
                                        <code>{errors.rnumber}</code>
                                ) : null}
                                </div>
                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Registration Number</label>
                                <Field
                                    type="text" name='vnumber' id="vnumber"
                                    className="form-control" placeholder="Vehicle Number" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.vnumber && touched.vnumber ? (
                                        <code>{errors.vnumber}</code>
                                ) : null}
                                </div>
                                
                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Registration Date</label>
                                <Field
                                    type="date" name='rdate' id="rdate"
                                    className="form-control" placeholder="Registration Date" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.rdate && touched.rdate ? (
                                        <code>{errors.rdate}</code>
                                ) : null}
                                </div>

                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Owner Name</label>
                                <Field
                                    type="text" name='owner' id="owner"
                                    className="form-control" placeholder="Owner Name" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.owner && touched.owner ? (
                                        <code>{errors.owner}</code>
                                ) : null}
                                </div>

                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Address</label>
                                <Field
                                    type="text" name='address' id="address"
                                    className="form-control" placeholder="Address" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.address && touched.address ? (
                                        <code>{errors.address}</code>
                                ) : null}
                                </div>

                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">State</label>
                                <Field
                                    type="text" name='state' id="state"
                                    className="form-control" placeholder="State" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.state && touched.state ? (
                                        <code>{errors.state}</code>
                                ) : null}
                                </div>

                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Engine Number</label>
                                <Field
                                    type="text" name='eno' id="eno"
                                    className="form-control" placeholder="Engine Number" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.eno && touched.eno ? (
                                        <code>{errors.eno}</code>
                                ) : null}
                                </div>

                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Chassis Number</label>
                                <Field
                                    type="text" name='cno' id="cno"
                                    className="form-control" placeholder="Chassis Number" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.cno && touched.cno ? (
                                        <code>{errors.cno}</code>
                                ) : null}
                                </div>

                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Fuel Type</label>
                                <Field
                                    type="text" name='fuel' id="fuel"
                                    className="form-control" placeholder="Fuel Type" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.fuel && touched.fuel ? (
                                        <code>{errors.fuel}</code>
                                ) : null}
                                </div>

                                <div className="form-group  pr-4">
                                <label htmlFor="exampleInputName1">Color</label>
                                <Field
                                    type="text" name='color' id="color"
                                    className="form-control" placeholder="Color" 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.color && touched.color ? (
                                        <code>{errors.color}</code>
                                ) : null}
                                </div>
                                
                            </div>
                            <div style={{marginTop:'10px'}}>
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button className="btn btn-light"  onClick={() => {openmodel(!isOpenModel); props.handleModal()}} >Cancel</button>
                            </div>

                    </Form>
                 )}
                </Formik>  
            </Modal>
        </>
    )
}