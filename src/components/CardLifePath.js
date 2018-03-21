import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import lime from 'material-ui/colors/lime'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: 32,
  },
  card: {
    borderLeft: `3px solid ${lime[500]}`,
  },
  card2: {
    borderTop: `3px solid ${lime[900]}`,
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
    cycle1,
    cycle1descr,
    cycle2,
    cycle2descr,
    cycle3,
    cycle3descr
  } = props
  return (
    <div className={classes.root}>
      <Grid container
        spacing={24}
        alignItems="center"
        justify="center"
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

      <Grid container
        spacing={24}
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12} md={4} lg={3}>
          <Card className={classes.card2}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Cykl pierwszy
              </Typography>
              <Typography variant="headline" component="h3">
                {cycle1}
              </Typography>
              <Typography component="p">
                {cycle1descr}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Card className={classes.card2}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Cykl drugi
              </Typography>
              <Typography variant="headline" component="h3">
                {cycle2}
              </Typography>
              <Typography component="p">
                {cycle2descr}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Card className={classes.card2}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Cykl trzeci
              </Typography>
              <Typography variant="headline" component="h3">
                {cycle3}
              </Typography>
              <Typography component="p">
                {cycle3descr}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(CardLifePath)
