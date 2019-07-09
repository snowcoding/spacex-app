import React from 'react'
import Filters from '../Filters/Filters'
import LaunchCardDetails from '../LaunchCardDetails/LaunchCardDetails'
import LaunchCards from '../LaunchCards/LaunchCards'
import { Container } from '@material-ui/core'
import './launchContent.scss'

const LaunchContent = () => {
  return (
    <Container className='launch-content-container'>
      <Filters />
      <LaunchCards />
      <LaunchCardDetails />
    </Container>
  )
}

export default LaunchContent
