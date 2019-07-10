import React from 'react'
import './filters.scss'
import FilterDateRange from '../FilterDateRange/FilterDateRange'
import { Typography } from '@material-ui/core'
import FilterFailures from '../FilterFailures/FilterFailures';
import FilterPayloadTypes from '../FilterPayloadType/FilterPayloadType'
import FilterPayloadWeight from '../FilterPayloadWeight/FilterPayloadWeight'

const Filters = () => {
  return (
    <div className='filters'>
      <Typography variant='h6' color='primary' gutterBottom>
        Launch Filters
      </Typography>
      <FilterDateRange />
      <FilterFailures />
      <FilterPayloadTypes />
      <FilterPayloadWeight />
    </div>
  )
}

export default Filters
