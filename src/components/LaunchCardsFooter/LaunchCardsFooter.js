import React, { useContext } from 'react'
import Pagination from 'material-ui-flat-pagination'
import {
  LaunchContext,
  changePaginationOffset,
} from '../../contexts/LaunchProvider'
import './launchCardsFooter.scss'

const LaunchCardsFooter = props => {
  const { filteredResultsCount } = props
  const [state, dispatch] = useContext(LaunchContext)

  const handlePageChange = offset => {
    dispatch(changePaginationOffset(offset))
  }
  return (
    <div className='launch-cards-footer'>
      {state.launchesPerPage === 0 ? null : (
        <Pagination
          limit={state.launchesPerPage}
          offset={state.paginationOffset}
          total={filteredResultsCount}
          onClick={(e, offset) => handlePageChange(offset)}
        />
      )}
    </div>
  )
}

export default LaunchCardsFooter
