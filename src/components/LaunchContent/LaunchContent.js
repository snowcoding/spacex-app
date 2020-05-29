import React, { useState } from 'react'
import Filters from '../Filters/Filters'
import LaunchCardDetails from '../LaunchCardDetails/LaunchCardDetails'
import { Container, Grid } from '@material-ui/core'
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
        <Grid container spacing={2}>
          {/* Filter Column Section*/}
          <Grid item sm={3}>
            <Filters className='filters' />
          </Grid>

          {/* Launch Cards with additional filters Section */}
          <Grid item sm={9}>
            <div className='launch-cards-box'>
              <LaunchCardsHeader />
              <div className='launch-cards-container'>
                <LaunchCards
                  setFilteredResultsCount={setFilteredResultsCount}
                />
              </div>
              <LaunchCardsFooter filteredResultsCount={filteredResultsCount} />
            </div>
          </Grid>
          <LaunchCardDetails />
        </Grid>
      </Container>
    </LaunchProvider>
  )
}

export default LaunchContent
