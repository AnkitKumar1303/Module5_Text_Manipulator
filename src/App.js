
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background =
        "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.background =
        "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      showAlert("Dark mode has been enabled", "success");
      
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text-Manipulator"
          about="About Us"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/about"
            element={<About mode={mode} />}
          />
          <Route
            path="/contact"
            element={<Contact mode={mode} />}
          />
          <Route
            path="/"
            element={
              <TextForm
                heading="TextUtis - Word Counter, Charecter Counter, Remove Extra Space"
                summaryHead="Summery Of Your Text"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
