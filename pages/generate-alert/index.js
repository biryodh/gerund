import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "@components/dash/layout";
import GenerateAlertForm from "@components/web/forms/generateAlertForm";


export default function AlertsList(props) {

   const GenerateAlert = ()=>{
    return(
        <>
            <div className="row">
                {/* <div className=" col-xl-12 d-flex  grid-margin stretch-card"> */}
                    {/* alert form  */}
                    <GenerateAlertForm />
                {/* </div> */}
            </div>
        </>
    )
  }

  return (
    <>
      {/* <Layout childComponent={<GenerateAlert />} /> */}
      <GenerateAlert />
    </>
  )
}
