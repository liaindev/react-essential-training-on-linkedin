// import the React library in order to use it
import React from 'react';
// import ReactDOM to render our React component to the DOM
import ReactDOM from 'react-dom';

class Message extends React.Component {
  // use render() method to render elements to the DOM
  render() {
    return (
      <div>
        <h1>Hello Everyone</h1>
      </div>
    )
  }
}

// Use ReactDOM.render() to render our Message component to the DOM
ReactDOM.render(<Message />, document.getElementById('root')
)


