import React, { useContext } from 'react'
import Rating from 'react-rating'
import './filterPayloadWeight.scss'
import { Typography } from '@material-ui/core'
import {
  LaunchContext,
  changePayloadWeight,
  changePaginationPage,
} from '../../contexts/LaunchProvider'

const PayloadWeight = () => {
  const [state, dispatch] = useContext(LaunchContext)

  const rate = state.payloadWeight
  const onChange = rate => {
    dispatch(changePayloadWeight(rate))
    if (state.paginationPage > 0) dispatch(changePaginationPage(0))
  }

  return (
    <div className='filter-payload-weight-container'>
      <Typography className='filter-weight-label'>Payload Weight { rate === 4 ? '(All)' : `(${rate})`}</Typography>
      <Rating
        className='filter-payload-weight'
        start={0}
        stop={4}
        initialRating={state.payloadWeight}
        fullSymbol='fas fa-weight-hanging'
        emptySymbol='fal fa-weight-hanging'
        onChange={rate => onChange(rate)}
      />
    </div>
  )
}

export default PayloadWeight
