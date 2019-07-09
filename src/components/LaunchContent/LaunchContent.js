import React from 'react'
import Filters from '../Filters/Filters'
import LaunchCardDetails from '../LaunchCardDetails/LaunchCardDetails'
import { Container } from '@material-ui/core'
import './launchContent.scss'
import LaunchCardsHeader from '../LaunchCardsHeader/LaunchCardsHeader'
import LaunchCards from '../LaunchCards/LaunchCards'
import LaunchCardsFooter from '../LaunchCardsFooter/LaunchCardsFooter'

const LaunchContent = () => {
  return (
    <Container className='launch-content-container'>
      <Filters />
      <div className='launch-cards-container'>
        <LaunchCardsHeader />
        <LaunchCards />
        <LaunchCardsFooter />
      </div>
      <LaunchCardDetails />
    </Container>
  )
}

export default LaunchContent
