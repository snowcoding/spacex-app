import React from 'react'
import Launches from './pages/Launches'
import Orbits from './pages/Orbits'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { colors, CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const rockBitTheme = createMuiTheme({
  palette: {
    primary: colors.blueGrey,
    secondary: colors.green,
  },
})

const App = () => {
  return (
    <MuiThemeProvider theme={rockBitTheme}>
      <CssBaseline>
        <Router>
            <Route path='/' exact component={Launches} />
            <Route exact path='/orbits' component={Orbits} />
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  )
}

export default App