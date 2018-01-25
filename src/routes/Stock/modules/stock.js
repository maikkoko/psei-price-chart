import getStockData from 'lib/api'

/*
 * Action Types
 */

const FETCHING_STOCK_DATA = 'FETCHING_STOCK_DATA'
const FETCHING_STOCK_DATA_SUCCESS = 'FETCHING_STOCK_DATA_SUCCESS'
const FETCHING_STOCK_DATA_FAILED = 'FETCHING_STOCK_DATA_FAILED'

/*
 * Actions
 */

export const fetchStockData = symbol => {
  return dispatch => {
    dispatch({ type: FETCHING_STOCK_DATA })

    return getStockData(symbol)
      .then(response => {
        dispatch({ type: FETCHING_STOCK_DATA_SUCCESS, payload: response })
      })
      .catch(error => {
        // no-op
      })
  }
}

/*
 * State
 */

const initialState = {
  isFetching: true, // Set initial state to loading
  data: null,
  hasError: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_STOCK_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: false
      })

    case FETCHING_STOCK_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: false
      })

    case FETCHING_STOCK_DATA_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        hasError: true,
        errorMessage: action.payload
      })

    default:
      return state
  }
}
