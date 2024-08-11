import React, { useState } from 'react'
import './App.css';
import About from './component/About.js';
import Navbar from './component/Navbar.js';
import Texenter from './component/textenter.js';
import Alert from './component/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light")
  const [word, setword] = useState("Enabal dark mode")
  const [alert, setAlert] = useState(null)
  const [textarea, setextarea] = useState({
    background: "white",
    color: "black"
  })
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      ty: type

    })
    setTimeout(() => {
      setAlert(null)
    }, 1600)
  }
  const togglemode = () => {
    if (mode === "light") {
      setmode('dark')
      setword('off dark mode')
      showAlert("Successfully enable dark mode", "success")
      setextarea({
        background: "#202121",
        color: "white"
      })
      document.body.style.backgroundColor = "rgb(28 28 28)"
      document.body.style.color = "white"

    }
    else {
      showAlert("Successfully enable light mode", "success")
      setmode('light')
      setword('Enabal drak mode')
      setextarea({
        background: "white",
        color: "black"
      })
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"

    }
  }
  return (

    <>
      <Router>
        <Navbar about="About" mode={mode} togglemode={togglemode} word={word} />
        <Alert alert={alert} />
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/about" element={<About />} /> {/* Use element prop */}
          <Route path="/" element={
            <div className="container-lg">
              <Texenter heading="Enter your text" showAlert={showAlert} textarea={textarea} />
            </div>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
