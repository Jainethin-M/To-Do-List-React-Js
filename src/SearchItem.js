import React from 'react'

const SearchItem = ({search,setSearch}) => {


  return (
    <form className='search-item' name='search-item'>
      <label htmlFor="search-item">SearchItem</label>
      <input 
        type="text" 
        id="search-item" 
        placeholder='search'
        onChange={(e)=>setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItem