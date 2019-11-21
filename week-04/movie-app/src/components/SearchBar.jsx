import React from 'react'

const SearchBar = props => {
  const handleFormSubmit = event => {
    event.preventDefault()
    props.handleSearchClick()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="search"
        value={props.searchTerm}
        onChange={e => props.updateSearchTerm(e.target.value)}
      />
      {/* <button onClick={props.handleSearchClick}>SEARCH</button> */}
      <button type="submit">SEARCH</button>
    </form>
  )
}

export default SearchBar
