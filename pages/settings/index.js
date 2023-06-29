import TopNavrComponent from "@components/dash/topNav"
import SideNavComponent from "@components/dash/sideNav"
import CreatePost from "@components/dash/modules/createpost";
import Posts from "@components/dash/modules/posts";
import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "@components/dash/layout";


export default function Settings(props) {
  const { profile , baseApiUrl} = props;

   const SettingsComponent = ()=>{
    return(
        <>
            <div className="row">
            <div className=" col-xl-9 d-flex  grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Change email</h4>
                  {/* <p className="card-description">
                    Basic form elements
                  </p> */}
                  <form className="forms-sample">
                    
                    <div className="form-group">
                      <label for="exampleInputEmail3">New email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                    </div>
                   
                    <button type="submit" className="btn btn-primary mr-2">Update</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>

            <div className=" col-xl-9 d-flex  grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Change password</h4>
                  {/* <p className="card-description">
                    Basic form elements
                  </p> */}
                  <form className="forms-sample">
                    
                  <div className="form-group">
                      <label for="exampleInputPassword4">New Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword4">Confirm Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary mr-2">Update</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
              
            </div>

            <div className=" col-xl-9 d-flex  grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Change Language</h4>
                  {/* <p className="card-description">
                    Basic form elements
                  </p> */}
                  <form className="forms-sample">
                    
                      <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Country</label>
                          <div className="col-sm-9">
                            <select className="form-control">
                              <option>America</option>
                              <option>Italy</option>
                              <option>Russia</option>
                              <option>Britain</option>
                            </select>
                          </div>
                      </div>
                   
                    <button type="submit" className="btn btn-primary mr-2">Update</button>
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
      <Layout childComponent={<SettingsComponent />} />
    </>
  )
}

export async function getServerSideProps (context){

  return {
    props: {
      baseApiUrl:"testurl",
      profile:"myurl",
    },
  };

}
