import React, { Component } from 'react';
import { render } from 'react-dom';

// create an arrow function with 3 properties
const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

// <Library /> is a parent component and it rendering each of the Book components
const Library = () => {
  return (
    <div>
      <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260}/>
      <Book title="White Teeth" author="Zadie Smith" pages={480}/>
      <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={304}/>
    </div>
  )
}

// to render multiple different <Library /> components to the DOM
render(
  <Library />,
  document.getElementById('root')
)


