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

class Library extends Component {
  // the same as this.state = { open: false }
  state = { open: false }

  /* we need to bind this for toggleOpenClosed before the constructor, 
  but we can also do it using an arrow function,
  because arrow function will automatically bind this inside the context of this function */
  toggleOpenClosed = () => {
    // setState is asynchronous. Instead of object we are going to use a callback function
    // prevState returns the object, so the object should be wrapped in another set of enclosing parentheses ()
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render () {
    // state is just an object and it has as many keys as you set up 
    console.log(this.state)

    // use ES6 destructuring
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