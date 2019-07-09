import React, { useState } from 'react'
import Filters from '../Filters/Filters'
// import LaunchCardDetails from '../LaunchCardDetails/LaunchCardDetails'
import { Container } from '@material-ui/core'
import './launchContent.scss'
import LaunchCardsHeader from '../LaunchCardsHeader/LaunchCardsHeader'
import LaunchCards from '../LaunchCards/LaunchCards'
import LaunchCardsFooter from '../LaunchCardsFooter/LaunchCardsFooter'
import LaunchProvider from '../../contexts/LaunchProvider'

const LaunchContent = () => {
  const [filteredResultsCount, setFilteredResultsCount] = useState(0)

  return (
    <LaunchProvider>
      <Container className='launch-content-container'>
        <Filters />
        <Container className='launch-cards-container'>
          <LaunchCardsHeader />
          <LaunchCards setFilteredResultsCount={setFilteredResultsCount} />
          <LaunchCardsFooter filteredResultsCount={filteredResultsCount} />
        </Container>
        {/* <LaunchCardDetails /> */}
      </Container>
    </LaunchProvider>
  )
}

export default LaunchContent
