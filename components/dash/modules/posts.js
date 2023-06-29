import { useState } from "react"

export default function Posts() {

    const [isOpen, setopen]= useState(false);
    const [isOpenShare, setopenShare]= useState(false);

    const openMenu = ()=>{
      setopen(!isOpen);
    }

    const openShare = ()=>{
      setopenShare(!isOpenShare);
    }

    return (
      <>
          <div className="row mt-3">
          <div className="col-xl-9 d-flex grid-margin stretch-card">
                <div className="card">
                  <div className="card-body px-4 py-3">
                      <div className="row">
                        <div className="col-lg-1 col-1">
                          <button type="button" className="btn btn-social-icon btn-facebook btn-rounded"><i className="mdi mdi-facebook"></i></button>
                        </div>
                        <div className="  col-lg-10 col-8 my-2 card-title px-3 py-2 ">
                          <h4 className="card-title">John</h4>
                        </div>
                        <div className=" col-lg-1 col-1">
                        <div className="btn-group">
                          <button type="button" className="btn" onClick={openMenu}>
                                <i className="icon-ellipsis"></i>
                          </button>
                          <div className={"dropdown-menu " + (isOpen?'show':'')}>
                            <a className="dropdown-item" href="#">Favroite</a>
                            <a className="dropdown-item" href="#">Copy link</a>
                            <a className="dropdown-item" href="#">Hide</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Hide all from this user</a>
                            <a className="dropdown-item" href="#">Report post</a>
                          </div>
                        </div>
                        </div>
                        
                      </div>
                      {/* <hr className="hr" /> */}
                      <div className="row  my-2">
                        <div className="col-12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit amet cumque cupiditate</p>
                        </div>
                      </div>    
                      <hr className="hr" />      
                      <div className="row text-center">
                        <div className="col-lg-4 col-sm-2 my-2">
                        <button type="button" className="btn w-100 btn-inverse-secondary btn-fw">
                          <i className="icon-heart"></i>                                                    
                            <span className="mx-2">Like</span>
                        </button>
                        </div>
                        <div className="col-lg-4 col-sm-2 my-2">
                        <button type="button" className="btn w-100  btn-inverse-secondary btn-fw">
                          <i className="icon-speech-bubble"></i>                                                    
                          <span className="mx-2">Comment</span>
                        </button>
                        </div>
                        <div className="col-lg-4 col-sm-2 my-2">
                        <button type="button" className="btn w-100 btn-inverse-secondary btn-fw"  onClick={openShare}>
                          <i className="icon-share"></i>                                                    
                          <span className="mx-2">Share</span>
                        </button>
                        <div className="btn-group">
                           <div className={"dropdown-menu " + (isOpenShare?'show':'')}>
                            <a className="dropdown-item" href="#">Favroite</a>
                            <a className="dropdown-item" href="#">Copy link</a>
                            <a className="dropdown-item" href="#">Hide</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Hide all from this user</a>
                            <a className="dropdown-item" href="#">Report post</a>
                          </div>
                        </div>
                        </div>
                      </div>                        
                    </div>
                  </div>
            </div>
            {/* <div className="col-xl-3 flex-column d-flex grid-margin stretch-card">
              <div className="row flex-grow">
                <div className="col-sm-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                          <h4 className="card-title">Customers</h4>
                          <p>23% increase in conversion</p>
                          <h4 className="text-dark font-weight-bold mb-2">43,981</h4>
                          <canvas id="customers"></canvas>
                      </div>
                    </div>
                </div>
                <div className="col-sm-12 stretch-card">
                    <div className="card">
                      <div className="card-body">
                          <h4 className="card-title">Orders</h4>
                          <p>6% decrease in earnings</p>
                          <h4 className="text-dark font-weight-bold mb-2">55,543</h4>
                          <canvas id="orders"></canvas>
                      </div>
                    </div>
               </div>
              </div>
            </div> */}
           
          </div>
      </>
    )
  }
  