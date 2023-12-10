import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "@components/dash/layout";


export default function AlertsList(props) {

   const AlertsListComponent = ()=>{
    return(
        <>
            <div className="row">
            <div className=" col-xl-9 d-flex  grid-margin stretch-card">
              Alerts
            </div>
            </div>
        </>
    )
  }

  return (
    <>
      <Layout childComponent={<AlertsListComponent />} />
    </>
  )
}
