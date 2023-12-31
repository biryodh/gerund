import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "@components/dash/layout";


export default function Messages(props) {

   const MessagesComponent = ()=>{
    return(
        <>
            <div className="row">
            <div className=" col-xl-9 d-flex  grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Profile</h4>
                  {/* <p className="card-description">
                    Basic form elements
                  </p> */}
                  <form className="forms-sample">
                    <div className="form-group">
                      <label for="exampleInputName1">First Name</label>
                      <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputName1">Last Name</label>
                      <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                    </div>
                    {/* <div className="form-group">
                      <label for="exampleInputEmail3">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword4">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
                    </div> */}
                    <div className="form-group">
                      <label for="exampleSelectGender">Gender</label>
                        <select className="form-control" id="exampleSelectGender">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    {/* <div className="form-group">
                      <label>File upload</label>
                      <input type="file" name="img[]" className="file-upload-default" />
                      <div className="input-group col-xs-12">
                        <input type="text" className="form-control file-upload-info" disabled="" placeholder="Upload Image" />
                        <span className="input-group-append">
                          <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div> */}
                    <div className="form-group">
                      <label for="exampleInputCity1">City</label>
                      <input type="text" className="form-control" id="exampleInputCity1" placeholder="Location"/>
                    </div>
                    <div className="form-group">
                      <label for="exampleTextarea1">About yourself</label>
                      <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
            </div>
        </>
    )
  }

  return (
    <>
      <Layout childComponent={<MessagesComponent />} />
    </>
  )
}
