import React from 'react'
import '../../assets/css/bootstrap.min.css';
import "../../assets/css/structure.css";
import "../../assets/css/responsive.css";
import '../../assets/css/font-awesome/css/all.css';
import { Link } from "react-router-dom";
function Home() {
  return (
     <div className="body">
          <div className="container">
            <div className="row" style={{marginTop:'30px'}}>
                <div className="col-12">
                      <div className="col-md-4 app-btn-cta">
                          <Link  to={'/Registration'} id="link">
                            <div className="col-12 text-center" style={{border:'1px solid #ddd', borderRadius:'3px'}}>
                                <span><i className="fa fa-compress fa-3x" style={{ color:'#2383ad'}}></i></span>
                                <h2 style={{marginBottom:'60px'}}>Start a Fresh Application</h2>
                            </div>
                        </Link>
                      </div> 
                      <div className="col-sm-4 app-btn-cta">
                        <Link to={'/Login'} className="link">
                            <div className="col-12 text-center"
                                style={{border:'1px solid #ddd', borderRadius:'3px'}}>
                                <span><i className="fa fa-recycle fa-3x"
                                        style={{ paddingBottom:'1px', color:'#2383ad'}}></i></span>
                                <h2>Student Login Portal</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-4 app-btn-cta">
                        <Link to={'/'} id="link">
                            <div className="col-12 text-center"
                                style={{border:'1px solid #ddd', borderRadius:'3px'}}>
                                <span><i className="fa fa-credit-card fa-3x"
                                        style={{ paddingBottom:'1px', color:'#2383ad'}}></i></span>
                                <h2>Pay Application Fee Online</h2>
                            </div>
                        </Link>
                    </div>
                </div>
              </div>
              <div className="container-fluid" style={{ marginTop: '70px', marginBottom: '30px' }}>
                <div className="row text-center">
                    <div className="col-12 cta-btn">
                        <Link to={'/ProgrammeEntryRequirements'}><button className="btn btn-danger btn-sm" type="button">Click To View Programmes&#39; Entry Requirements</button></Link>
                        <br className="clear" />
                    </div>
                </div>
            </div>
        </div>    
      </div>
  )
}

export default Home
