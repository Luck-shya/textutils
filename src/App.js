import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
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
  const toggle2Mode = () => {
    if (mode === "red") {
      setMode("blue");
      document.body.style.backgroundColor = " #00DDFF";
      showAlert("Blue mode has been enabled", "success");
      document.title = "TextUtils - Blue Mode";
    } else {
      setMode("red");
      document.body.style.backgroundColor = "#fc5e4f";
      showAlert("red mode has been enabled", "success");
      document.title = "TextUtils - Red Mode";
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title =
        "Try TextUtils - word counter | character counter | remove extra spaces";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggle2Mode={toggle2Mode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - word counter | character counter | remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
