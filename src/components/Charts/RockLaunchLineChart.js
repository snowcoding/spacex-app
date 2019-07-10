import React from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from 'recharts'

const RockLaunchLineChart = props => {
  const { yaxis } = props
  return (
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
      <Legend />
      <Line dataKey='Falcon 1' stackId='a' fill='#269fd8' />
      <Line dataKey='Falcon 9' stackId='a' fill='#2b7da6' />
      <Line dataKey='Falcon Heavy' stackId='a' fill='#304959' />
    </LineChart>
  )
}

export default RockLaunchLineChart
