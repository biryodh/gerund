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
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       transform: 'translate(-50%, -50%)'
    }
 }

//Modal.setAppElement('#AppElement');

export default  function CreatePostModal(props)  {
    //const [isOpen, setIsOpen] = useState(fas);

   const afterOpenModal =()=>{
    console.log("open modal");
   }


    return (
        <>
            <Modal isOpen={props.stateModal}  ariaHideApp={true} onAfterOpen={afterOpenModal} onRequestClose={() => setIsOpen(false)} contentLabel="Example Modal" style={customStyles}>
                    
                <h1>Modal Content</h1>
                <button className='btn btn-info font-weight-bold' onClick={() => props.handleModal()}>Close Modal</button>
            </Modal>
        </>
    )
}