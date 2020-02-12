import React, { Component } from 'react';
import { render } from 'react-dom';

// create an array of objects
let bookList = [
  {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

// create a new component as an arrow function with 3 properties
const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

// Components can have a local State, but in order to use this, we need to use in the ES6 class component
class Library extends Component {
  // the way to add local state to <Library /> component is to use the constructor method
  constructor (props) {
    // super method is going to create a new instance of this class
    super (props)
    // add a state value
    this.state = {
      open: true
    }
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  }

  toggleOpenClosed() {
    // use setState function to reset the state element value
    /* this.setState ({
      open: !this.state.open
    }) */

    // setState is asynchronous. Instead of object we are going to use a callback function
    // prevState returns the object, so the object should be wrapped in another set of enclosing parentheses ()
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render () {
    // state is just an object and it has as many keys as you set up 
    console.log(this.state)

    // without destructuring
    // const books = this.props.books

    // using ES6 destructuring
    const { books } = this.props
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map (
          (book, i) => <Book 
                    key={i}
                    title={book.title} 
                    author={book.author} 
                    pages={book.pages}/>
        )}
      </div>
    )
  }
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)