import React from 'react'
import LaunchCardsSort from '../LaunchCardsSort/LaunchCardsSort'
import LaunchesPerPage from '../LaunchCardsPerPage/LaunchCardsPerPage'
import LaunchCardsSearch from '../LaunchCardsSearch/LaunchCardsSearch'
import './launchCardsHeader.scss'

const LaunchCardsHeader = () => {
  return (
    <div className='launch-cards-header'>
      <LaunchCardsSearch />
      <div className='launch-cards-sort-per-page'>
        <LaunchCardsSort />
        <LaunchesPerPage />
      </div>
    </div>
  )
}

export default LaunchCardsHeader
