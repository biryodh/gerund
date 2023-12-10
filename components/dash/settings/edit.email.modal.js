import Head from 'next/head';
import React, { useState } from 'react'
import Modal from 'react-modal';
import OTPField from "./formfields/field.otp"
import EmailField from "./formfields/field.email"

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

 export default  function EditEmail(props)  {
  const { email} = props.user;
  const [stepup1, updateStep1]= useState(true);
  const [stepup2, updateStep2]= useState(false);
  const [newEmail, updatenewEmail]= useState(null);
  const [token, updateToken]= useState(null);
  const [otp, updateOTP]= useState(null);

  const afterOpenModal =()=>{
    console.log("open modal");
  }

     
  
   return (
        <>
            <Modal isOpen={props.stateModal}  ariaHideApp={false} onAfterOpen={afterOpenModal} onRequestClose={console.log("onclose modal")} contentLabel="Example Modal" style={customStyles}>
              <h4 className="card-title" style={{backgroundColor:'f3f2f1'}}>Update email.</h4>
                {stepup1 && 
                <EmailField 
                  email={email} 
                  handleModal={ props.handleModal} 
                  handleStep1={updateStep1}
                  handleStep2={updateStep2}
                  handleNewEmail={updatenewEmail}
                  handleToken={updateToken}
                  handleOTP={updateOTP}
                />}

                {stepup2 && 
                  <OTPField  
                    handleModal={ props.handleModal} 
                    otp={otp}
                    data={{
                      newEmail:newEmail,
                      token:token,
                      otp:otp
                }}
              />}
            </Modal>
          
        </>
    )
}

