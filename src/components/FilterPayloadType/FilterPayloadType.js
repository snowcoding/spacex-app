import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { LaunchContext, changePayload, changePaginationPage } from '../../contexts/LaunchProvider'
import './filterPayloadType.scss'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    marginLeft: theme.spacing(2),
    marginTop: 60,
  },
}))

export default function FilterPayloadType() {
  const classes = useStyles()
  const [state, dispatch] = useContext(LaunchContext)

  const handleChange = name => event => {
    dispatch(changePayload(name, event.target.checked))
    if (state.paginationPage > 0) dispatch(changePaginationPage(0))
  }

  return (
    <div className={classes.root}>
      <FormControl component='fieldset' className={classes.formControl}>
        <Typography className='filter-payload-label'>Payload Type</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.payload.dragon}
                onChange={handleChange('dragon')}
                value='dragon'
                color='primary'
              />
            }
            label='Dragon'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.payload.satellite}
                onChange={handleChange('satellite')}
                value='satellite'
                color='primary'
              />
            }
            label='Satellite'
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}
