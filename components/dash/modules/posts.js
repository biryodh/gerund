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
          <div class="row mt-3">
          <div class="col-xl-9 d-flex grid-margin stretch-card">
                <div class="card">
                  <div class="card-body px-4 py-3">
                      <div className="row">
                        <div className="col-lg-1 col-1">
                          <button type="button" class="btn btn-social-icon btn-facebook btn-rounded"><i class="mdi mdi-facebook"></i></button>
                        </div>
                        <div className="  col-lg-10 col-8 my-2 card-title px-3 py-2 ">
                          <h4 class="card-title">John</h4>
                        </div>
                        <div className=" col-lg-1 col-1">
                        <div class="btn-group">
                          <button type="button" class="btn" onClick={openMenu}>
                                <i className="icon-ellipsis"></i>
                          </button>
                          <div class={"dropdown-menu " + (isOpen?'show':'')}>
                            <a class="dropdown-item" href="#">Favroite</a>
                            <a class="dropdown-item" href="#">Copy link</a>
                            <a class="dropdown-item" href="#">Hide</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Hide all from this user</a>
                            <a class="dropdown-item" href="#">Report post</a>
                          </div>
                        </div>
                        </div>
                        
                      </div>
                      {/* <hr class="hr" /> */}
                      <div class="row  my-2">
                        <div class="col-12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit amet cumque cupiditate</p>
                        </div>
                      </div>    
                      <hr class="hr" />      
                      <div class="row text-center">
                        <div className="col-lg-4 col-sm-2 my-2">
                        <button type="button" class="btn w-100 btn-inverse-secondary btn-fw">
                          <i class="icon-heart"></i>                                                    
                            <span className="mx-2">Like</span>
                        </button>
                        </div>
                        <div className="col-lg-4 col-sm-2 my-2">
                        <button type="button" class="btn w-100  btn-inverse-secondary btn-fw">
                          <i class="icon-speech-bubble"></i>                                                    
                          <span className="mx-2">Comment</span>
                        </button>
                        </div>
                        <div className="col-lg-4 col-sm-2 my-2">
                        <button type="button" class="btn w-100 btn-inverse-secondary btn-fw"  onClick={openShare}>
                          <i class="icon-share"></i>                                                    
                          <span className="mx-2">Share</span>
                        </button>
                        <div class="btn-group">
                           <div class={"dropdown-menu " + (isOpenShare?'show':'')}>
                            <a class="dropdown-item" href="#">Favroite</a>
                            <a class="dropdown-item" href="#">Copy link</a>
                            <a class="dropdown-item" href="#">Hide</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Hide all from this user</a>
                            <a class="dropdown-item" href="#">Report post</a>
                          </div>
                        </div>
                        </div>
                      </div>                        
                    </div>
                  </div>
            </div>
            {/* <div class="col-xl-3 flex-column d-flex grid-margin stretch-card">
              <div class="row flex-grow">
                <div class="col-sm-12 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                          <h4 class="card-title">Customers</h4>
                          <p>23% increase in conversion</p>
                          <h4 class="text-dark font-weight-bold mb-2">43,981</h4>
                          <canvas id="customers"></canvas>
                      </div>
                    </div>
                </div>
                <div class="col-sm-12 stretch-card">
                    <div class="card">
                      <div class="card-body">
                          <h4 class="card-title">Orders</h4>
                          <p>6% decrease in earnings</p>
                          <h4 class="text-dark font-weight-bold mb-2">55,543</h4>
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
  