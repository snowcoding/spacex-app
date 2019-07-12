import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Landing.scss'

const Landing = () => {
  return (
    <React.Fragment>
      <Container className='landing-container'>
        <Typography variant='h3' className='landing-title'>
          Welcome to RockLauncher
        </Typography>
        <p className='landing-tagline'>
          A dashboard to analyze SpaceX Rocket Launches
        </p>
        <div className='landing-link-container'>
          <span className='landing-button'>
            <Link to='/explore-launches' className='landing-link'>
              <Button className='explore' variant='contained' color='primary'>
                <div>Explore Launches</div>
                <i className="fal fa-space-shuttle fa-rotate-270"></i>
              </Button>
            </Link>
          </span>
          <span className='landing-button'>
            <Link to='/launches-over-time' className='landing-link'>
              <Button className='graph' variant='contained'>
                <div>Graphs of Launches</div><i className='far fa-chart-bar' />
              </Button>
            </Link>
          </span>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Landing
