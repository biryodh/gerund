import logo from "@styles/images/logo-dark.svg"
//import bkImage from "@styles/images/auth/login-bg.jpg"
import Image from 'next/image'
import { roles } from "lib/constants"
const styling = {
    background: "url('/login-bg.jpg')"
}
  
export default function Register(props) {
    return (
      <>
       <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
              <div className="brand-logo">
                <Image src={logo} alt="logo" />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">Join us today! It takes only few steps</h6>
              <form className="pt-3">
                <div className="form-group">
                  {/* <label>Username</label> */}
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="First Name" />
                  </div>
                </div>
                <div className="form-group">
                  {/* <label>Username</label> */}
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-group">
                  {/* <label>Email</label> */}
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-email-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="email" className="form-control form-control-lg border-left-0" placeholder="Email" />
                  </div>
                </div>
                {/* <div className="form-group">
                  <label>Role</label>
                  <select name="role" className="form-control form-control-lg" id="exampleFormControlSelect2">
                  <option>Select role</option>
                  {roles.map(function(role, i){
                      return <option key={i} value={role.key}> {role.text} </option> ;
                  })}
                  </select>
                </div> */}
                <div className="form-group">
                  {/* <label>Password</label> */}
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-lock-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <a className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN UP</a>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <button type="button" className=" btn text-primary" onClick={()=>props.clickHandle()} >Login</button>
                </div>
              </form>
            </div>
          </div>
      </>
    )
}
  