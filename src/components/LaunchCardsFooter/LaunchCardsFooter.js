import React, { useContext } from 'react'
// import Pagination from 'material-ui-flat-pagination'
import {
  LaunchContext,
  changePaginationOffset,
  changeLaunchesPerPage,
  changePaginationPage,
} from '../../contexts/LaunchProvider'
import './launchCardsFooter.scss'
import { TablePagination, TableFooter, TableRow, Table } from '@material-ui/core'

const LaunchCardsFooter = props => {
  const { filteredResultsCount } = props
  const [state, dispatch] = useContext(LaunchContext)

  const handleChangePage = (e,page) => {
    // dispatch(changePaginationOffset(offset))
    console.log('page:', page)
    dispatch(changePaginationPage(page))
  }

  const handleChangeRowsPerPage = (e) => {
    console.log('cards per page:', e.target.value)
    dispatch(changeLaunchesPerPage(Number(e.target.value)))
  }

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
              page={state.paginationPage}
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

      {/* {state.launchesPerPage === 0 ? null : (
        <Pagination
          limit={state.launchesPerPage}
          offset={state.paginationOffset}
          total={filteredResultsCount}
          onClick={(e, offset) => handlePageChange(offset)}
        />
      )} */}
    </div>
  )
}

export default LaunchCardsFooter
