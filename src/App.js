import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./components/About";

import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const removeBodyclass = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-secondary");
  };

  const toggleMode = (cls) => {
    removeBodyclass();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333333";
      showAlert(" Dark mode has been enabled", "secondary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "secondary");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          Link={Link}
        />
        <Alert alert={alert} Link={Link} />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={mode} Link={Link} />}
            ></Route>
            <Route
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="TextUtils - word counter  character counter"
                  mode={mode}
                  Link={Link}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
