import React, { useContext, useState } from 'react'
import './launchCardDetails.scss'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Container } from '@material-ui/core'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { LaunchContext } from '../../contexts/LaunchProvider';
import LaunchPhotos from '../LaunchPhotos/LaunchPhotos';
import LaunchVideo from '../LaunchVideo/LaunchVideo';

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

const closeLaunchDetails = () => {
  document.getElementById('launch-detail-id').style.width = '0'
}

const LaunchDetails = () => {
  const [state, dispatch] = useContext(LaunchContext)
  const [queryData, setQueryData] = useState('')
  return (
    <Query
      query={launchDetailsQuery}
      variables={{ launchId: state.cardId }}
      onCompleted={data => {
        setQueryData(data)
      }}
    >
      {({ loading, error, data }) => {
        {/* // if (loading) return <p>Loading...</p>
        // if (error) return <p>Error :(</p>
        // console.log("detail data: ", data)
        // console.log("detail query data: ", setQueryData) */}
        return (
          <div id='launch-detail-id' className='launch-detail'>
            <a
              // href='javascript:void(0)'
              href='#'
              className='closebtn'
              onClick={closeLaunchDetails}
            >
              &times;
            </a>
            <Container>
              <h2 className='details-title'>Summary of Launch</h2>
              {queryData.launch ? (
                <React.Fragment>
                  <TextareaAutosize
                    className='textArea'
                    aria-label='empty textarea'
                    value={queryData.launch.details}
                    rowsMax={6}
                  />
                  <LaunchPhotos
                    photos={queryData.launch.links.flickr_images.map(cv => {
                      if (cv) return { imgPath: cv }
                    })}
                  />
                  <LaunchVideo videoLink={queryData.launch.links.video_link}/>
                </React.Fragment>
              ) : null}
            </Container>
          </div>
        )
      }}
    </Query>
  )
}

export default LaunchDetails
