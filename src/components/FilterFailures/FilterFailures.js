import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import { FormControlLabel, FormGroup } from '@material-ui/core'
import './filterFailures.scss'
import { LaunchContext, changeFilterFailures  }  from '../../contexts/LaunchProvider';

export default function FilterFailures() {
    const [state, dispatch] = useContext(LaunchContext)

  const handleChange = event => {
    dispatch(changeFilterFailures(event.target.checked))
  }

  return (
      <FormGroup row className='filter-failures'> 
        <FormControlLabel
          label='Show Failures'
          labelPlacement='start'
          className='filter-failures-label'
          control={
            <Switch
              checked={state.filterFailures}
              onChange={ e => handleChange(e)}
              // value='launch'
              color='primary'
            />
          }
        />
      </FormGroup>
  )
}