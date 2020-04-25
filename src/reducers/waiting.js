import {SET_WAITING} from '../actions/types'

const waitingReducer = (state = {from: false, to: false}, action) => {
  switch(action.type) {
    case SET_WAITING:
      var obj = {...state}
      obj[action.payload.type] = action.payload.waiting
      return obj
    default:
      return state
  }
}

export default waitingReducer
