const searchReducer = (state = '', action) => {
  switch(action.type) {
    case 'SEARCH':
      return action.payload.string
    default:
      return state
  }
}

export default searchReducer
