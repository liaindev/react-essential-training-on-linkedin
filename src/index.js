import React from 'react';
import ReactDOM from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends React.Component {
  render () {
    return (
      <section>
        <h1>Ski days</h1>
        <div>
          <p>Total days: {this.props.total}</p>
        </div>
        <div>
          <p>Powder days: {this.props.powder}</p>
        </div>
        <div>
          <p>bBckcountry days: {this.props.backcountry}</p>
        </div>
        <div>
          <p>Goal days: {this.props.goal}</p>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <SkiDayCounter 
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>,
  document.getElementById('root')
)


