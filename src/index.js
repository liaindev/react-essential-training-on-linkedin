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

// create React element with 3 arguments
const title = React.createElement(
  'h1',
  {id: 'title', className: 'header', style: myStyle},
  'Hello World'
)

// Use ReactDOM.render() to render this title to the DOM
ReactDOM.render(
  title,
  document.getElementById('root')
)

