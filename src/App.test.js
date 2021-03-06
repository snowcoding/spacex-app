import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Apollo from './components/Apollo/Apollo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Apollo>
      <App />
    </Apollo>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
