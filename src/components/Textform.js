import React, { useState } from "react";

export default function Textform(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + " "+  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Convert to UpperCase ","success")
  };
  const handleloClick = () => {
    // console.log("Uppercase was clicked" + " "+  text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Convert to LowerCase ","success")
  };
  const handleClick = () => {
    // console.log("Uppercase was clicked" + " "+  text);
    let newText = '';
    setText(newText);
    props.showAlert(" Clear text ","success")
  };
  
const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copy text ","success")
  };

  
  const [text, setText] = useState("");
 
  

  // setText("harshal");
  return (
    <>
      <div className="container"
      style={{color: props.mode ==='dark'?'white':'black'}}
      >
        <h1>Enter the text to analyze below</h1>
        <div className="mb-3">
          {/* <label for="mybox" class="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            
            style={{backgroundColor: props.mode ==='dark'?"#333333":'white', color: props.mode ==='dark'?'white':'black'}}
            id="mybox"
            rows="8"
          
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} 
        
        style={{backgroundColor: props.mode ==='dark'?'#333333':'white', color: props.mode ==='dark'?'white':'black'}}
        >
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloClick} style={{backgroundColor: props.mode ==='dark'?'#333333':'white', color: props.mode ==='dark'?'white':'black'}}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClick} style={{backgroundColor: props.mode ==='dark'?'#333333':'white', color: props.mode ==='dark'?'white':'black'}}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} style={{backgroundColor: props.mode ==='dark'?'#333333':'white', color: props.mode ==='dark'?'white':'black'}}>
          Copy text
        </button>
       
      </div>
      <div className="container my-3"
       style={{color: props.mode ==='dark'?'white':'black'}}
      >
        <h2>yout text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} character
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
      
    </>
  );
}
