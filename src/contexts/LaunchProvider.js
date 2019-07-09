import React, { createContext, useReducer } from 'react'

export const LaunchContext = createContext()

const reducer = (state, action) => {
  console.log('Launch Filter State: ', state)
  console.log('Launch Filter Action: ', action)
  switch (action.type) {
    case 'changeFilterDateRange':
      return {
        ...state,
        filterDateRange: [...action.filterDateRange],
      }

    default:
      throw new Error()
  }
}

export const changeFilterDateRange = filterDateRange => {
  return {
    type: 'changeFilterDateRange',
    filterDateRange,
  }
}

const LaunchProvider = props => {
  const initialState = {
    filterDateRange: [2006, 2020],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LaunchContext.Provider value={[state, dispatch]}>
      {props.children}
    </LaunchContext.Provider>
  )
}

export default LaunchProvider
