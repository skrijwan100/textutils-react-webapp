import React, { useState } from 'react'

export default function Textenter(props) {
    const [text, setext] = useState("");
    const onchange = (e) => {
        setext(e.target.value)
    }
    const clear = () => {
        document.getElementsByClassName("form-control")[0].style.fontFamily = "serif"
        setext("")
        props.showAlert("clear all","success")
    }
    const copy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("successfully copy the text","success")

    }
    const beautiful = () => {
        document.getElementsByClassName("form-control")[0].style.fontFamily = "Kalnia Glaze,serif"

        props.showAlert("successfully convart beatufulcase","success")
    }
    const uppercaseconvaet = () => {
        // console.log("you click onclick")
        let newtext = text.toUpperCase()
        setext(newtext)
        props.showAlert("successfully convart uppercase","success")
    }
    const lowercaseconvaet = () => {
        // console.log("you click onclick")
        let newtext = text.toLowerCase()
        setext(newtext)
        props.showAlert("successfully convart lowercase","success")
    }
    const saveAsTextFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "textfile.txt";
        document.body.appendChild(element);
        element.click();
    };
    // const setback = {
    //     background: "#202121",
    //     color: "white"
    // }
    return (
        <>
            <div className='box'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={onchange} id="exampleFormControlTextarea1" value={text} rows="7" style={props.textarea}></textarea>
                </div>
                <div className="containar">
                    <button  disabled={text.length===0} className="btn btn-primary mx-5" onClick={uppercaseconvaet}>Convert Uppercase</button>
                    <button  disabled={text.length===0} className="btn btn-primary mx-5" onClick={lowercaseconvaet}>Convert Lowercase</button>
                    <button  disabled={text.length===0} className="btn btn-primary mx-5" onClick={copy}>Copy</button>
                    <button  disabled={text.length===0} className="btn btn-primary mx-5" onClick={beautiful}>Convert beautiful text</button>
                    <button  disabled={text.length===0} className="btn btn-primary mx-5" onClick={saveAsTextFile}>Save as a text file</button>
                    <button  disabled={text.length===0} className="btn btn-primary mx-5" onClick={clear}>Clear</button>
                </div>
            </div >
            <div className="newfuter my-3">
                <h2>Your summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Word and charectar {text.length}</p>

            </div>
            <div className="preview">
                <h2>Preview</h2>
                <b>{text}</b>
            </div>
        </>
    )
}
