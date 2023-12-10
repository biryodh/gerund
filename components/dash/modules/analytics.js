export default function Analytics(props) {
    return (
      <>
        
            <div className="col-xl-6 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <h3 className="card-title">{props.count}</h3>
                        {/* <div className="row">
                            <div className="col-lg-5">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit amet cumque cupiditate</p>
                            </div>
                            <div className="col-lg-7">
 
                            </div>
                        </div> */}
                        {/* <div className="row">    
                            <canvas id="web-audience-metrics-satacked" className="mt-3 chartjs-render-monitor" height="282" style="display: block; height: 188px; width: 642px;" width="963"></canvas>
                        </div> */}
                    </div>
                </div>
            </div>
       
      </>
    )
  }
  