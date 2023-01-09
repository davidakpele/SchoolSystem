import React from 'react'
import '../../assets/css/App.css';
import Header from '../Header';
import Home from './Home';
function App() {
  return ( 
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        <Home />
      </div>
  );
}

export default App;
