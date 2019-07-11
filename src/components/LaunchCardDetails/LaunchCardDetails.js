import React, { useContext, useState } from 'react'
import './launchCardDetails.scss'
import Drawer from '@material-ui/core/Drawer'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  LaunchContext,
  closedLaunchDetails,
} from '../../contexts/LaunchProvider'
import LaunchPhotos from '../LaunchPhotos/LaunchPhotos'
import LaunchVideo from '../LaunchVideo/LaunchVideo'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  root: {
    width: '70%',
  },
  detailsContainer: {
    maxWidth: 700,
  },
  launchVideo: {
    marginTop: 20,
  },
})

const launchDetailsQuery = gql`
  query lpq($launchId: ID!) {
    launch(id: $launchId) {
      id
      details
      links {
        video_link
        flickr_images
      }
      launch_date_local
      launch_site {
        site_name
      }
      launch_success
    }
  }
`

const LaunchDetails = () => {
  const [state, dispatch] = useContext(LaunchContext)
  const [summaryExpanded, setSummaryExpanded] = useState(false)
  const classes = useStyles()

  const onClickCloseCardDetails = () => {
    dispatch(closedLaunchDetails())
  }

  const handleToggleSetSummaryExpanded = () => {
    setSummaryExpanded(!summaryExpanded)
  }

  return (
    <Query query={launchDetailsQuery} variables={{ launchId: state.cardId }}>
      {({ error, data }) => {
        if (error) return <p>Error :(</p>

        return (
          <Drawer
            anchor='right'
            open={state.isLaunchDetailsOpen}
            onClose={onClickCloseCardDetails}
          >
            <Container className={classes.detailsContainer}>
              {data.launch ? (
                <React.Fragment>
                  <ExpansionPanel
                    expanded={summaryExpanded}
                    onChange={handleToggleSetSummaryExpanded}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1bh-content'
                      id='panel1bh-header'
                    >
                      <Typography>Summary of Launch</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>{data.launch.details}</Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  <LaunchVideo
                    videoLink={data.launch.links.video_link}
                    className={classes.launchVideo}
                  />
                  <LaunchPhotos
                    photos={data.launch.links.flickr_images.map(cv => ({
                      imgPath: cv,
                    }))}
                  />
                </React.Fragment>
              ) : null}
            </Container>
          </Drawer>
        )
      }}
    </Query>
  )
}

export default LaunchDetails
