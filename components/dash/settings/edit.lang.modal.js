import Head from 'next/head';
import React, { useState } from 'react'
import Modal from 'react-modal';

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

 export default  function EditLang(props)  {
    
    const afterOpenModal =()=>{
      console.log("open modal");
    }

    const {fname, lname, city, about, gender} = props.user;
  
   return (
        <>
            <Modal isOpen={props.stateModal}  ariaHideApp={false} onAfterOpen={afterOpenModal} onRequestClose={console.log("onclose modal")} contentLabel="Example Modal" style={customStyles}>
            <h4 className="card-title" style={{backgroundColor:'f3f2f1'}}>Select your region</h4>
              <form className="forms-sample">
                    <div style={{maxHeight:'70vh',overflow:'auto'}}>
                      <div className="form-group  pr-4">
                        <label htmlFor="exampleInputName1">Select Region</label>
                        <input type="text" name='fname' defaultValue={fname} className="form-control" id="fname" placeholder="Name" />
                      </div>
                      <div className="form-group  pr-4">
                        <label htmlFor="exampleInputName1">Select Language</label>
                        <input type="text" name='fname' defaultValue={fname} className="form-control" id="fname" placeholder="Name" />
                      </div>
                      {/* <div className="form-group pr-4">
                        <label htmlFor="exampleInputName1">Last Name</label>
                        <input type="text" className="form-control"  defaultValue={lname}  name='lname'  id="lname" placeholder="Name" />
                      </div> */}
                     
                     
                      </div>
                      <div style={{marginTop:'10px'}}>
                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                        <button className="btn btn-light" onClick={() => props.handleModal()} >Cancel</button>
                      </div>

              </form>   
           
            </Modal>
          
        </>
    )
}