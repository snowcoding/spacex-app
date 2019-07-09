import React, { useState, useContext, useEffect, memo } from 'react'
import './launchCards.scss'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import LaunchCard from '../LaunchCard/LaunchCard'
import { LaunchContext } from '../../contexts/LaunchProvider'
import { withRouter } from 'react-router-dom'
import LoadingSpinner from '../LoadingSpinner.js/LoadingSpinner';

const launchPastsQuery = gql`
# Sorting Occurs in the query itself
  query lpq($sort: String, $order: String) {
    launchesPastResult(sort: $sort, order: $order) {
      result {
        totalCount
      }
      data {
        rocket {
          second_stage {
            payloads {
              nationality
              payload_type
            }
          }
          rocket_name
        }
        mission_name
        mission_id
        launch_date_local
        id
        launch_success
      }
    }
  }
`
const LaunchCards = props => {
  const [queryData, setQueryData] = useState({})
  const [state] = useContext(LaunchContext)
  const { setFilteredResultsCount } = props

  const dateRangeURL = `${state.filterDateRange[0]}+${state.filterDateRange[1]}`
  const showFailureURL = state.filterFailures
  const payloadWeightURL = state.payloadWeight
  
  const [sort, order] = state.launchSort.split('-')
  const launchCardsSortURL = sort ? `${sort}+${order}` : null

  const payloadURLparams = (acc, cv) => {
    return `${acc}${acc !== '' ? '+' : ''}${cv}`
  }

  const payloadURL = Object.keys(state.payload)
    .filter(k => state.payload[k] === true)
    .reduce(payloadURLparams, '')

  const searchQueryString = searchParams => {
    return Object.keys(searchParams)
      .filter(k => searchParams[k] && String(searchParams[k]).length > 0)
      .reduce((acc, val) => {
        return `${acc}${acc !== '' ? '&' : ''}${val}=${searchParams[val]}`
      }, '')
  }

  useEffect(() => {
    props.history.push({
      search: searchQueryString({
        daterange: dateRangeURL,
        showFailures: showFailureURL,
        payload: payloadURL,
        payloadWeight: payloadWeightURL,
        launchCardSort: launchCardsSortURL,
      }),
    })
  }, [
    dateRangeURL,
    props.history,
    showFailureURL,
    payloadURL,
    payloadWeightURL,
    launchCardsSortURL,
  ])

  return (
    <Query
      query={launchPastsQuery}
      onCompleted={data => {
        setQueryData(data)
      }}
      variables={{ sort: sort, order: order }}
    >
      {({ loading, error, data }) => {
        if (loading) return <LoadingSpinner />
        if (error) return <p>Error :(</p>

        console.log('SPACE API data: ', data)

        const isPayloadSatOrDragon = pl => {
          return (state.payload.satellite && pl.payload_type === 'Satellite') ||
            (state.payload.dragon && pl.payload_type.includes('Dragon'))
            ? true
            : false
        }

        const filteredResults = data.launchesPastResult.data.filter(
          launch => {
            //
            // Filtering begins here
            //
            // Date Range Filtering
            const launchTime = parseInt(
              launch.launch_date_local.split('-')[0],
              10
            )
            const isCardFilteredByDateRange =
              launchTime >= state.filterDateRange[0] &&
              launchTime <= state.filterDateRange[1]
                ? true
                : false

            // Failure Selection Filtering
            const isCardFilteredByFailure =
              (!launch.launch_success && state.filterFailures) ||
              !state.filterFailures
                ? true
                : false

            // Filtering by Payload Type
            const isCardFilteredByPayLoad = launch.rocket.second_stage.payloads.some(
              isPayloadSatOrDragon
            )

            //Filtering by Payload Weight
            const payloadLength = launch.rocket.second_stage.payloads.length
            const isCardFilteredByPayloadWeight =
              state.payloadWeight === 4 ||
              (state.payloadWeight === 3 && payloadLength === 3) ||
              (state.payloadWeight === 2 && payloadLength === 2) ||
              (state.payloadWeight === 1 && payloadLength === 1)
                ? true
                : false

            const isCardFiltered =
              isCardFilteredByDateRange &&
              isCardFilteredByFailure &&
              isCardFilteredByPayLoad &&
              isCardFilteredByPayloadWeight

            return isCardFiltered
          }
        )

        //
        //Pagination begins here
        //
        let paginationResults = filteredResults

        if (state.launchesPerPage !== 0) {
          paginationResults = filteredResults.filter((launch, ind) => {
            return (
              ind >= state.paginationOffset &&
              ind < state.launchesPerPage + state.paginationOffset
            )
          })
        }
        
        console.log("filteredResults.length: " ,filteredResults.length)
        setFilteredResultsCount(filteredResults.length)


        //Finally return cards...
        return (
          <div className='launch-cards'>
            {paginationResults.map(launch => {
              return (
                <LaunchCard
                  key={launch.id}
                  launchId={launch.id}
                  rocketName={launch.rocket.rocket_name}
                  payloads={launch.rocket.second_stage.payloads}
                  missionName={launch.mission_name}
                  missionId={launch.mission_id}
                  date={launch.launch_date_local}
                  success={launch.launch_success}
                />
              )
            })}
          </div>
        )
      }}
    </Query>
  )
}

export default withRouter(memo(LaunchCards))
