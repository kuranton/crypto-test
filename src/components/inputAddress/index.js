import React from 'react'

import './inputAddress.sass'

const Input = (type) => {
  return(
    <div styleName='wrap'>
      <label styleName='label' htmlFor='address'>Your address</label>
      <input styleName='input' type='text' name='address'/>
    </div>
  )
}

export default Input
