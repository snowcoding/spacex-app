import React from 'react'
import LaunchCardsSort from '../LaunchCardsSort/LaunchCardsSort'
import LaunchCardsSearch from '../LaunchCardsSearch/LaunchCardsSearch'
import './launchCardsHeader.scss'

const LaunchCardsHeader = () => {
  return (
    <div className='launch-cards-header'>
      <LaunchCardsSearch />
      <LaunchCardsSort />
    </div>
  )
}

export default LaunchCardsHeader
