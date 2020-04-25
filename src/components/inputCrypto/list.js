import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import Item from './listItem'

import './list.sass'

const List = ({type, toggleExpand}) => {
  const currencies = useSelector(state => state.currencies)

  return(
    <ul styleName='list'>
      {currencies.map(currency =>
        <Item currency={currency} type={type} toggleExpand={toggleExpand} key={currency.symbol}/>)
      }
    </ul>
  )
}

export default List
