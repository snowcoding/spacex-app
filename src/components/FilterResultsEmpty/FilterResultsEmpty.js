import React from 'react'
import './filterResultsEmpty.scss'

const FilterResultsEmpty = () => {
    return (
        <div className='filter-results-empty'>
            <p className='results-empty-text'>Oops, no results for that filter setting. Try undoing your last search!</p>
        </div>
    )
}

export default FilterResultsEmpty
