import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Convert to UpperCase ", "success");
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Convert to LowerCase ", "success");
  };
  const handleClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Clear text ", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert(" Copy text ", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleloClick}
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClick}
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Copy text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>yout text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} character
        </p>
        <p>
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
