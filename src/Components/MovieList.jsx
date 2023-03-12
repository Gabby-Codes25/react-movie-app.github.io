import React from 'react'

const MovieList = ({movie}) => {
  return (
    <div >
    <div className='text-center flex justify-center'>
      <div className='grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2  gap-4 rounded shadow-lg cursor-pointer mb-5 '>
      {movie.map((movie, index) => (
        <div key={index}>
          <p className='text-white'>{movie.Year}</p>
          <img 
          className='rounded-t'
          src={movie.Poster} alt={movie.Title} />
          <div className='text-white'>
          <h2 className='text-white px-2 py-3'>{movie.Title}</h2>
          <p>{movie.Type}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  )
}

export default MovieList