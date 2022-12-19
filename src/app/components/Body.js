import React from 'react'
import '../assets/css/bootstrap.min.css';
import "../assets/css/structure.css";
import "../assets/css/responsive.css";
import '../assets/css/font-awesome/css/all.css';
import { Link } from "react-router-dom";
const Body= () =>{
  return (
    <div class="body">
          <div class="container">
            <div class="row" style={{marginTop:'30px'}}>
                <div class="col-12">
                      <div class="col-md-4 app-btn-cta">
                          <Link  to={{pathname: "/Login"}} id="link">
                            <div class="col-12 text-center" style={{border:'1px solid #ddd', borderRadius:'3px'}}>
                                <span><i class="fa fa-compress fa-3x" style={{ color:'#2383ad'}}></i></span>
                            <h2 style={{marginBottom:'60px'}}>Start a Fresh Application</h2>
                        </div>
                        </Link>
                      </div> 
                      <div class="col-sm-4 app-btn-cta">
                          
                       
                          
                        <a href="/" className="link">
                            <div class="col-12 text-center"
                                style={{border:'1px solid #ddd', borderRadius:'3px'}}>
                                <span><i class="fa fa-recycle fa-3x"
                                        style={{ paddingBottom:'1px', color:'#2383ad'}}></i></span>
                                <h2>Student Login Portal</h2>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-4 app-btn-cta">
                        <a href="/" id="link">
                            <div class="col-12 text-center"
                                style={{border:'1px solid #ddd', borderRadius:'3px'}}>
                                <span><i class="fa fa-credit-card fa-3x"
                                        style={{ paddingBottom:'1px', color:'#2383ad'}}></i></span>
                                <h2>Pay Application Fee Online</h2>
                            </div>
                        </a>
                    </div>
                </div>
              </div>
              <div class="container-fluid" style={{ marginTop: '70px', marginBottom: '30px' }}>
                <div class="row text-center">
                    <div class="col-12 cta-btn">
                        <a href="/"><button class="btn btn-danger btn-sm" type="button">Click To View Programmes&#39; Entry Requirements</button></a>
                        <br class="clear" />
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Body
