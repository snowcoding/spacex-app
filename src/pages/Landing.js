import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Landing.scss'

const Landing = () => {
  return (
    <React.Fragment>
      <Container className='landing-container'>
        <Typography variant='h3' className='landing-title'>
          Welcome to Rock Launcher
        </Typography>
        <p className='landing-tagline'>
          A small app that helps explore all the rocket launches of Space
          X <i className='fal fa-space-shuttle' />
        </p>
        <div className='landing-link-container'>
          <span className='landing-link'>
            <Link to='/launches-over-time'>Launches over time</Link>
          </span>
          <span className='landing-link'>
            <Link to='/explore-launches'>Explore Launches</Link>
          </span>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Landing
