import React, {useEffect} from 'react'

import './search.sass'

const Search = ({value, handleChange}) => {
  return(
    <input styleName='search' type='text' placeholder='Search' value={value} onChange={handleChange}/>
  )
}

export default Search
