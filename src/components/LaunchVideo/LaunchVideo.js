import React from 'react'
import YouTube from 'react-youtube'
import './LaunchVideo.scss'

const LaunchVideo = props => {
  const patt = /[^=^/][\w\d-_]{9,13}/gi
  const videoId = props.videoLink.match(patt)[0]

  const _onReady = event => {
    // event.target.pauseVideo()
  }
  const opts = {
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={_onReady}
      containerClassName='video-backdrop'
    />
  )
}

export default LaunchVideo
