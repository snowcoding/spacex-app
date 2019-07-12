import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import { FormControlLabel, FormGroup, } from '@material-ui/core'
import './filterFailures.scss'
import {
  LaunchContext,
  changeFilterFailures,
  changePaginationPage,
} from '../../contexts/LaunchProvider'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    color: theme.palette.primary.main,
  },
}))

export default function FilterFailures() {
  const classes = useStyles()
  const [state, dispatch] = useContext(LaunchContext)

  const handleChange = event => {
    dispatch(changeFilterFailures(event.target.checked))
    if (state.paginationPage > 0) dispatch(changePaginationPage(0))
  }

  return (
    <FormGroup row className='filter-failures'>
      <FormControlLabel
        label={state.filterFailures === true ? 'Show All' : 'Show Failures'}
        labelPlacement='start'
        className={classes.root}
        control={
          <Switch
            checked={state.filterFailures}
            onChange={e => handleChange(e)}
            color='primary'
          />
        }
      />
    </FormGroup>
  )
}
