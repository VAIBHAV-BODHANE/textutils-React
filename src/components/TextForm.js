import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to UPPERCASE!", "info")
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted to lowercase!", "info")
    }

    const handleEmailExtractor = () => {
        let patt = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
        let newText = text.match(patt)
        if (newText !== null) {
            setText(newText.toString())
        } else {
            setText("No email ids found")
        }
        if (newText === null) {
            props.showAlert("Emails Not found!", "info")
        } else {
            props.showAlert("Emails found!", "info")
        }
    }

    const handleClearText = () => {
        setText("")
        props.showAlert("Text Cleard!", "info")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")


    const textCount = text.split(" ")
    let index = textCount.indexOf("")
    if (index >= 0) {
        textCount.splice(index)
    }
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleEmailExtractor}>Email Extractor</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container my-4">
            <h2>Your text summary</h2>
            <p>{textCount.length} words, {text.length} characters.</p>
            <p>{0.008 * textCount.length} minutes to read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter some text in above textbox to preview it here!'}</p>
        </div>
        </>
    )
}
