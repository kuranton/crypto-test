import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import InputCrypto from '../inputCrypto'
import InputAddress from '../inputAddress'

import './form.sass'

const Form = () => {
  const error = useSelector(state => state.exchange.error)

  return(
    <form styleName='form' onSubmit={e => e.preventDefault()}>
      <header styleName='header'>
        <h1 styleName='title'>Crypto Exchange</h1>
        <p styleName='tagline'>Exchange fast and easy</p>
      </header>
      {error && <p styleName='error'>this pair is disabled now</p>}
      <div styleName='row'>
        <InputCrypto type='from'/>
        <InputCrypto type='to'/>
      </div>
      <div styleName='row'>
        <InputAddress/>
        <button type='submit' styleName='submit'>Exchange</button>
      </div>
    </form>
  )
}

export default Form
