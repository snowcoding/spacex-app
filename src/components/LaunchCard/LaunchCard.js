import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Flag from 'react-world-flags'
import './launchCard.scss'
import {
  LaunchContext,
  changeLaunchCardDetails,
} from '../../contexts/LaunchProvider'

const useStyles = makeStyles({
  card: {
    minWidth: 180,
    maxWidth: 300,
    height: 250,
    border: '2px solid rgba(0,0,0,0)',
    transition: 'all 0.2s',
    '&:hover': {
      boxShadow: '0px 2px 7px #888',
    },
    backgroundColor: '#FFF',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 250,
  },
  flag: {
    height: 27,
    marginLeft: 5,
    boxShadow: '1px 0px 4px #888',
  },
})

export default function LaunchCard(props) {
  const classes = useStyles()
  const [state, dispatch] = useContext(LaunchContext)

  const { rocketName, payloads, missionName, date, success, launchId } = props

  const uniqueNations = payloads
    ? [...new Set(payloads.map(pl => pl.nationality))]
    : []

  const flagCodeLUT = {
    'United States': 'USA',
    Argentina: 'ARG',
    Bangladesh: 'BGD',
    Bulgaria: 'BGR',
    Canada: 'CAN',
    France: 'FRA',
    'Hong Kong': 'HKG',
    Indonesia: 'IDN',
    Israel: 'ISR',
    Japan: 'JPN',
    Luxembourg: 'LUX',
    Qatar: 'QAT',
    'South Korea': 'KOR',
    Spain: 'ESP',
    Thailand: 'THA',
    Turkmenistan: 'TKM',
    Taiwan: 'TWN',
    'Saudi Arabia': 'SAU',
    'United Kingdom': 'GBR',
    Malaysia: 'MYS',
  }

  const openLaunchCardDetails = () => {
    dispatch(changeLaunchCardDetails(launchId))
  }

  return (
    <Card className={classes.card} onClick={openLaunchCardDetails}>
      <CardContent className={classes.cardContent}>
        <div className='flag-group'>
          {uniqueNations.length !== 0 ? (
            uniqueNations.map((nation, ind) =>
              nation && flagCodeLUT[nation] ? (
                <Flag
                  key={`${ind}+${launchId}`}
                  className={classes.flag}
                  code={flagCodeLUT[nation]}
                />
              ) : (
                <Flag key={`${ind}+${launchId}`} className={classes.flag} code={'USA'} />
              )
            )
          ) : (
            <Flag className={classes.flag} code={'USA'} />
          )}
        </div>

        <h2 className='mission-name'>
          {missionName ? missionName.substring(0, 8) : null}
        </h2>

        <div className='launch-date'>
          {!success ? (
            <i className='fas fa-times-circle failure' />
          ) : (
            <i className='fas fa-check-circle pass' />
          )}
          <span className='date'>{date ? date.split('T')[0] : null}</span>
        </div>

        <div className='rocket-row'>
          <i className='far fa-space-shuttle' />
          <span className='rocket-text'>{rocketName}</span>
        </div>

        <div className='payload'>
          {/* Map through the payloads array, if it has more than 4 items, 
          render all satellites, otherwise, render the appropriate icon */}
          {payloads && payloads.length > 3
            ? [0, 1, 2, 3].map((cv, ind) => (
                <i key={`${ind}+${launchId}`} className='fal fa-satellite' />
              ))
            : payloads.map((pl, ind) =>
                pl.payload_type === 'Satellite' ? (
                  <i key={`${ind}+${launchId}`} className='fal fa-satellite' />
                ) : (
                  <i key={`${ind}+${launchId}`} className='fal fa-dragon' />
                )
              )}
        </div>
      </CardContent>
    </Card>
  )
}
