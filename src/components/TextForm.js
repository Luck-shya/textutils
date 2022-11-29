import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!  ", "success");
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handlealtClick = () => {
    // console.log("Alternate was clicked");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText += text[i].toUpperCase();
      } else {
        newText += text[i].toLowerCase();
      }
    }
    setText(newText);
    props.showAlert("Converted to Alternatecase!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("text was changed");
    let newText = event.target.value;
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };
  const handlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.replace(/ +/g, " ").trim());
    props.showAlert("Extra spaces are removed!", "success");
  };

  const [text, setText] = useState("Enter Text Here ");
  return (
    <>
      <div>
        <div className="mb-3">
          <h1
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {props.heading}
          </h1>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            {text}
          </textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handlealtClick}>
          AlTeRnAtE CaSe
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.length > 0
            ? text.replace(/ +/g, " ").trim().split(" ").length
            : 0}{" "}
          words and {text.length} characters
        </p>
        <p>
          {text.length > 0
            ? 0.008 * text.replace(/ +/g, " ").trim().split(" ").length
            : 0}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box to preview it here"}
        </p>
      </div>
    </>
  );
}
