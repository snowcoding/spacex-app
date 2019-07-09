import React from 'react'
import LaunchCardsSort from '../LaunchCardsSort/LaunchCardsSort'
import LaunchesPerPage from '../LaunchCardsPerPage/LaunchCardsPerPage';
import './launchCardsHeader.scss'

const LaunchCardsHeader = () => {
    return (
        <div className='launch-cards-header'>
            <LaunchCardsSort />
            <LaunchesPerPage />
        </div>
    )
}

export default LaunchCardsHeader
