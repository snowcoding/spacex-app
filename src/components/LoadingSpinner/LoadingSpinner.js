import React from 'react'
import { Grid, CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  spinner: {
    // minHeight: '100vh',
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
  },
}))

export default function LoadingSpinner() {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.spinner}
    >
      <CircularProgress />
    </Grid>
  )
}
