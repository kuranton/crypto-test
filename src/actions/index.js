import * as types from './types'

export const search = string => ({
  type: types.SEARCH_CURRENCIES,
  payload: {
    string
  }
})

export const requestCurrencies = () => ({
  type: types.REQUEST_CURRENCIES
})

export const receiveCurrencies = (currencies) => ({
  type: types.RECEIVE_CURRENCIES,
  payload: {
    currencies
  }
})


export const fetchCurrencies = () => async dispatch => {
  dispatch(requestCurrencies())
  const api_key = localStorage.getItem('api_key')
  try {
    const response = await fetch(`https://api.simpleswap.io/v1/get_all_currencies?api_key=${api_key}`)
    const data = await response.json()
    dispatch(receiveCurrencies(data))
  } catch (e) {
    console.log(e)
  }
}
