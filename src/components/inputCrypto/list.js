import React from 'react'

import Item from './listItem'

import './list.sass'

const List = ({type, toggleExpand, currencies}) => (
  <ul styleName='list'>
    {currencies.map(currency =>
      <Item currency={currency} type={type} toggleExpand={toggleExpand} key={currency.symbol}/>)
    }
  </ul>
)


export default List
