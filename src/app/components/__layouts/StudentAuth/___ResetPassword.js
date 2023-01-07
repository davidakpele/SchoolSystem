import React from 'react'
import HeadImg from "../../../assets/img/lock.png";
import "../../../assets/css/ResetPassword.css";
import { Link } from "react-router-dom";

function ___ResetPassword() {
  return (
    <div>
      <div className="header-toggle container">
        <h2 className="text-center header-element">Recover your Password</h2>
    </div>
    <div className="mini-container float-center">
        <img src={HeadImg} className="img-responsive png center" alt='' style={{maxWidth:'80px', display:'block',marginLeft:'auto', marginRight:'auto'}}/><br/>
      </div>
    <div className="mini-container login-widget"> 
        <div id="RecovererrorMessage" className="error error-ico" style={{ display: 'none' }}></div>
        <form method="POST" action="javascript:void(0)" className="form-group" id="__RecoverMercyCollegeStudentMatricNo">
            <div className="PhpHookSecurityAsycHidden">
                <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTE4MDcwNzMxNA9kFgJmD2QWAgIJDxYCHgRocmVmBQ5pbWFnZXMvZmF2LnBuZ2RkdYzl8Hjtn1iQpAnQ2VIr7SmJgXUuALwWK9Wvj3RVCFg=" />
            </div>
            <div className="PhpHookSecurityAsycHidden">
                <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="" />
                <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="\wEdAAP007iSoED3ruvRlOgE2aU70L2DLJhpxQ2WXTNAV4E6IuKXTPonOLALxhfCJ/svpfnXFhUSRRFCO2nvUvXw7+LyP1GSkIx9bbfcVNzli3f8hw==" />
            </div>
            <div className="element">
                <label>Matric Number</label>
                <input name="MatricNoRecoverTextbox" id="MatricNoRecoverTextbox" type="text" value="" />
            </div>
            <div className="element">
                <input type="submit" value="Reset Password"  className="btn btn-xs" onclick="RecoverMaticNo()" />
            </div><br />
        <div className="element">
            <div className="float-left">
                <input type="checkbox" name="rememberMe" value="on" id="rememberMe" /><span className="setCookie" >Remember Me</span>
            </div>
            <div className="float-right res_link">
              <Link to={ '/Login' } className="ulink">Login Portal</Link> |  
              <Link to={'/RetrieveAuth'} className="ulink">Retrieve Matric No.</Link> | 
              <Link to={'/ParentLogin'} className="ulink">Parents' Corner</Link>
            </div>
        <br className="clear" />
        </div>
        </form>
    </div>
     <div className="clearfix"><br /><br /><br /><br /></div>
    {/* footer div starts here */}
    <div className="container footer-wrap footerContent">
        <div className="container-fluid" >
            <div className="row">
                <div className="col-sm-6 footer-left pull-left">
              <p style={{ color: '#b9b9b9' }}>&copy; All Right Reserved</p> 
                </div>
                <div className="col-sm-6 text-right footer-right pull-right">
              <p style={{ color: '#b9b9b9' }}>Powered by <a href="https://www.MidTech.digital/" style={{textDecoration:'none'}}>MidTech Pvt Ltd</a></p>     
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default ___ResetPassword
