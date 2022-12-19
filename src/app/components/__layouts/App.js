import React from 'react';
import '../../assets/css/App.css';
import Header from '../Header';
import Body from '../Body';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login }  from "./Login";
import { Registration } from "./Registration";
function App() {
  return (
    <Router>
         <div className="AppBody">
              {/* Header */}
              <Header />
              {/* Body */}
              <Body />
            <Routes>
              <Route exact path='/' element={<Login/>}></Route>
            </Routes>
            <Routes>
              <Route exact path='/' element={<Registration />}></Route>
            </Routes>
          </div>
    </Router>
   
  );
}

export default App;
