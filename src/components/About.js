import React from 'react';

export default function About(props) {
  /* ---------------Dark mode functionality---------------- */

  let mystyledark1 = {
    color: '#fff',
    backgroundColor: 'transparent',
  };
  let mystyledark2 = {
    color: '#fff',
    backgroundColor: '#000',
    textDecoration: 'none',
    fontWeight: 'Bold',
  };

  /*------------------------- light mode functionality------------- */
  let mystyleLight1 = {
    color: '#000',
    background: 'transparent',
  };
  let mystyleLight2 = {
    color: '#000',
    backgroundColor: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
  };

  return (
    <div className="main py-4" id="main" style={props.mode === 'dark' ? mystyledark1 : mystyleLight1}>
      <h1 className="text-center">About App</h1>
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={props.mode === 'dark' ? mystyledark2 : mystyleLight2}>
            <h2 className="accordion-header" id="headingOne">
              <button
                style={props.mode === 'dark' ? mystyledark2 : mystyleLight2}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                id="acc"
              >
                Analyze Your Text
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>
                Text-Manipulator gives you a way to analyze your text quickly and efficiently. It lets you count words, count characters, or estimate reading time.
                  It has both light and dark modes for better compatibility.
                </strong>
              </div>
            </div>
          </div>

          <div className="accordion-item" style={props.mode === 'dark' ? mystyledark2 : mystyleLight2}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={props.mode === 'dark' ? mystyledark2 : mystyleLight2}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                id="acc"
              >
                Free To Use
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>
                  Text-Manipulator is a free character counter tool that provides instant character count and word count statistics for a given text. Text-Manipulator reports
                  the number of words and characters, making it suitable for writing text with word/character limits.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
