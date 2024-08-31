import React from 'react'

export default function About(props) {
  let mystyle={
    backgroundColor:props.mode==='dark'?"#1b1a1a":"white",
    color: props.mode==='light'?"black":"white",
    border: props.mode==='light'?"0.1px solid black":"0.1px solid red"
  }

   
    return (
        <div className='Containar my-3 mx-4 ' style={mystyle}>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                         <strong>About txtesutil</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Welcome to txtesutils, your go-to tool for quick and efficient text processing! Whether you need to transform, clean, or analyze your text, txtesutils is here to make your life easier. With a suite of powerful utilities, you can perform various text operations seamlessly, all within one intuitive app.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                           <strong>Our Mission</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        At txtesutils, we aim to empower users by simplifying text manipulation tasks. We believe that everyone should have access to tools that enhance productivity and streamline workflows. Our app is designed with you in mind, providing a user-friendly experience without compromising on functionality.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                            <strong>Features</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li><strong>Text Transformation:</strong> Convert case,copy text,convert beautiful text, and more.</li>
                                <li><strong>Text Analysis:</strong> Get word counts, character counts, and other insights instantly.</li>
                                <li><strong>Easy to Use: </strong>A clean and straightforward interface that allows you to focus on what matters.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          

        </div>
    )
}

