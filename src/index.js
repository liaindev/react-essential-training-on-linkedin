import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

/* You can also create a component as a function.
So using the JS syntax we can create a JS function 
that returns JSX elements to be rendered */

// create an arrow function that returns some JSX elements
const SkiDayCounter = (props) => {
  return (
    <section>
      <h1>Ski days</h1>
      <div>
        <p>Total days: {props.total}</p>
      </div>
      <div>
        <p>Powder days: {props.powder}</p>
      </div>
      <div>
        <p>Backcountry days: {props.backcountry}</p>
      </div>
      <div>
        <p>Goal progress: {props.goal}</p>
      </div>
  </section>
  )
}

render(
  <SkiDayCounter 
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>,
  document.getElementById('root')
)


