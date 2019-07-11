import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
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
          A small app that helps explore all the rocket launches of SpaceX{' '}
          <i className='fal fa-space-shuttle' />
        </p>
        <div className='landing-link-container'>
          <span className='landing-button'>
            <Link to='/explore-launches' className='landing-link'>
              <Button variant='contained' color='primary'>Explore Launches</Button>
            </Link>
          </span>
          <span className='landing-button'>
            <Link to='/launches-over-time' className='landing-link'>
              <Button variant='contained'>Launches over time</Button>
            </Link>
          </span>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Landing
