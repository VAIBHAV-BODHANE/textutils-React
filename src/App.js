import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = (modeColor) => {
    console.log(modeColor);
    if (modeColor === 'dark'){
      setMode('dark')
      document.body.style.backgroundColor = '#121212'
      document.body.style.color = 'white'
      showAlert("Dark Mode Enable", "success")
    } else if (modeColor === 'success') {
        setMode('success')
        document.body.style.backgroundColor = '#12633e'
        document.body.style.color = 'white'
        showAlert("Success Mode Enable", "primary")
    } else if (modeColor === 'danger') {
        setMode('danger')
        document.body.style.backgroundColor = '#9c2834'
        document.body.style.color = 'white'
        showAlert("Danger Mode Enable", "primary")
    } else if (modeColor === 'warning') {
        setMode('warning')
        document.body.style.backgroundColor = '#d19e06'
        document.body.style.color = 'white'
        showAlert("Warning Mode Enable", "primary")
    } else if (modeColor === 'info') {
        setMode('info')
        document.body.style.backgroundColor = '#0b99b5'
        document.body.style.color = 'white'
        showAlert("Info Mode Enable", "primary")
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#f0f0f0'
      document.body.style.color = 'black'
      showAlert("Light Mode Enable", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Textutils"/>
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <div className="container my-3">
              <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
