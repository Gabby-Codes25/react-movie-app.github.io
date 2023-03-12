import React from 'react'

const SearchBox = ({searchMovie, setSearchMovie}) => {
  return (
    <div>
      <input
      className='mx-20 my-6 border-none text-[1.5rem] font-medium pr-[1rem] outline-none text-[#a1a1a1] bg-[#1f2123]'
      placeholder='Search for movies...'
      value={searchMovie.value}
      onChange={(e) => setSearchMovie(e.target.value)} />
    </div>
  )
}

export default SearchBox