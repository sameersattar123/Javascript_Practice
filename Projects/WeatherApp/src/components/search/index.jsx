import React from 'react'

const index = ({ search, setSearch, handleSearch }) => {
  return (
    <div  className="search-engine">
      <input
      type='text'
      placeholder='Enter City Name'
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      name='search'
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default index
