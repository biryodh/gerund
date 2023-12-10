import Link from "next/link"

export default function WorkerSideMenu(){
    return (<>
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
          {/* <li className="nav-item">
            <Link href="/dashboard">
              <div  className="nav-link">
                <i className="icon-file menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </div>
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link href="/profile">
              <div  className="nav-link">
                <i className="icon-pie-graph menu-icon"></i>
                <span className="menu-title">Profile</span>
              </div>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link  href="/dashboard">
              <div  className="nav-link">
                <i className="icon-pie-graph menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link  href="/vehicles">
              <div  className="nav-link">
                <i className="icon-pie-graph menu-icon"></i>
                <span className="menu-title">Vehicles</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link  href="/alerts">
              <div  className="nav-link">
                <i className="icon-pie-graph menu-icon"></i>
                <span className="menu-title">Alerts</span>
              </div>
            </Link>
          </li>
         
          {/* <li className="nav-item">
            <Link  href="/settings">
              <div  className="nav-link">
              <i className="icon-pie-graph menu-icon"></i>
              <span className="menu-title">Settings</span>
              </div>
            </Link>
          </li> */}
         
         


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
    </>)
}