import * as React from "react";
import HeadImg from "../../../assets/img/lock.png";
import "../../../assets/css/Login.css";
import { Link } from "react-router-dom";
import $ from 'jquery'
// import { useFormik } from 'formik'
class Login extends React.Component{
  
  handleSubmit = (e) => {
    e.preventDefault();
    //hide messages
    $("#errorMessage").hide();
    e.preventDefault();
    let Username = $("input#Roll__No").val();
    let Password = $("input#Password").val();
    if (Username === "") {
      $("#errorMessage").fadeIn().text("Please Enter Your Matric Number Or Application Number");
      $("input#Roll__No").focus();
      return false;
    }
    if (Password === "") {
      $("#errorMessage").fadeIn().text("Please Enter Your Password");
      $("input#Password").focus();
      return false;
    } else if (Username !== '' && Password !== '') {
      const AuthJson = {
        "Username": Username,
        "Password": Password
      };
      let data = JSON.stringify(AuthJson);
      const base_url = "http://localhost/Student/PagesController/";
      $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        dataType: 'JSON',
        contentType: "application/json; charset=utf-8",
        data: data, // our data object
        url: base_url + 'StudentLoginAPIsPortal', //the url where we want to POST
        processData: false,
        encode: true,
        crossOrigin: true,
        async: true,
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((response) => {
         //user is logged in successfully in the back-end
         $("#errorMessage").fadeIn().text(response.message, response.status);
         if (response.status === 200) {
           $("#errorMessage").hide();
           $("#errorMessage").fadeOut();
           let delay = 100;
           setTimeout(function () {
             window.location.reload(1);
           }, delay);
         } else {
           $("#errorMessage").fadeIn().text(response.errormessage);
           return false;
         }

      }).fail((xhr, error) => {
        $("#RetrieveMatricNoerrorMessage").fadeIn().text('Oops...Server is down! error');
      });
    }

  }
  render() {
    return (
    <div className="Authbody">
      <div className="header-toggle container">
        <h2 className="text-center header-element">Student Login Application</h2>
      </div>
      <div className="mini-container float-center">
        <img src={HeadImg} className="img-responsive png center" alt='' style={{maxWidth:'70px', display:'block',marginLeft:'auto', marginRight:'auto'}}/><br/>
      </div>
      <div className="mini-container login-widget"> 
        <div id="errorMessage" className="error error-ico" style={{ display: 'none' }}></div>
        <form method="POST" className="form-group" onSubmit={this.handleSubmit} autoComplete="off">
          <div className="element">
            <label>Reference No / UTME No</label>
            <input name = "Roll__No"
            id = "Roll__No"
            type = "text"
            defaultValue = "" / >
          </div>
          <div className="element">
              <label>Password</label>
              <input name = "Surname"
              type = "password"
              id = "Password"
              defaultValue = ""
              autoComplete ="off"/ >
          </div>
          <div className="element">
            <input type="submit" value="Login" className="btn btn-xs" style={{background:'#2383ad', height:'40px'}} />
          </div>
          <div className="element">
              <strong>Note:</strong> Your default
              password is your surname in lowercase
          </div>
          <br />
          <div className="element">
            <div className="float-left">
                <input type="checkbox" name="rememberMe" value="on" id="rememberMe" /><span className="setCookie" >Remember Me</span>
            </div>
            <div className="float-right res_link">
              <Link to={ '/RetrieveAuth' } className="ulink">Retrieve Matric No.</Link> |  
              <Link to={'/Recover'} className="ulink">Forgot your password?</Link> | 
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
  );
}
}


export default Login
