import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import purple from 'material-ui/colors/purple'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: 32,
  },
  card: {
    borderTop: `3px solid ${purple[900]}`,
  },
  title: {
    marginBottom: 16,
  },
});

const CardLifeCycle = (props) => {
  const { classes } = props
  const {
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
        className={classes.container}
      >
        <Grid item xs={12} md={4} lg={3}>
          <Card className={classes.card}>
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
          <Card className={classes.card}>
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
          <Card className={classes.card}>
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

export default withStyles(styles)(CardLifeCycle)
