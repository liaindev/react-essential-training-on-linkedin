import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends Component {

  // create custom methods
  getPercent = decimal => {
    return decimal * 100 + '%'
  }
  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }

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
          <p>Backcountry days: {backcountry}</p>
        </div>
        <div>
          <p>Goal progress: {this.calcGoalProgress(total, goal)}</p>
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


