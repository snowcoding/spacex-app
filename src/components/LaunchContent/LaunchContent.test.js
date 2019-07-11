import React from 'react'
import ReactDOM from 'react-dom'
import LaunchContent from './LaunchContent'
import Apollo from '../Apollo/Apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import LaunchProvider from '../../contexts/LaunchProvider'
import { createMuiTheme, colors } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'

const rockBitTheme = createMuiTheme({
  palette: {
    primary: colors.blueGrey,
    secondary: colors.green,
  },
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <Apollo>
        <MuiThemeProvider theme={rockBitTheme}>
          <LaunchProvider>
            <LaunchContent />
          </LaunchProvider>
        </MuiThemeProvider>
      </Apollo>
    </Router>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
