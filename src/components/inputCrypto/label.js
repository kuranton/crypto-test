import React from 'react'

import './inputCrypto.sass'

const Label = ({currency, toggleExpand}) => (
  <div styleName='label' onFocus={() => toggleExpand(true)}>
    <img styleName='icon' src={`https://simpleswap.io${currency.image}`} alt={currency.name}/>
    <span>{currency.symbol}</span>
  </div>
)

export default Label
