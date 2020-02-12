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

// <Library /> is a parent component and it rendering each of the Book components using bookList array
// rendering an array of books with map() method
const Library = ({books}) => {
  return (
    <div>
      {books.map (
        (book, i) => <Book 
                  // each of these data are being driven from props which come the bookList itself
                  // added a unique key {i} for array elements
                  key={i}
                  title={book.title} 
                  author={book.author} 
                  pages={book.pages}/>
      )}
    </div>
  )
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)


