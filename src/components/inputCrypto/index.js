import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchEstimate, setExchangeAmount} from '../../actions'

import Label from './label'
import List from './list'

import './inputCrypto.sass'

const mapStateToProps = (state, ownProps) => {
  let amount = 0
  if (ownProps.type === 'from') {
    amount = state.exchange.amount
  }
  if (ownProps.type === 'to') {
    amount = state.exchange.estimate
  }
  return({
    selected: state.select[ownProps.type],
    currencies: state.currencies,
    loading: state.waiting[ownProps.type],
    amount
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeAmount: (e) => {
    dispatch(setExchangeAmount(e.target.value))
    dispatch(fetchEstimate())
  }
})

const Input = ({type, selected, currencies, amount, changeAmount, loading}) => {
  const [expand, toggleExpand] = useState(false);
  const currency = currencies.length ? currencies.filter(curr => curr.symbol === selected)[0] : {}
  const disabled = type === 'to' && amount === null

  const styleName = `wrap${expand ? ' expand' : ''}${loading ? ' loading' : ''}`

  return(
    <div styleName={styleName}>
      {disabled
        ? <input styleName='input' type='text' value={'-'} disabled/>
        : <input styleName='input' type='number' value={amount} onChange={changeAmount} disabled={type === 'to'}/>
      }
      <div styleName='label' onClick={() => toggleExpand(!expand)}>
        <img styleName='icon' src={`https://simpleswap.io${currency.image}`} alt={currency.name}/>
        <span styleName='symbol'>{currency.symbol}</span>
      </div>

      {expand && <List type={type} toggleExpand={toggleExpand}/>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
