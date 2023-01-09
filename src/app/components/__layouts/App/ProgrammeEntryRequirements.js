import * as React from "react";
import "../../../assets/css/Login.css";
import StylesModule from "./Entery.module.css";
// import { Link } from "react-router-dom";
import $ from 'jquery'
import Header from "../../Header";

class ProgrammeEntryRequirements extends React.Component {
    handleChange = (event) => {
        event.preventDefault();
        let ___ApplicationType = $("#Application__Type").val();
        const JavascriptHook ={ "DataId": ___ApplicationType };
        let Data = JSON.stringify(JavascriptHook);
        const base_url = 'http://localhost/Student/PagesController/'; // the url where we want to POST
         $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                dataType: 'JSON',
                contentType: "application/json; charset=utf-8",
                data: Data, // our data object
                url: base_url + 'RenderRequirementData', //the url where we want to POST
                processData: false,
                encode: true,
                crossOrigin: true,
                async: true,
                crossDomain: true,
                headers: {'Content-Type': 'application/json'},
             }).done(function (response) {
            // This is to clear all existing data that display in the requirement box
            $('#RequirementDiv').empty();
            if (response.Status == 2001) {
                var Respone = response.result;
                $('#Program__Type').empty();
                Respone.forEach(function (CallRecieve) {
                    $('#Program__Type').append('<option value="' + CallRecieve.Child_id + '">' + CallRecieve.Child_name + '</option>')
                });
            }
        }).fail((xhr, status, error) => {
            console.log('Oops...', 'Something went wrong with ajax !', 'error');
        });
    };
    handleProgramChange = (event) => {
        event.preventDefault();
        var val1 = $("#Program__Type").val();
        var val2 = $("#Application__Type").val();
        const AuthUnStringfy = { "RestAPIDataId": val1, "ProgramId": val2,  };
        let PData = JSON.stringify(AuthUnStringfy);
        const base_url = 'http://localhost/Student/PagesController/'; // the url where we want to POST
        $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                dataType: 'JSON',
                contentType: "application/json; charset=utf-8",
                data: PData, // our data object
                url: base_url + 'RenderProgrammeList', //the url where we want to POST
                processData: false,
                encode: true,
                crossOrigin: true,
                async: true,
                crossDomain: true,
                headers: {'Content-Type': 'application/json'},
            }).done(function (response) {
             var Response;
                 $('#RequirementDiv').empty();
                 if (response.Status == 2001) {
                     if (val2 == 1) {
                         Response = response.result;
                         Response.forEach(function (Fetch) {
                            $('#RequirementDiv').append('<span className={{'+StylesModule.hStyle+'}}>' +
                            Fetch.Child_name +
                            '</span><br><h2>PROGRAMME OUTLINE:</h2><font size="3"><br /> <br /><h2>DURATION:</h2>' +
                            Fetch.Duration +
                            '<br /> <br /></font> <h3 className="hStyle">' + Fetch.headerone + '</h3><br /><font size="2.5">' + Fetch.Subtext + '' +
                            Fetch.UTME)
                         });
                     } else if (val2 ==2) {
                         Response = response.result;
                         Response.forEach(function (Fetch) {
                            $('#RequirementDiv').append('<span className="hStyle">' +
                            Fetch.Child_name +
                            '</span><br><h2>PROGRAMME OUTLINE:</h2><font size="3"><br /> <br /><h2>DURATION:</h2>' +
                            Fetch.Duration +
                            '<br /><br /></font> <h3 className="y">' +
                            Fetch.headerone + '</h3><br /><font size="2.5">' +
                            Fetch.Subtext + '<br /></font><br />' +
                            Fetch.UTME + '')
                         });
                     } else if (val2 == 3) {
                         Response = response.result;
                         Response.forEach(function (Fetch) {
                            $('#RequirementDiv').append('<span className="hStyle">' +
                            Fetch.Child_name +
                            '</span><br><h2>PROGRAMME OUTLINE:</h2><font size="3"><br /> <br /><h2>DURATION:</h2>' +
                            Fetch.Duration +
                            '<br /> <br /></font> <h3 className="hStyle">' + Fetch.headerone + '</h3><br /><font size="2.5">' + Fetch.Subtext + ' <br /></font><br /><h2>UTME</h2>' +
                            Fetch.UTME +
                            '</font><br /><br /><div><b>AND</b></div><br /><h2>WASSCE</h2>' + Fetch.WASSCE + '</font><br /> <br /><div><b>OR</b></div><br /><h2>NECO SSCE</h2>' +
                            Fetch.NECO_SSCE +
                            '<br /><br /><div><b>OR</b></div><br /> <h2>IGCSE</h2>' + Fetch.IGCSE + ' </font><br /><br />')
                         });
                     }
                 }
             }).fail((xhr, status, error) => {
                 console.log('Oops...', 'Something went wrong with ajax...!', 'error');
             });
    };
    render() {
        return (
            <div>
                <Header />
                <div className = "single">
                    <div className = "panel"
                    style = {
                        {
                            maxWidth: '960px',
                            width: '100%',
                            margin: '0 auto',
                            border: '1px solid #DDDDDD',
                        }
                    } >
                        <h2 className="hStyle">Check Any Programme Requirements</h2>
                        <div className = "panel-in">
                            <form method="POST" className="form-horizontal form-group">
                                <div className="form-ui-panel">
                                    <div className="pane form-group">
                                        <label id="apptypelabel" className="col-sm-12 col-md-3 col-lg-3 make-full">ApplicationType:</label>
                                        <div className="col-sm-12 col-md-9 col-lg-9 select-drop-down">
                                            <select onChange={this.handleChange} className="form-control" name="Application__Type" id="Application__Type" style={{ width: '75%' }}>
                                                <option value="">--Select--</option>
                                                <option id="1" value="1">Distance Learning Institute </option>
                                                <option id="2" value="2">Postgraduate </option>
                                                <option id="3" value="3">Undergraduate </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="pane form-group">
                                        <label className="col-sm-12 col-md-3 col-lg-3 make-full">Programme :</label>
                                        <div className="col-sm-12 col-md-9 col-lg-9 select-drop-down">
                                            <select onChange={this.handleProgramChange} name="Program__Type" id="Program__Type" className="form-control" style={{ width: '75%' }}>
                                                <option value="" >--select--</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="generaldiv">
                                        <div id="RequirementDiv"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* footer div starts here */}
                <div className="container footer-wrap footerContent">
                    <div className="container-fluid" >
                        <div className="row">
                            <div className="col-sm-6 footer-left pull-left">
                                <p style={{ color: '#b9b9b9' }}>&copy; All Right Reserved</p>
                            </div>
                            <div className="col-sm-6 text-right footer-right pull-right">
                                <p style={{ color: '#b9b9b9' }}>Powered by <a href="https://www.MidTech.digital/" style={{ textDecoration: 'none' }}>MidTech Pvt Ltd</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgrammeEntryRequirements
