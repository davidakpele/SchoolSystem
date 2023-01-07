/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../assets/css/Header.css";
import "../assets/css/structure.css";
import logo from "../assets/img/logo.png";

// import "./js/script";

function Header() {
  return (
    <div className='Header'>
      <div id="head">
        <div className="container">
            <div className="row">
               <div className="col-12">
                  <a href="/">
                     <div className="float-left">
                           <span>
                             <img src={logo} className="img-responsive center" 
                                    alt="logo" />
                           </span>
                     </div>
                  </a>
               </div>
               <br className="clear" />
            </div>
         </div>
      </div>
   </div>
  )
}

export default Header
