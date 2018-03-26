import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import purple from 'material-ui/colors/purple'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: 32,
  },
  card: {
    borderLeft: `3px solid ${purple[500]}`,
  },
  title: {
    marginBottom: 16,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const CardLifePath = (props) => {
  const { classes } = props
  const {
    lifePath,
    lifePathDescr,
  } = props
  return (
    <div className={classes.root}>
      <Grid container
        spacing={24}
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12} lg={9}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Droga Życia
              </Typography>
              <Typography variant="headline" component="h2">
                {lifePath}
              </Typography>
              <Typography component="p">
                {lifePathDescr}
              </Typography>
            </CardContent>
            <CardActions>
            <Button color="primary" className={classes.button} aria-label="Info">
              Co to Droga Życia?
            </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(CardLifePath)
