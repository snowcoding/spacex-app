import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Apollo from './components/Apollo/Apollo'
//Sentry
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://855268d3a8084bd88c551f3cc49ec6b4@sentry.io/1501878',
  environment: 'development',
})

ReactDOM.render(
  <Apollo>
    <App />
  </Apollo>,
  document.getElementById('root')
)
