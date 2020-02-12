import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends Component {
  render () {
    // destructuring this.props
    const {total, powder, backcountry, goal} = this.props
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
          <p>bBckcountry days: {backcountry}</p>
        </div>
        <div>
          <p>Goal days: {goal}</p>
        </div>
      </section>
    )
  }
}

render(
  <SkiDayCounter 
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>,
  document.getElementById('root')
)


