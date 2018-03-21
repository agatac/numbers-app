import React, { Component } from 'react'
// import moment from 'moment'
import lifePathDescr from './data/lifePath'
import lifeCycleDescr from './data/lifeCycle'

import Paper from 'material-ui/Paper'
import InputDate from './components/InputDate'
import CardLifePath from './components/CardLifePath'
import lime from 'material-ui/colors/lime'

const style = {
  marginBottom: 50,
  textAlign: 'center',
};

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      digits: [],
      lifePath: null,
      cycles: null,
    }

    this.onDateSubmit = this.onDateSubmit.bind(this)
  }

  onDateSubmit({ day, month, year }) {
    const digits = {
      day: this.reduceToSingleDigit(day.split('')),
      month: this.reduceToSingleDigit(month.split('')),
      year: this.reduceToSingleDigit(year.split('')),
    }
    const lifePath = this.reduceToSingleDigit([
      digits.day,
      digits.month,
      digits.year
    ])
    const cycle1 = digits.month
    const cycle2 = digits.day
    const cycle3 = digits.year
    this.setState({ digits, lifePath, cycles: { cycle1, cycle2, cycle3 }})
  }

  reduceToSingleDigit(digits) {
    let total = digits
    while(total.length > 1) {
      total = total.reduce((sum, current) => {
        return parseInt(sum, 10) + parseInt(current, 10)
      }, 0).toString().split('')
    }
    return total[0]
  }

  render() {
    return (
      <div>
        <Paper style={style}>
          <InputDate onDateSubmit={this.onDateSubmit} />
        </Paper>
        {
          this.state.lifePath &&
          <CardLifePath
            lifePath={this.state.lifePath}
            lifePathDescr={lifePathDescr[this.state.lifePath]}
            cycle1={this.state.cycles.cycle1}
            cycle1descr={lifeCycleDescr[this.state.cycles.cycle1]}
            cycle2={this.state.cycles.cycle2}
            cycle2descr={lifeCycleDescr[this.state.cycles.cycle2]}
            cycle3={this.state.cycles.cycle3}
            cycle3descr={lifeCycleDescr[this.state.cycles.cycle3]}
          />
        }

      </div>
    );
  }
}

export default App;
