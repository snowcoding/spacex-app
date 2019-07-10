import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Slider } from '@material-ui/core'
import {
  LaunchContext,
  changeFilterDateRange,
  changePaginationPage,
} from '../../contexts/LaunchProvider'
import './filterDateRange.scss'

const useStyles = makeStyles({
  root: {
    width: 175,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 13,
    marginTop: 30,
    marginBottom: 30,
  },
})

function valuetext(value) {
  return `${value}`
}

const marks = [
  { value: 2006, label: '2006' },
  { value: 2007 },
  { value: 2008 },
  { value: 2009 },
  { value: 2010 },
  { value: 2011 },
  { value: 2012 },
  { value: 2013, label: '2013' },
  { value: 2014 },
  { value: 2015 },
  { value: 2016 },
  { value: 2017 },
  { value: 2018 },
  { value: 2019 },
  { value: 2020, label: '2020' },
]

export default function FilterDateRange() {
  const classes = useStyles()
  const [state, dispatch] = useContext(LaunchContext)

  const handleChange = (event, newValue) => {
    dispatch(changeFilterDateRange(newValue))
    if (state.paginationPage > 0) dispatch(changePaginationPage(0))
  }

  return (
    <div className={classes.root}>
      <Typography id='range-slider' gutterBottom className='date-range-label'>
        Date
      </Typography>
      <Slider
        value={state.filterDateRange}
        onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider'
        getAriaValueText={valuetext}
        marks={marks}
        step={1}
        min={2006}
        max={2020}
      />
    </div>
  )
}
