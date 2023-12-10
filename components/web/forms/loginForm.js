import logo from "@styles/images/logo-dark.svg"
//import bkImage from "@styles/images/auth/login-bg.jpg"
import Image from 'next/image'
import {signIn} from "next-auth/react"
import { useState } from "react"
import {useRouter} from "next/router"
import { toast } from 'react-toastify';

//import "@styles/css/style.css"

const styling = {
    background: "url('/login-bg.jpg')"
}
  

export default function Login(props) {
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const router = useRouter();

    const handleClick = ()=>{
         signIn( "credentials",{
            email:email,
            password:password,
            redirect: false,
        },
        ).then(({ ok, error })=>{
            if (ok) {
                router.push("/profile");
            } else {
                toast.error("Credentials do not match!");
            }
        })
    }

    return (
      <>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
                <div className="brand-logo">
                    <Image src={logo} alt="logo" />
                </div>
                <h4>Welcome back!</h4>
                <h6 className="font-weight-light">Happy to see you again!</h6>
                <form className="pt-3">
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputEmail">Username</label> */}
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                <span className="input-group-text bg-transparent border-right-0">
                                    <i className="mdi mdi-account-outline text-primary"></i>
                                </span>
                                </div>
                                <input type="email" className="form-control form-control-lg border-left-0" id="email" name="email" placeholder="Email" onBlur={(e)=>{ setEmail(e.target.value)}} />
                            </div>
                    </div>
                    <div className="form-group">
                    {/* <label htmlFor="exampleInputPassword">Password</label> */}
                    <div className="input-group">
                        <div className="input-group-prepend bg-transparent">
                            <span className="input-group-text bg-transparent border-right-0">
                                <i className="mdi mdi-lock-outline text-primary"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control form-control-lg border-left-0" id="password" name="password"  onBlur={(e)=>{ setPassword(e.target.value)}} placeholder="Password" />
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
                            <button type="button" className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn" onClick={handleClick }>LOGIN</button>
                        </div>
                        <hr></hr>
                    <div className=" d-flex">
                        {/* <button type="button" className="btn btn-facebook auth-form-btn flex-grow mr-1"
                        onClick={() => signIn("facebook")}
                        >
                            <i className="mdi mdi-facebook mr-2"></i>
                            Facebook
                        </button> */}
                     
                        <button type="button" className="btn btn-google auth-form-btn flex-grow "
                         onClick={() => signIn("google",{ callbackUrl: 'http://localhost:3000/dashboard' })}
                         >
                            <i className="mdi mdi-google mr-2"></i>
                            Google
                        </button>
                    </div>
                        <div className="text-center mt-4 font-weight-light">
                            Dont have an account? <button type="button" className=" btn text-primary" onClick={()=>props.clickHandle()}>Create</button>
                        </div>
                </form>
            </div>
        </div>
      </>
    )
}
  