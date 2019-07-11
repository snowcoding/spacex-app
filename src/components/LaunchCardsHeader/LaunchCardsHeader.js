import React from 'react'
import LaunchCardsSort from '../LaunchCardsSort/LaunchCardsSort'
import LaunchCardsSearch from '../LaunchCardsSearch/LaunchCardsSearch'
import './launchCardsHeader.scss'

const LaunchCardsHeader = () => {
  return (
    <div className='launch-cards-header'>
      <div className='launch-cards-header-item search'><LaunchCardsSearch /></div>
      <div className='launch-cards-header-item sort'><LaunchCardsSort /></div>
    </div>
  )
}

export default LaunchCardsHeader
