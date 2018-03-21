import React from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Button from 'material-ui/Button'

const style = {
  input: {
    margin: '1em',
    width: '70px',
  },
  button: {
    margin: '1em 2em',
  }

}
 
const InputDate = ({ onDateSubmit }) => {
  let date = {
    day: null,
    month: null,
    year: null,
  }

  const handleChange = (event, attr) => {
    date[attr] = event.target.value
  }

  const validate = () => {
    return (!date.day || !date.month || !date.year) ? false : true
  }

  const submitForm = e => {
      e.preventDefault()
      if (!validate()) {
        return
      }
      onDateSubmit(date)
  }


  return (
    <div>
      <form onSubmit={submitForm}>
      <FormControl style={style.input}>
        <InputLabel htmlFor="day">Day</InputLabel>
        <Input
          id="day"
          ref={node => date.day = node}
          type={"number"}
          inputProps={{min: 1, max: 31}}
          onChange={e => handleChange(e, "day")} />
      </FormControl>
      <FormControl style={style.input}>
        <InputLabel htmlFor="month">Month</InputLabel>
        <Input
          id="month"
          ref={node => date.month = node}
          type={"number"}
          inputProps={{min: 1, max: 12}}
          onChange={e => handleChange(e, "month")} />
      </FormControl>
      <FormControl style={style.input}>
        <InputLabel htmlFor="year">Year</InputLabel>
        <Input
          id="year"
          ref={node => date.year = node}
          type={"number"}
          onInput={(e)=>{
            e.target.value = Math.max(0, parseInt(e.target.value, 10) )
              .toString()
              .slice(0,4)
            handleChange(e, "year")
          }} />
      </FormControl>
        <Button
          type="submit"
          variant="raised"
          color={"primary"}
          style={style.button}>
          Calculate
        </Button>
      </form>
    </div>
  )
}

export default InputDate
