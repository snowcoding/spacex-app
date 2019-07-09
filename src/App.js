import React from 'react'
import ExploreLaunches from './pages/ExploreLaunches'
import ViewLaunches from './pages/ViewLaunches'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { colors, CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Landing from './pages/Landing';
import Header from './components/Header/Header';

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
            <Header />
            <Route path='/' exact component={Landing} />
            <Route path='/view-launches' exact component={ViewLaunches} />
            <Route exact path='/explore-launches' component={ExploreLaunches} />
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  )
}

export default App