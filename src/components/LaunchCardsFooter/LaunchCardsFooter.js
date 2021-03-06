import React, { useContext } from 'react'
import {
  LaunchContext,
  changeLaunchesPerPage,
  changePaginationPage,
} from '../../contexts/LaunchProvider'
import './launchCardsFooter.scss'
import { TablePagination, TableFooter, TableRow, Table } from '@material-ui/core'

const LaunchCardsFooter = props => {
  const { filteredResultsCount } = props
  const [state, dispatch] = useContext(LaunchContext)

  const handleChangePage = (e,page) => {
    dispatch(changePaginationPage(page))
  }

  const handleChangeRowsPerPage = (e) => {
    dispatch(changeLaunchesPerPage(Number(e.target.value)))
  }

  // Makes certain that the current page does not exceed total number of pages
  const currentPage = Math.min(Math.floor(filteredResultsCount/Number(state.launchesPerPage)), state.paginationPage)

  return (
    <div className='launch-cards-footer'>
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[8, 16, 64, 128]}
              colSpan={3}
              count={filteredResultsCount}
              rowsPerPage={Number(state.launchesPerPage)}
              page={currentPage}
              SelectProps={{
                inputProps: { 'aria-label': 'Cards per page' },
                native: true,
              }}
              onChangePage={(e,page) => handleChangePage(e,page)}
              onChangeRowsPerPage={e =>
                handleChangeRowsPerPage(e)
              }
              labelRowsPerPage='Cards per page:'
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default LaunchCardsFooter
