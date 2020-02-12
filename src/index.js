import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

// create a separate functions
const getPercent = decimal => {
  return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
  return getPercent(total/goal)
}

/* You can also create a component as a function.
So using the JS syntax we can create a JS function 
that returns JSX elements to be rendered */

// create an arrow function to create component SkiDayCounter that returns some JSX elements, destructuring properties in {}
const SkiDayCounter = ({total, powder, backcountry, goal}) => {
  return (
    <section>
      <h1>Ski days</h1>
      <div>
        <p>Total days: {total}</p>
      </div>
      <div>
        <p>Powder days: {powder}</p>
      </div>
      <div>
        <p>Backcountry days: {backcountry}</p>
      </div>
      <div>
        <p>Goal progress: {calcGoalProgress(total, goal)}</p>
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


