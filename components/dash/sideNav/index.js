import Image from "next/image"
import Link from "next/link";
import dummy from "uploads/profile/dummy.jpg";


export default function sideNav(e) {
  return (
    <>
    {/* + e.mobile?"Acives":"" */}
      <nav className={"sidebar sidebar-offcanvas " + (e.settings.mobile?"active":"") } id="sidebar" >
        <div className="user-profile">
          <div className="user-image">
            <Image src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="Profile Pic"  />
          </div>
          <div className="user-name">
              Balwinder Singh
          </div>
          <div className="user-designation">
              Developer
          </div>
        </div>
        <ul className="nav">
         
          {/* <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="icon-disc menu-icon"></i>
              <span className="menu-title">Dashboard</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="#">Buttons</a></li>
                <li className="nav-item"> <a className="nav-link" href="#">Typography</a></li>
              </ul>
            </div>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" href="/dashboard">
              <i className="icon-file menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/profile">
              <i className="icon-pie-graph menu-icon"></i>
              <span className="menu-title">Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/messages">
              <i className="icon-pie-graph menu-icon"></i>
              <span className="menu-title">Messages</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/settings">
              <i className="icon-pie-graph menu-icon"></i>
              <span className="menu-title">Settings</span>
            </Link>
          </li>
         
         


          {/* <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i className="icon-head menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="#"> Login </a></li>
                <li className="nav-item"> <a className="nav-link" href="#"> Login 2 </a></li>
                <li className="nav-item"> <a className="nav-link" href="#"> Register </a></li>
                <li className="nav-item"> <a className="nav-link" href="#"> Register 2 </a></li>
                <li className="nav-item"> <a className="nav-link" href="#"> Lockscreen </a></li>
              </ul>
            </div>
          </li> */}
         
        </ul>
      </nav>
      </>
  )
}
