import React, { Component } from 'react'
// import moment from 'moment'

import Paper from 'material-ui/Paper'
import InputDate from './components/InputDate'

const style = {
  margin: 20,
  textAlign: 'center',
};

class App extends Component {

  constructor(props) {
    super(props)

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
    console.log(lifePath, cycle1, cycle2, cycle3)
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
      <Paper style={style}>
        <InputDate
          onDateSubmit={this.onDateSubmit}
        />
      </Paper>
    );
  }
}

export default App;
