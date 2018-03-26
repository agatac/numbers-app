import React, { Component } from 'react'
// import moment from 'moment'
import lifePathDescr from './data/lifePath'
import lifeCycleDescr from './data/lifeCycle'
import pinnacle1Descr from './data/pinnacle1'
import pinnaclesDescr from './data/pinnacles'

import InputDate from './components/InputDate'
import CardLifePath from './components/CardLifePath'
import CardLifeCycle from './components/CardLifeCycle'
import CardPinnacles from './components/CardPinnacles'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      digits: [],
      lifePath: null,
      cycles: null,
      pinnacles: null, //szczyty
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
    const p1 = this.reduceToSingleDigit([digits.month, digits.day]);
    const p2 = this.reduceToSingleDigit([digits.day, digits.year]);
    const p3 = this.reduceToSingleDigit([p1, p2]);
    const p4 = this.reduceToSingleDigit([digits.month, digits.year]);

    this.setState({
      digits,
      lifePath,
      cycles: { cycle1, cycle2, cycle3 },
      pinnacles: { p1, p2, p3, p4 }
    })
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
        <InputDate onDateSubmit={this.onDateSubmit} />
        {
          this.state.lifePath &&
          <CardLifePath
            lifePath={this.state.lifePath}
            lifePathDescr={lifePathDescr[this.state.lifePath]}
          />
        }{
          this.state.cycles &&
          <CardLifeCycle
            cycle1={this.state.cycles.cycle1}
            cycle1descr={lifeCycleDescr[this.state.cycles.cycle1]}
            cycle2={this.state.cycles.cycle2}
            cycle2descr={lifeCycleDescr[this.state.cycles.cycle2]}
            cycle3={this.state.cycles.cycle3}
            cycle3descr={lifeCycleDescr[this.state.cycles.cycle3]}
          />
        }
        {
          this.state.pinnacles &&
          <CardPinnacles
            pinnacles={this.state.pinnacles}
            p1descr={pinnacle1Descr[this.state.pinnacles.p1]}
            p2descr={pinnaclesDescr[this.state.pinnacles.p2]}
            p3descr={pinnaclesDescr[this.state.pinnacles.p3]}
            p4descr={pinnaclesDescr[this.state.pinnacles.p4]}
          />
        }
      </div>
    );
  }
}

export default App;
