import React, { useState, useContext } from 'react'
import './launchCards.scss'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import LaunchCard from '../LaunchCard/LaunchCard'
import { LaunchContext } from '../../contexts/LaunchProvider'

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
const LaunchBox = () => {
  const [queryData, setQueryData] = useState({})
  const [state] = useContext(LaunchContext)

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
            const isCardFiltered = isCardFilteredByDateRange

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

export default LaunchBox
