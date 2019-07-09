import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { LaunchContext, changeLaunchesPerPage } from '../../contexts/LaunchProvider';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 216,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function LaunchesPerPage() {
  const classes = useStyles()
  const [state, dispatch] = useContext(LaunchContext)

  function handleChange(event) {
    dispatch(changeLaunchesPerPage(event.target.value))
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={state.launchesPerPage}
          onChange={handleChange}
          displayEmpty
          name='age'
          className={classes.selectEmpty}
        >
          <MenuItem value={0}>
            <em>Show all Launches</em>
          </MenuItem>
          <MenuItem value={8}>Show 8 launches / page</MenuItem>
          <MenuItem value={16}>Show 16 launches / page</MenuItem>
          <MenuItem value={32}>Show 32 launches / page</MenuItem>
          <MenuItem value={64}>Show 64 launches / page</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
