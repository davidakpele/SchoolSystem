import * as React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/datetimepicker.css"
import $ from 'jquery'
import { useState} from 'react'
// import { useForm } from "react-hook-form";
// import axios from "axios";
<script src="../../../assets/js/jquery.datetimepicker.js"></script>
class ___RetrieveMatricNum extends React.Component {
  handleValidation = async e => {
    const [Application, setApplication] = useState('')
    const [Surname, setSurname] = useState('')
    const [DOB, setDOB] = useState('')
  }
  handleSubmit = (e) => {
    e.preventDefault();      
      //hide messages
      $("#RetrieveMatricNoerrorMessage").hide();
      let ApplicatioNo = $("input#ApplicatioNo").val();
      let Surname = $("input#Surname").val();
      let DateOfBirthBox = $("input#DateOfBirthBox").val();
      if (ApplicatioNo == "") {
         $("#RetrieveMatricNoerrorMessage").fadeIn().text("Please enter your Applicaction No/UTME Registration No");
         $("input#ApplicatioNo").focus();
         return false;
       }
       if (Surname == "") {
         $("#RetrieveMatricNoerrorMessage").fadeIn().text("Please enter your Surname");
         $("input#Surname").focus();
         return false;
       }
    if (DateOfBirthBox == "") {
      $("#RetrieveMatricNoerrorMessage").fadeIn().text("Please enter your Date Of birth");
      $("input#DateOfBirthBox").focus();
      return false;
    } else if (ApplicatioNo != '' && Surname != '' && DateOfBirthBox != '') {
      const Clonedata = {
        "ApplicatioNo": ApplicatioNo,
        "Surname": Surname,
        "DateOfBirthBox": DateOfBirthBox
      };
      let data = JSON.stringify(Clonedata);
      const base_url = "http://localhost/Student/PagesController/";
      $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        dataType: 'JSON',
        contentType: "application/json; charset=utf-8",
        data: data, // our data object
        url: base_url+'AuthMatricNUm', //the url where we want to POST
        processData: false,
        encode: true,
        crossOrigin: true,
        async: true,
        crossDomain: true,
        headers: {'Content-Type': 'application/json'},
      }).then((response) => {
        if (response.message === 200) {
          // Redirect user to another page
          $("#RetrieveMatricNoerrorMessage").fadeIn().text(response.message);
        } else {
          $("#RetrieveMatricNoerrorMessage").fadeIn().text(response.message);
        }
      }).fail((xhr, error) => {
        $("#RetrieveMatricNoerrorMessage").fadeIn().text('Oops...Server is down! error');
      });
    }
  
  }

  render() {
    return (
      <div>
    <div className="header-toggle container">
      <h2 className="text-center header-element">Retrieve Matric Number</h2>
    </div>
    <div className="mini-container login-widget"> 
        <div id="RetrieveMatricNoerrorMessage" className="error error-ico" style={{ display: 'none' }}></div>
        <form method="POST" className="form-group" onSubmit={this.handleSubmit} autoComplete="off">
            <div className="element">
                <label>Application No / UTME Registration No</label>
                <input name="ApplicatioNo" type="text" id="ApplicatioNo"  />
            </div>
            <div className="element">
                <label>Surname</label>
                <input name="Surname" type="text" id="Surname"/>
            </div>
            <div className="element">
                <label>Date Of Birth</label>
                <input name="DateOfBirthBox" type="date" id="DateOfBirthBox"/>
            </div>
            <div className="element">
              < input type = "submit"
              value = "Search"
              className = "btn btn-xs"
                
              style = {
                {
                  background: '#2383ad',
                  height: '40px'
                }
              }
              />
            </div>
        <div className="element">
            <strong>Note:</strong> Your default
                password is your surname in lowercase
        </div><br />
        <div className="element">
          <div className="float-left"></div>
          <div className="float-right res_link">
            <Link to={ '/Login' } className="ulink">Login Portal</Link> |  
            <Link to={'/Recover'} className="ulink">Forgot password?</Link> | 
            <Link to={'/ParentLogin'} className="ulink">Parents' Corner</Link>
          <br className="clear" />
        </div>
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

export default ___RetrieveMatricNum
