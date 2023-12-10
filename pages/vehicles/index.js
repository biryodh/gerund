import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "@components/dash/layout";
import {getVehicles} from "@models/vehicleModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBell } from '@fortawesome/free-solid-svg-icons';
import {QRCodeSVG} from 'qrcode.react';

const AlertUrl = process.env.WEB_URL + "/generate-alert/";

export async function getServerSideProps({ query }) {
  const userId = "";
  let response = await getVehicles(userId);

  let VehicleListArray =[];

  // response.map((data)=>{
  //   //console.log(data.vnumber);
  //   return  VehicleListArray.push({
  //     id:data._id,
  //     rdate:data.rdate, 
  //     rnumber:data.rnumber, 
  //     vnumber:data.vnumber, 
  //     owner:data.owner, 
  //     address:data.address, 
  //     state:data.state,
  //     eno:data.eno,
  //     cno:data.cno,
  //     fuel:data.fuel,
  //     color:data.color 
  //   });
  // })

  VehicleListArray =  JSON.parse(JSON.stringify(response));
  //console.log("VehicleListArray",VehicleListArray);
  return { 
    props: {
      VehicleListArray
    },
  };

}



export default function VehicleList(props) {


  const Cards = (p)=>{
    return (<>
       {props.VehicleListArray.map(function(data) {
                return (
                  <div className='col-xs-6 m-3 flex float'>
                  <div className="card">
                      <div className="card-body">
                        <div className="chartjs-size-monitor">
                          <div className="chartjs-size-monitor-expand">
                            <h6 className="card-title">{data["vnumber"]}</h6>
                              <QRCodeSVG value={`${AlertUrl}${data["_id"]}`} />
                            </div>
                          </div>
                          
                      </div>
                    </div>
                  </div>
                )
          })}
    </>)
  }

   const VehicleListComponent = ()=>{
    return(
        <>
            <div className="row">
            <div className=" col-xl-9 d-flex  grid-margin stretch-card">
              <Cards />
            </div>
            </div>
        </>
    )
  }

  return (
    <>
      <Layout childComponent={<VehicleListComponent />} />
    </>
  )
}
