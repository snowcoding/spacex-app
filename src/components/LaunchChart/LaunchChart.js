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
import LoadingSpinner from '../LoadingSpinner.js/LoadingSpinner'
import RockLaunchLineChart from '../Charts/RockLaunchLineChart'

const launchPastsQuery = gql`
  query lpq {
    launchesPastResult {
      data {
        id
        launch_success
        launch_year
        rocket {
          rocket_name
          second_stage {
            payloads {
              orbit_params {
                eccentricity
                inclination_deg
                mean_anomaly
                periapsis_km
                period_min
              }
            }
          }
          rocket {
            success_rate_pct
          }
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
          console.log("Chart Data: ", data)

          /**
           * This function will create the data needed for the chart.
           * It will produce an array of objects.
           *
           * @param {Object} queryData
           */
          const getChartData = queryData => {
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

            const successRate = []
            const eccentricity = []
            const inclinationDeg = []
            const meanAnomaly = []
            const periapsisKm = []
            const periodMin = []

            // For each year, increment the corresponding rocket's total
            queryData.forEach(cv => {
              let rocket = cv.rocket.rocket_name
              successRate.push({
                launchNum: `#${cv.id}`,
                [cv.rocket.rocket_name]: cv.rocket.rocket.success_rate_pct,
              })
              eccentricity.push({
                launchNum: `#${cv.id}`,
                [cv.rocket.rocket_name]:
                  cv.rocket.second_stage.payloads[0].orbit_params.eccentricity,
              })
              inclinationDeg.push({
                launchNum: `#${cv.id}`,
                [cv.rocket.rocket_name]:
                  cv.rocket.second_stage.payloads[0].orbit_params
                    .inclination_deg,
              })
              meanAnomaly.push({
                launchNum: `#${cv.id}`,
                [cv.rocket.rocket_name]:
                  cv.rocket.second_stage.payloads[0].orbit_params.mean_anomaly,
              })
              periapsisKm.push({
                launchNum: `#${cv.id}`,
                [cv.rocket.rocket_name]:
                  cv.rocket.second_stage.payloads[0].orbit_params.periapsis_km,
              })
              periodMin.push({
                launchNum: `#${cv.id}`,
                [cv.rocket.rocket_name]:
                  cv.rocket.second_stage.payloads[0].orbit_params.period_min,
              })

              let chartObjindex = rocketTotalsByYear.findIndex(
                el => el.year === cv.launch_year
              )

              if (rocket === 'Falcon 1')
                rocketTotalsByYear[chartObjindex].Falcon1++
              else if (rocket === 'Falcon Heavy')
                rocketTotalsByYear[chartObjindex].FalconHeavy++
              else rocketTotalsByYear[chartObjindex].Falcon9++
            })

            return [
              rocketTotalsByYear,
              successRate,
              eccentricity,
              inclinationDeg,
              meanAnomaly,
              periapsisKm,
              periodMin,
            ]
          }

          let [
            rocketTotalsByYear,
            successRate,
            eccentricity,
            inclinationDeg,
            meanAnomaly,
            periapsisKm,
            periodMin,
          ] = getChartData(queryData)

          return (
            <Container className='launch-charts-container'>
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
              <div className='rl-chart-container'>
                <Typography variant='h5' color='primary' gutterBottom>
                  Success Rate
                </Typography>
                <RockLaunchLineChart yaxis={successRate.reverse()} />
              </div>
              <div className='rl-chart-container'>
                <Typography variant='h5' color='primary' gutterBottom>
                  Orbital Eccentricity
                </Typography>
                <RockLaunchLineChart yaxis={eccentricity.reverse()} />
              </div>
              <div className='rl-chart-container'>
                <Typography variant='h5' color='primary' gutterBottom>
                  Orbital Inclination (degrees)
                </Typography>
                <RockLaunchLineChart yaxis={inclinationDeg.reverse()} />
              </div>
              <div className='rl-chart-container'>
                <Typography variant='h5' color='primary' gutterBottom>
                  Orbital Mean Anomaly
                </Typography>
                <RockLaunchLineChart yaxis={meanAnomaly.reverse()} />
              </div>
              <div className='rl-chart-container'>
                <Typography variant='h5' color='primary' gutterBottom>
                  Periapsis (km)
                </Typography>
                <RockLaunchLineChart yaxis={periapsisKm.reverse()} />
              </div>
              <div className='rl-chart-container'>
                <Typography variant='h5' color='primary' gutterBottom>
                  Period (min)
                </Typography>
                <RockLaunchLineChart yaxis={periodMin.reverse()} />
              </div>
            </Container>
          )
        }}
      </Query>
    )
  }
}
