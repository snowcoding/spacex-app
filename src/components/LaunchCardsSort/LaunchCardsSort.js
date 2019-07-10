import React, { useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { LaunchContext, changeLaunchSort } from '../../contexts/LaunchProvider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 172,
    marginTop: 8,
    marginLeft: 46,
    marginRight: 43,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
    marginTop: 12,
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}))

export default function LaunchSort() {
  const classes = useStyles()
    const [state, dispatch] = useContext(LaunchContext)

  function handleChange(event) {
    dispatch(changeLaunchSort(event.target.value))
  }

  return (
    <div>
      <FormControl className={classes.formControl} >
        <Select
          value={state.launchSort}
          onChange={handleChange}
          displayEmpty
          name='age'
          className={classes.selectEmpty}
        >
          <MenuItem value={''} className={classes.menuItem}>
            <em>Sort by...</em>
          </MenuItem>
          <MenuItem value={'mission_name-ASC'} className={classes.menuItem}>
            <span> Mission Name</span>
            <i className='fal fa-sort-alpha-up' />
          </MenuItem>
          <MenuItem value={'mission_name-DESC'} className={classes.menuItem}>
            <span>Mission Name</span>
            <i className='fal fa-sort-alpha-down' />
          </MenuItem>
          <MenuItem value={'launch_year-ASC'} className={classes.menuItem}>
            <span>Launch Date</span>
            <i className='fal fa-sort-numeric-up' />
          </MenuItem>
          <MenuItem value={'launch_year-DESC'} className={classes.menuItem}>
            <span>Launch Date</span>
            <i className='fal fa-sort-numeric-down' />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
