import TopNavrComponent from "@components/dash/topNav"
import SideNavComponent from "@components/dash/sideNav"
import CreatePost from "@components/dash/modules/createpost";
import Posts from "@components/dash/modules/posts";
import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "@components/dash/layout";


export default function Profile(props) {
  const { profile , baseApiUrl} = props;

   const ProfileComponent = ()=>{
    return(
        <>
            <div className="row">
            <div class=" col-xl-9 d-flex  grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Profile</h4>
                  {/* <p class="card-description">
                    Basic form elements
                  </p> */}
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputName1">First Name</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Last Name</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" />
                    </div>
                    {/* <div class="form-group">
                      <label for="exampleInputEmail3">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password" />
                    </div> */}
                    <div class="form-group">
                      <label for="exampleSelectGender">Gender</label>
                        <select class="form-control" id="exampleSelectGender">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    {/* <div class="form-group">
                      <label>File upload</label>
                      <input type="file" name="img[]" class="file-upload-default" />
                      <div class="input-group col-xs-12">
                        <input type="text" class="form-control file-upload-info" disabled="" placeholder="Upload Image" />
                        <span class="input-group-append">
                          <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div> */}
                    <div class="form-group">
                      <label for="exampleInputCity1">City</label>
                      <input type="text" class="form-control" id="exampleInputCity1" placeholder="Location"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleTextarea1">About yourself</label>
                      <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
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
      <Layout childComponent={<ProfileComponent />} />
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
