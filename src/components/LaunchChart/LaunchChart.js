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
import { Container } from '@material-ui/core'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import './launchChart.scss'
import RockLaunchLineChart from '../Charts/RockLaunchLineChart'
import ChartYaxisLabel from '../ChartYaxisLabel/ChartYaxisLabel'
import { yAxisLabelPopover, getChartData } from './utils'

const launchPastsQuery = gql`
  query lpqChart {
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
          // if (loading) return <LoadingSpinner />
          if (error) return <p>Error :(</p>

          // Todo: using temp data to populate x and y axis before data is returned from GQL
          const getTempChartData = () => {
            return {
              rocketTotalsByYear: [],
              successRate: [],
              eccentricity: [],
              inclinationDeg: [],
              meanAnomaly: [],
              periapsisKm: [],
              periodMin: [],
            }
          }

          let {
            rocketTotalsByYear,
            successRate,
            eccentricity,
            inclinationDeg,
            meanAnomaly,
            periapsisKm,
            periodMin,
          } = loading
            ? getTempChartData()
            : getChartData(data.launchesPastResult.data)

          return (
            <Container className='launch-charts-container'>
              <ChartYaxisLabel yAxisLabel={yAxisLabelPopover.launchPerYear} />
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
                <Legend align='right' verticalAlign='top' />
                <Bar dataKey='Falcon1' stackId='a' fill='#43ffca' />
                <Bar dataKey='Falcon9' stackId='a' fill='#607d8b' />
                <Bar dataKey='FalconHeavy' stackId='a' fill='#0b0bff' />
              </BarChart>
              <div className='rl-chart-container'>
                <ChartYaxisLabel yAxisLabel={yAxisLabelPopover.successRate} />
                <RockLaunchLineChart
                  yaxis={successRate.reverse()}
                  isLoading={loading}
                />
              </div>
              <div className='rl-chart-container'>
                <ChartYaxisLabel yAxisLabel={yAxisLabelPopover.orbitEccen} />
                <RockLaunchLineChart
                  yaxis={eccentricity.reverse()}
                  isLoading={loading}
                />
              </div>
              <div className='rl-chart-container'>
                <ChartYaxisLabel yAxisLabel={yAxisLabelPopover.orbitInclin} />
                <RockLaunchLineChart
                  yaxis={inclinationDeg.reverse()}
                  isLoading={loading}
                />
              </div>
              <div className='rl-chart-container'>
                <ChartYaxisLabel yAxisLabel={yAxisLabelPopover.orbitMeanAn} />
                <RockLaunchLineChart
                  yaxis={meanAnomaly.reverse()}
                  isLoading={loading}
                />
              </div>
              <div className='rl-chart-container'>
                <ChartYaxisLabel yAxisLabel={yAxisLabelPopover.orbitPeriap} />
                <RockLaunchLineChart
                  yaxis={periapsisKm.reverse()}
                  isLoading={loading}
                />
              </div>
              <div className='rl-chart-container'>
                <ChartYaxisLabel yAxisLabel={yAxisLabelPopover.period} />
                <RockLaunchLineChart
                  yaxis={periodMin.reverse()}
                  isLoading={loading}
                />
              </div>
            </Container>
          )
        }}
      </Query>
    )
  }
}
