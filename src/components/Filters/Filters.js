import React from 'react'
import './filters.scss'
import FilterDateRange from '../FilterDateRange/FilterDateRange'
import { Typography } from '@material-ui/core'
import FilterFailures from '../FilterFailures/FilterFailures';

const Filters = () => {
  return (
    <div className='filters'>
      <Typography variant='h5' color='primary' gutterBottom>
        Launch Filters
      </Typography>
      <FilterDateRange />
      <FilterFailures />
    </div>
  )
}

export default Filters
