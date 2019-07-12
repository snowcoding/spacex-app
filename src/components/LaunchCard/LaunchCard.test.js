import React from 'react'
import ReactDOM from 'react-dom'
import LaunchCard from './LaunchCard'
import Apollo from '../Apollo/Apollo'
import LaunchProvider from '../../contexts/LaunchProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const rocketName = 'Falcon'
  const payloads = [{ payload_type: 'Satellite', nationality: 'United States' }]
  const missionName = 'RockLauncher'
  const date = '2019-07-11'
  const success = true
  const launchId = 77

  ReactDOM.render(
    <Apollo>
      <LaunchProvider>
        <LaunchCard
          rocketName={rocketName}
          payloads={payloads}
          missionName={missionName}
          date={date}
          success={success}
          launchId={launchId}
        />
      </LaunchProvider>
    </Apollo>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
