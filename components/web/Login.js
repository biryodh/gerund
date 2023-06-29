import LoginForm from "@components/web/forms/loginForm"
import RegisterForm from "@components/web/forms/registerForm"
import { useState } from "react"

const styling = {
    background: "url('/login-bg.jpg')"
}
  
export default function Login() {

    const [login, toggleSection] = useState(true);
    const [register, toggleRegister] = useState(false);
    const clickHandle = ()=>{
        toggleSection(!login);
        toggleRegister(!register);
    }
    return (
      <>
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                    <div className="row flex-grow">
                        { login && (<LoginForm clickHandle={clickHandle} />)}
                        { register && (<RegisterForm  clickHandle={clickHandle} />)}
                        <div className="col-lg-6 login-half-bg d-flex flex-row" style={styling}>
                            <p className="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2020  All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
  