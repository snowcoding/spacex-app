import React from 'react'
import Header from '../components/Header/Header'
import LaunchChart from '../components/LaunchChart/LaunchChart'
import LaunchContent from '../components/LaunchContent/LaunchContent'

const Launches = () => {
  return (
    <React.Fragment>
      <Header />
      <LaunchChart />
      <LaunchContent />
    </React.Fragment>
  )
}

export default Launches
