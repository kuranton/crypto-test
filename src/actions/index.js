import * as types from './types'

export const search = string => ({
  type: types.SEARCH_CURRENCIES,
  payload: {
    string
  }
})

export const receiveCurrencies = (currencies) => ({
  type: types.RECEIVE_CURRENCIES,
  payload: {
    currencies
  }
})

export const selectCurrency = (currency, field) => ({
  type: types.SELECT_CURRENCY,
  payload: {
    currency,
    field
  }
})

export const setExchangeAmount = (amount) => ({
  type: types.SET_EXCHANGE_AMOUNT,
  payload: {
    amount
  }
})

export const getEstimate = (estimate) => ({
  type: types.GET_ESTIMATE,
  payload: {
    estimate
  }
})

export const setWaiting = (type, waiting) => ({
  type: types.SET_WAITING,
  payload: {
    type,
    waiting
  }
})

export const showError = (error) => ({
  type: types.TOGGLE_ERROR,
  payload: {
    error
  }
})

export const changeCurrency = (currency, field) => async (dispatch, getState) => {
  dispatch(selectCurrency(currency, field))
  const {min} = await dispatch(fetchMinimalExchangeAmount())
  const estimate = await dispatch(fetchEstimate())
  if (min === null || estimate === null) {
    dispatch(showError())
  }
  dispatch(setWaiting(false))
}

export const fetchMinimalExchangeAmount = () => async (dispatch, getState) => {
  dispatch(setWaiting('from', true))
  const {from, to} = getState().select
  const api_key = localStorage.getItem('api_key')
  let data = {}
  try {
    const response = await fetch(`https://api.simpleswap.io/v1/get_ranges?api_key=${api_key}&currency_from=${from}&currency_to=${to}`)
    data = await response.json()
    dispatch(setExchangeAmount(data.min))
  } catch (e) {
    console.log(e)
  }
  dispatch(setWaiting('from', false))
  return data.min
}

export const fetchEstimate = () => async (dispatch, getState) => {
  dispatch(setWaiting('to', true))
  const api_key = localStorage.getItem('api_key')
  const {from, to} = getState().select
  const {amount} = getState().exchange
  let data
  try {
    const response = await fetch(`https://api.simpleswap.io/v1/get_estimated?api_key=${api_key}&currency_from=${from}&currency_to=${to}&amount=${amount}`)
    data = await response.json()
    dispatch(getEstimate(data))
  } catch (e) {
    console.log(e)
  }
  dispatch(setWaiting('to', false))
  return data
}

export const fetchCurrencies = () => async dispatch => {
  const api_key = localStorage.getItem('api_key')
  try {
    const response = await fetch(`https://api.simpleswap.io/v1/get_all_currencies?api_key=${api_key}`)
    const data = await response.json()
    dispatch(receiveCurrencies(data))
    await dispatch(fetchMinimalExchangeAmount())
    dispatch(fetchEstimate())
  } catch (e) {
    console.log(e)
  }
}
