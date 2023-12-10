import Head from 'next/head';
import React, { useState } from 'react'
import Modal from 'react-modal';
import ChangePassword from "./formfields/field.password";

const customStyles = {
    overlay: {
       backgroundColor: 'rgba(0, 0, 0, 0.6)',
       zIndex:9998,
       height: "100%",
       overflowY: "hidden"
    },
    content: {
       top: '30%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       width: '50%',
       transform: 'translate(-50%, -50%)',
       padding:'20px 0px 20px 20px'
    }
    
 }

 export default  function EditPassword(props)  {
  
    const [stepup1, updateStep1]= useState(true);
    const [stepup2, updateStep2]= useState(false);
    
    const afterOpenModal =()=>{
      console.log("open modal");
    }

    const {fname, lname, city, about, gender} = props.user;
  
   return (
        <>
            <Modal isOpen={props.stateModal}  ariaHideApp={false} onAfterOpen={afterOpenModal} onRequestClose={console.log("onclose modal")} contentLabel="Example Modal" style={customStyles}>
            <h4 className="card-title" style={{backgroundColor:'f3f2f1'}}>Change Password</h4>
              <ChangePassword   
                handleModal={ props.handleModal} 
                handleStep1={updateStep1}
                handleStep2={updateStep2}
              />

            </Modal>
          
        </>
    )
}