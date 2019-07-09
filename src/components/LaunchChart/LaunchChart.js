import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { Container, Typography } from '@material-ui/core'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import './launchChart.scss'
import LoadingSpinner from '../LoadingSpinner.js/LoadingSpinner';

const launchPastsQuery = gql`
  query lpq {
    launchesPastResult {
      data {
        launch_success
        launch_year
        rocket {
          rocket_name
        }
      }
      result {
        totalCount
      }
    }
  }
`

export default class LaunchChart extends PureComponent {
  render() {
    return (
      <Query query={launchPastsQuery}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingSpinner />
          if (error) return <p>Error :(</p>

          const queryData = data.launchesPastResult.data

          /**
           * This function will create the data needed for the chart.
           * It will produce an array of objects. Each object will 
           * hold the total launches per rocket per year.
           * 
           * @param {Object} queryData 
           */
          const getRocketTotalsByYear = queryData => {
            //   Create a date Array with all dates from query results
            const dataYears = Array.from(new Array(14), (x, i) =>
              String(i + 2006)
            )

            // Create object that will hold each year's totals
            let rocketTotalsByYear = dataYears.map(cv => {
              return {
                year: cv,
                Falcon9: 0,
                FalconHeavy: 0,
                Falcon1: 0,
              }
            })

            // For each year, increment the corresponding rocket's total
            queryData.forEach(cv => {
              let rocket = cv.rocket.rocket_name

              let chartObjindex = rocketTotalsByYear.findIndex(
                el => el.year === cv.launch_year
              )

              if (rocket === 'Falcon 1')
                rocketTotalsByYear[chartObjindex].Falcon1++
              else if (rocket === 'Falcon Heavy')
                rocketTotalsByYear[chartObjindex].FalconHeavy++
              else rocketTotalsByYear[chartObjindex].Falcon9++
            })

            return rocketTotalsByYear
          }

          let rocketTotalsByYear = getRocketTotalsByYear(queryData)

          return (
            <Container className='launch-chart-container'>
              <Typography variant='h5' color='primary' gutterBottom>
                Launches Per Year
              </Typography>
              <BarChart
                width={1200}
                height={300}
                data={rocketTotalsByYear}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='year' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='Falcon1' stackId='a' fill='#269fd8' />
                <Bar dataKey='Falcon9' stackId='a' fill='#2b7da6' />
                <Bar dataKey='FalconHeavy' stackId='a' fill='#304959' />
              </BarChart>
            </Container>
          )
        }}
      </Query>
    )
  }
}
