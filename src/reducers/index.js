import currencies from './currencies'
import select from './select'
import exchange from './exchange'
import waiting from './waiting'
import {combineReducers} from 'redux'

export default combineReducers({
  currencies,
  select,
  exchange,
  waiting
})
