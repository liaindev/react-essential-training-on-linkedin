import React, { Component } from 'react';
import { render } from 'react-dom';

const Library = () => {
  return (
    <div>
      Welcome to the Library!
    </div>
  )
}

// to render multiple different <Library /> components to the DOM
render(
  <div>
    <Library />
    <Library />
  </div>,
  document.getElementById('root')
)


