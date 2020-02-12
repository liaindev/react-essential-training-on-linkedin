// import the React library in order to use it
import React from 'react';
// import ReactDOM to render our React component to the DOM
import ReactDOM from 'react-dom';

class Message extends React.Component {
  // use render() method to render elements to the DOM
  render() {
    return (
      <div>
        <h1 style={{color: this.props.myColor}}>
          {this.props.msg}
        </h1>
        <p>I'll check back in {this.props.minutes} minutes</p>
      </div>
    )
  }
}

// Use ReactDOM.render() to render our Message component to the DOM
ReactDOM.render(
  // color & msg are properties for the Message component
  <Message myColor="blue" msg="How are you?" minutes={5}/>, 
  document.getElementById('root')
)


