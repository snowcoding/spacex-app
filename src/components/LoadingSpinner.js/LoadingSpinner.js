import React from 'react'
import { Grid, CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  spinner: {
    minHeight: '100vh',
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
