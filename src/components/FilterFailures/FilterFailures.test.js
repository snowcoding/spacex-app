import React from 'react'
import ReactDOM from 'react-dom'
import FilterFailures from './FilterFailures'
import LaunchProvider from '../../contexts/LaunchProvider'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { colors } from '@material-ui/core'

it('renders without crashing', () => {
  const rockBitTheme = createMuiTheme({
    palette: {
      primary: colors.blueGrey,
      secondary: colors.green,
    },
  })

  const div = document.createElement('div')
  ReactDOM.render(
    <MuiThemeProvider theme={rockBitTheme}>
      <LaunchProvider>
        <FilterFailures />
      </LaunchProvider>
    </MuiThemeProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
