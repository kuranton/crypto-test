const currenciesReducer = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVE_CURRENCIES':
      return action.payload.currencies
    default:
      return state
  }
}

export default currenciesReducer
