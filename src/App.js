// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
// import Home from "./Pages/Home/Home";

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })

     setTimeout(() =>{
      setAlert(null);
     },3000)
      

  }
  const removeBodyclass = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-secondary')
  }

  const toggleMode= (cls)=>{
    removeBodyclass();
    console.log(cls)
    document.body.classList.add('bg-'+cls);
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#333333";
      showAlert(" Dark mode has been enabled","secondary");
      document.title ='TextUtilis-dark mode'
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled","secondary");
      document.title ='TextUtilis-light mode'
    }
    
  }

 
  return (
    <>
  {/* <Navbar title="TextUtils" aboutText= "About Textutils"/> */}
  {/* <Router> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode }  />
  <Alert alert={alert}/>
  
  <div className="container my-3">
{/*   
  <Routes>
          <Route exact  path="/about" Component={About}>
          
          </Route>
          <Route path="/" Component={Textform} > */}
           <Textform  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> 
          {/* </Route> */}
  {/* </Routes>   */}
  
  

  </div>
  {/* //  </Router>  */}
  
  {/* <Navbar/> */}
</>

  );
}

export default App;
