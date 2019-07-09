import React from 'react'
import Filters from '../Filters/Filters'
// import LaunchCardDetails from '../LaunchCardDetails/LaunchCardDetails'
import { Container } from '@material-ui/core'
import './launchContent.scss'
import LaunchCardsHeader from '../LaunchCardsHeader/LaunchCardsHeader'
import LaunchCards from '../LaunchCards/LaunchCards'
import LaunchCardsFooter from '../LaunchCardsFooter/LaunchCardsFooter'
import LaunchProvider from '../../contexts/LaunchProvider'

const LaunchContent = () => {
  return (
    <LaunchProvider>
      <Container className='launch-content-container'>
        <Filters />
        <Container className='launch-cards-container'>
          <LaunchCardsHeader />
          <LaunchCards />
          <LaunchCardsFooter />
        </Container>
        {/* <LaunchCardDetails /> */}
      </Container>
    </LaunchProvider>
  )
}

export default LaunchContent
