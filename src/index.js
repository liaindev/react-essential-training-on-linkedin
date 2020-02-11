// import the React library in order to use it
import React from 'react';
// import ReactDOM to render our React component to the DOM
import ReactDOM from 'react-dom';

// styles for our title
var myStyle = {
  backgroundColor: 'black',
  color: 'white',
  fontFamily: 'Arial'
}

// Use ReactDOM.render() to render this title to the DOM
ReactDOM.render(
  // use JSX tag-based syntax with curly braces {}
  <div style={myStyle}>
    <h1 id="heading-element">Hello, world!</h1>
    <p>We're glad you're here</p>
  </div>,
  document.getElementById('root')
)

