import React, { useContext } from 'react'
import Rating from 'react-rating'
import './filterPayloadWeight.scss'
import { Typography } from '@material-ui/core'
import {
  LaunchContext,
  changePayloadWeight,
} from '../../contexts/LaunchProvider'

const PayloadWeight = () => {
  const [state, dispatch] = useContext(LaunchContext)
  return (
    <div className='filter-payload-weight-container'>
      <Typography className='filter-weight-label'>Payload Weight</Typography>
      <Rating
        className='filter-payload-weight'
        start={0}
        stop={4}
        initialRating={state.payloadWeight}
        fullSymbol='fas fa-weight-hanging'
        emptySymbol='fal fa-weight-hanging'
        onChange={rate => dispatch(changePayloadWeight(rate))}
      />
    </div>
  )
}

export default PayloadWeight
