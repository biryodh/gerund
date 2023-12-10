import { useState, useEffect } from "react";
import Layout from "@components/dash/layout";
import Head from "next/head";
import EditEmail from "@components/dash/settings/edit.email.modal";
import EditPassword from "@components/dash/settings/edit.password.modal";
import EditLang from "@components/dash/settings/edit.lang.modal";
import EditPhone from "@components/dash/settings/edit.phone.modal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function Settings(props) {
  const { profile , baseApiUrl} = props;
  const [doEditEmail, toggleEditEmail] = useState(false);
  const [doEditPhone, toggleEditPhone] = useState(false);
  const [doEditPassword, toggleEditPasswordl] = useState(false);
  const [doEditLang, toggleEditLang] = useState(false);

  const handleModalEmail = ()=>{
    toggleEditEmail(!doEditEmail);
  }
  const handleModalPhone = ()=>{
    toggleEditPhone(!doEditPhone);
  }
  const handleModalPassword = ()=>{
    toggleEditPasswordl(!doEditPassword);
  }
  const handleModalLang = ()=>{
    toggleEditLang(!doEditLang);
  }

   const SettingsComponent = ()=>{
    return(
        <>
            <Head>
              <title>Profile</title>
            </Head>

            <div className="row">
           
            <div className="col-lg-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 >Settings</h4>
                  {/* <p className="card-description">
                    Add className <code>.table</code>
                  </p> */}
                  <div className="table-responsive">
                    <table className="table">
                      {/* <thead>
                        <tr>
                          <th></th>
                          <th>details</th>
                          <th>Updated on</th>
                          <th>Actions</th>
                        </tr>
                      </thead> */}
                      <tbody>
                        <tr>
                          <td>Email</td>
                          <td>abc@yopmail</td>
                          <td>Oct 12 2012</td>
                          <td> <FontAwesomeIcon icon={faEdit} onClick={handleModalEmail}  /></td>
                        </tr>
                        <tr>
                          <td>Phone</td>
                          <td>8987773783</td>
                          <td>Oct 12 2012</td>
                          <td> <FontAwesomeIcon icon={faEdit}  onClick={handleModalPhone} /></td>
                        </tr>
                        <tr>
                          <td>Change Password</td>
                          <td>********</td>
                          <td>Oct 12 2012</td>
                          <td> <FontAwesomeIcon icon={faEdit}  onClick={handleModalPassword} /></td>
                        </tr>
                        <tr>
                          <td>Language</td>
                          <td>English</td>
                          <td>Oct 12 2012</td>
                          <td> <FontAwesomeIcon icon={faEdit} onClick={handleModalLang} /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <EditEmail   user={{email:'abc@gmail.com'}} handleModal={handleModalEmail} stateModal={doEditEmail} />
            <EditPassword  user={{password:'abc@gmail.com'}} handleModal={handleModalPassword} stateModal={doEditPassword}  />
            <EditPhone  user={{phone:'abc@gmail.com'}} handleModal={handleModalPhone} stateModal={doEditPhone}  />
            <EditLang  user={{language:'abc@gmail.com'}} handleModal={handleModalLang} stateModal={doEditLang}  />
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
