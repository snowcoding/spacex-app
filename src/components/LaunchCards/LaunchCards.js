import React, { useState, useContext, useEffect, memo } from 'react'
import './launchCards.scss'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import LaunchCard from '../LaunchCard/LaunchCard'
import { LaunchContext } from '../../contexts/LaunchProvider'
import { withRouter } from 'react-router-dom'

const launchPastsQuery = gql`
  query lpq {
    launchesPastResult {
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

  const dateRangeURL = `${state.filterDateRange[0]}+${state.filterDateRange[1]}`
  const showFailureURL = state.filterFailures

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
      }),
    })
  }, [dateRangeURL, props.history, showFailureURL, payloadURL])

  return (
    <Query
      query={launchPastsQuery}
      onCompleted={data => {
        setQueryData(data)
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        console.log('SPACE API data: ', data)

        const isPayloadSatOrDragon = pl => {
          return (state.payload.satellite && pl.payload_type === 'Satellite') ||
            (state.payload.dragon && pl.payload_type.includes('Dragon'))
            ? true
            : false
        }

        const filteredResults = queryData.launchesPastResult.data.filter(
          launch => {
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
            const isCardFiltered =
              isCardFilteredByDateRange &&
              isCardFilteredByFailure &&
              isCardFilteredByPayLoad

            return isCardFiltered
          }
        )

        return (
          <div className='launch-cards'>
            {filteredResults.map(launch => {
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
