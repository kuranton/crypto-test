import {SET_EXCHANGE_AMOUNT, GET_ESTIMATE, TOGGLE_ERROR} from '../actions/types'

const exchangeReducer = (state = {amount: 0, estimate: 0, error: false}, action) => {
  const {payload} = action
  switch(action.type) {
    case SET_EXCHANGE_AMOUNT:
      return {...state, amount: payload.amount}
    case GET_ESTIMATE:
      return {...state, estimate: payload.estimate}
    case TOGGLE_ERROR:
      return {...state, error: payload.error}
    default:
      return state
  }
}

export default exchangeReducer
