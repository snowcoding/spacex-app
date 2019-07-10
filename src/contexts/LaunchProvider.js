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
    case 'changeFilterFailures':
      return {
        ...state,
        filterFailures: action.filterFailures,
      }
    case 'changePayload':
      return {
        ...state,
        payload: {
          ...state.payload,
          [action.payloadType]: action.payloadValue,
        },
      }
    case 'changePayloadWeight':
      return {
        ...state,
        payloadWeight: action.payloadWeightValue,
      }
    case 'changeLaunchesPerPage':
      return {
        ...state,
        launchesPerPage: action.launchesPerPage,
      }

    case 'changeLaunchSort':
      return {
        ...state,
        launchSort: action.launchSort,
      }

    case 'changeLaunchCardDetails':
      return {
        ...state,
        cardId: action.cardId,
      }

      case 'changeFilterCountries':
      return {
        ...state,
        countries: action.countries === null ? [] : [...action.countries],
      }  

      case 'changePaginationPage':
      return {
        ...state,
        paginationPage: action.paginationPage
      }  

    default:
      throw new Error()
  }
}

export const changePayload = (payloadType, payloadValue) => {
  return {
    type: 'changePayload',
    payloadType,
    payloadValue,
  }
}

export const changeFilterFailures = filterFailures => {
  return {
    type: 'changeFilterFailures',
    filterFailures,
  }
}

export const changeFilterDateRange = filterDateRange => {
  return {
    type: 'changeFilterDateRange',
    filterDateRange,
  }
}

export const changePayloadWeight = payloadWeightValue => {
  return {
    type: 'changePayloadWeight',
    payloadWeightValue,
  }
}

export const changeLaunchesPerPage = launchesPerPage => {
  return {
    type: 'changeLaunchesPerPage',
    launchesPerPage,
  }
}

export const changeLaunchSort = launchSort => {
  return {
    type: 'changeLaunchSort',
    launchSort,
  }
}

export const changeLaunchCardDetails = cardId => {
  return {
    type: 'changeLaunchCardDetails',
    cardId,
  }
}

export const changeFilterCountries = countries => {
  return {
    type: 'changeFilterCountries',
    countries,
  }
}

export const changePaginationPage = paginationPage => {
  return {
    type: 'changePaginationPage',
    paginationPage,
  }
}

const LaunchProvider = props => {
  const initialState = {
    filterDateRange: [2006, 2020],
    filterFailures: false,
    payload: { satellite: true, dragon: true },
    payloadWeight: 4,
    launchesPerPage: 8,
    launchSort: '',
    cardId: 0,
    countries: [],
    paginationPage:0,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LaunchContext.Provider value={[state, dispatch]}>
      {props.children}
    </LaunchContext.Provider>
  )
}

export default LaunchProvider
