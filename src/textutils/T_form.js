import React, { useState } from 'react'

export default function T_form(props) {

    let [text, setText] = useState('Enter text here');

    let handleUpClick = () => {
        console.log("clicked");
        setText("You have clicked the uppercase button")
    }

    let handleOnChange =(event) => {
        console.log("changed-")
        setText(event.target.value);
    }
  return (
    <div>
      <div className="mb-3">
        <h2>{props.heading} </h2>

        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>

      </div>
      <button type="button" onClick={handleUpClick}  className="btn btn-primary"  >lowercase</button>

     
    </div>
  )
}
