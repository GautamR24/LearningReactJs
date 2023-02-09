import React ,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpperCase = () =>{
        //console.log("handle upper case button was clicked");
        let value = text.toUpperCase();
        setText(value);
    }

    const handleTextBox = (event)=>{//evert variable is by default given by the onChange
        //console.log("text is changed");
        setText(event.target.value);//we are setting the new value of text everytime we are making a change in input box
    }

    const handleLowerCase = ()=> {
        let value = text.toLowerCase();
        setText(value);
    }

    const handleClearText = ()=>{
        let value = '';
        setText(value);
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox1');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
  return (
    <>
    <div className='container'>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            {/* here on change is imp to update the state of text variable */}
            <textarea className="form-control" id="myBox1" value={text} onChange={handleTextBox} rows="8"></textarea> 
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to Upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to Lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary" onClick={handleCopy}>Copy the text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}