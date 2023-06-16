import logo from "@styles/images/logo-dark.svg"
//import bkImage from "@styles/images/auth/login-bg.jpg"
import Image from 'next/image'
//import "@styles/css/style.css"

const styling = {
    background: "url('/login-bg.jpg')"
}
  

export default function Login() {
    return (
      <>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
                <div className="brand-logo">
                    <Image src={logo} alt="logo" />
                </div>
                <h4>Pending</h4>
                <h6 className="font-weight-light">Happy to see you again!</h6>
                <form className="pt-3">
                    <div className="form-group">
                        <label for="exampleInputEmail">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                <span className="input-group-text bg-transparent border-right-0">
                                    <i className="mdi mdi-account-outline text-primary"></i>
                                </span>
                                </div>
                                <input type="text" className="form-control form-control-lg border-left-0" id="exampleInputEmail" placeholder="Username" />
                            </div>
                    </div>
                    <div className="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0">
                                <i className="mdi mdi-lock-outline text-primary"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" />
                    </div>
                    </div>
                        <div className="my-2 d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <label className="form-check-label text-muted">
                                <input type="checkbox" className="form-check-input"/>
                                Keep me signed in
                                </label>
                            </div>
                        <a href="#" className="auth-link text-black">Forgot password?</a>
                        </div>
                        <div className="my-3">
                            <a className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn" href="../../index.html">LOGIN</a>
                        </div>
                    <div className="mb-2 d-flex">
                        <button type="button" className="btn btn-facebook auth-form-btn flex-grow mr-1">
                            <i className="mdi mdi-facebook mr-2"></i>
                            Facebook
                        </button>
                        <button type="button" className="btn btn-google auth-form-btn flex-grow ml-1">
                            <i className="mdi mdi-google mr-2"></i>
                            Google
                        </button>
                    </div>
                        <div className="text-center mt-4 font-weight-light">
                            Don't have an account? <a href="register-2.html" className="text-primary">Create</a>
                        </div>
                </form>
            </div>
        </div>
      </>
    )
}
  