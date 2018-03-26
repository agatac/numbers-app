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
    height: '100%',
  },
  title: {
    marginBottom: 16,
  },
});

const CardPinnacles = (props) => {
  const { classes } = props
  const {
    pinnacles,
    p1descr,
    p2descr,
    p3descr,
    p4descr,
  } = props
  return (
    <div className={classes.root}>
      <Grid container
        direction="row"
        spacing={24}
        alignItems="stretch"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={6} md={8} lg={8}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Cykl pierwszy
              </Typography>
              <Typography variant="headline" component="h3">
                {pinnacles.p1}
              </Typography>
              <Typography component="p">
                {p1descr}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Cykl drugi
              </Typography>
              <Typography variant="headline" component="h3">
                {pinnacles.p2}
              </Typography>
              <Typography component="p">
                {p2descr}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Cykl trzeci
              </Typography>
              <Typography variant="headline" component="h3">
                {pinnacles.p3}
              </Typography>
              <Typography component="p">
                {p3descr}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Cykl trzeci
              </Typography>
              <Typography variant="headline" component="h3">
                {pinnacles.p4}
              </Typography>
              <Typography component="p">
                {p4descr}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(CardPinnacles)
