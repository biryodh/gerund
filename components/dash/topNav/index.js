import Image from 'next/image'
import Script from "next/script";
import { useEffect, useState, useRef } from 'react';
import CreatePostModal from '../modals/create.post';



export default function SidebarComponent(e) {

  const [showNotification, toggelNotification] = useState(false);
  const [showSetting, toggelSettings] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = ()=>{
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="#"><Image src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"  width={50} height={50} alt="logo"/></a>
        <a className="navbar-brand brand-logo-mini" href="#"><Image src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="Profile Pic"  width={50} height={50} /></a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick ={()=> e.handleClick()}>
          <span className="icon-menu"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="search">
                  <i className="icon-search"></i>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Search Projects.." aria-label="search" aria-describedby="search" />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown d-lg-flex d-none">
                <button type="button" className="btn btn-info font-weight-bold" onClick={handleModal}>
                  + Create New
                  <CreatePostModal handleModal={handleModal} stateModal={isOpenModal} />  
                  <div id='AppElement'></div>
                </button>
            </li>
          <li className="nav-item dropdown d-flex">
            <a className={"nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" + (showNotification?"show":"")} onClick={()=>{ toggelNotification(!showNotification) }} id="messageDropdown" href="#" data-toggle="dropdown">
              <i className="icon-air-play mx-0"></i>
            </a>
            <div className={"dropdown-menu dropdown-menu-right navbar-dropdown preview-list "  + (showNotification?"show":"")} aria-labelledby="messageDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                    <Image src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="image"  width={50} height={50} className="profile-pic" />
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                    <Image src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="image"  width={50} height={50} className="profile-pic" />
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    New product launch
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                    <Image src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="image"  width={50} height={50} className="profile-pic" />
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    Upcoming board meeting
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className={"nav-item dropdown d-flex mr-4 " + (showNotification?"show":"")} onClick={()=>{ toggelSettings(!showSetting) }}>
            <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i className="icon-cog"></i>
            </a>
            <div className={"dropdown-menu dropdown-menu-right navbar-dropdown preview-list " + (showSetting?"show":"")} aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Settings</p>
              <a className="dropdown-item preview-item">               
                  <i className="icon-head"></i> Profile
              </a>
              <a className="dropdown-item preview-item">
                  <i className="icon-inbox"></i> Logout
              </a>
            </div>
          </li>
          {/* <li className="nav-item dropdown mr-4 d-lg-flex d-none">
            <a className="nav-link count-indicatord-flex align-item s-center justify-content-center" href="#">
              <i className="icon-grid"></i>
            </a>
          </li> */}
        </ul>
        {/* mobile toggle */}
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick ={()=> e.handleClickMobile()} >
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>

        {/* <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" onError={() => setHasError(true)} onReady={() => setIsReady(true)} /> */}
      {/* <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"  /> */}
      {/* <Script src="js/hoverable-collapse.js"  />
      <Script src="vendors/base/vendor.bundle.base.js"  />
      <Script src="js/template.js"  />
      <Script src="vendors/chart.js/Chart.min.js"  />
      <Script src="js/dashboard.js"  />
      <Script src="vendors/jquery-bar-rating/jquery.barrating.min.js"  /> */}
    </>
  )
}
