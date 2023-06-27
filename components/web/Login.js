import LoginForm from "@components/web/forms/loginForm"
import RegisterForm from "@components/web/forms/registerForm"


const styling = {
    background: "url('/login-bg.jpg')"
}
  
export default function Login() {
    return (
      <>
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                    <div className="row flex-grow">
                        <LoginForm />
                        {/* <RegisterForm /> */}
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
  