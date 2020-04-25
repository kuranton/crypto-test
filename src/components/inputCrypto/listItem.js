import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeCurrency} from '../../actions'

import './list.sass'

const mapStateToProps = (state, ownProps) => ({
  isSelected: state.select[ownProps.type] === ownProps.currency.symbol
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  select: async () => {
    ownProps.toggleExpand(false)
    dispatch(changeCurrency(ownProps.currency.symbol, ownProps.type))
  }
})

const Item = ({currency, select, isSelected}) => {
  return(
    <li styleName={`item${isSelected ? ' selected' : ''}`} value={currency.symbol} onClick={select}>
      <img styleName='icon' src={'https://simpleswap.io' + currency.image} alt={currency.name}/>
      <span styleName='symbol'>{currency.symbol}</span>
      <span styleName='name'>{currency.name}</span>
    </li>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
