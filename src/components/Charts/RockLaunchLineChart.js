import React from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from 'recharts'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const RockLaunchLineChart = props => {
  const { yaxis, isLoading } = props
  return (
    <div style={{ position: 'relative' }}>
      {isLoading && <LoadingSpinner />}
      <LineChart
        width={1200}
        height={300}
        data={yaxis}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='launchNum' />
        <YAxis />
        <Tooltip />
        <Line dataKey='Falcon 1' stackId='a' fill='#43ffca' dot={{ stroke: '#43ffca', strokeWidth: 2.5 }}/>
        <Line dataKey='Falcon 9' stackId='a' fill='#607d8b' dot={{ stroke: '#607d8b', strokeWidth: 2.5 }}/>
        <Line dataKey='Falcon Heavy' stackId='a' fill='#0b0bff' dot={{ stroke: '#0b0bff', strokeWidth: 2.5 }}/>
      </LineChart>
    </div>
  )
}

export default RockLaunchLineChart
