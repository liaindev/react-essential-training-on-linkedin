// import the React library in order to use it
import React from 'react';
// import ReactDOM to render our React component to the DOM
import ReactDOM from 'react-dom';

class Message extends React.Component {
  // use render() method to render elements to the DOM
  render() {
    // to see the props object with a message (msg) as a key
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.msg}</h1>
      </div>
    )
  }
}

// Use ReactDOM.render() to render our Message component to the DOM
ReactDOM.render(
  // age & msg are properties for the Message component
  <Message age={50} msg="How are you?"/>, 
  document.getElementById('root')
)


