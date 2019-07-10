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

    case 'changePaginationOffset':
      return {
        ...state,
        paginationOffset: action.paginationOffset,
      }

    case 'changeLaunchCardDetails':
      return {
        ...state,
        cardId: action.cardId,
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

export const changePaginationOffset = paginationOffset => {
  return {
    type: 'changePaginationOffset',
    paginationOffset,
  }
}

export const changeLaunchCardDetails = cardId => {
  return {
    type: 'changeLaunchCardDetails',
    cardId,
  }
}

const LaunchProvider = props => {
  const initialState = {
    filterDateRange: [2006, 2020],
    filterFailures: false,
    payload: { satellite: true, dragon: true },
    payloadWeight: 4,
    launchesPerPage: 0,
    launchSort: '',
    paginationOffset: 0,
    cardId: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LaunchContext.Provider value={[state, dispatch]}>
      {props.children}
    </LaunchContext.Provider>
  )
}

export default LaunchProvider
