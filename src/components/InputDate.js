import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Button from 'material-ui/Button'

const style = {
  input: {
    margin: '1em',
    width: '70px',
  },
  button: {
    margin: '1em 2em',
    verticalAlign: 'top',
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
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title">
                Interpretacja numerologiczna dla
          </Typography>
          <form onSubmit={submitForm}>
          <FormControl style={style.input}>
            <Input
              id="day"
              placeholder="Day"
              type={"number"}
              inputProps={{min: 1, max: 31}}
              onChange={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value, 10) )
                  .toString()
                  .slice(0,2)
                handleChange(e, "day")}
              } />
          </FormControl>
          <FormControl style={style.input}>
            <Input
              id="month"
              placeholder="Month"
              type={"number"}
              inputProps={{min: 1, max: 12}}
              onChange={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value, 10) )
                  .toString()
                  .slice(0,2)
                handleChange(e, "month")}
              } />
          </FormControl>
          <FormControl style={style.input}>
            <Input
              id="year"
              placeholder="Year"
              type={"number"}
              onInput={(e) => {
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
              Przelicz
            </Button>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default InputDate
