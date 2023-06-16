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
            <div class=" col-xl-9 d-flex  grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Change email</h4>
                  {/* <p class="card-description">
                    Basic form elements
                  </p> */}
                  <form class="forms-sample">
                    
                    <div class="form-group">
                      <label for="exampleInputEmail3">New email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email" />
                    </div>
                   
                    <button type="submit" class="btn btn-primary mr-2">Update</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>

            <div class=" col-xl-9 d-flex  grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Change password</h4>
                  {/* <p class="card-description">
                    Basic form elements
                  </p> */}
                  <form class="forms-sample">
                    
                  <div class="form-group">
                      <label for="exampleInputPassword4">New Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">Confirm Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password" />
                    </div>
                    
                    <button type="submit" class="btn btn-primary mr-2">Update</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
              
            </div>

            <div class=" col-xl-9 d-flex  grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Change Language</h4>
                  {/* <p class="card-description">
                    Basic form elements
                  </p> */}
                  <form class="forms-sample">
                    
                      <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Country</label>
                          <div class="col-sm-9">
                            <select class="form-control">
                              <option>America</option>
                              <option>Italy</option>
                              <option>Russia</option>
                              <option>Britain</option>
                            </select>
                          </div>
                      </div>
                   
                    <button type="submit" class="btn btn-primary mr-2">Update</button>
                    <button class="btn btn-light">Cancel</button>
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
