import {SELECT_CURRENCY} from '../actions/types'

const selectReducer = (state = {from: 'btc', to: 'eth'}, action) => {
  switch(action.type) {
    case SELECT_CURRENCY:
      var obj = {...state}
      obj[action.payload.field] = action.payload.currency
      return obj
    default:
      return state
  }
}

export default selectReducer
