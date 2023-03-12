import React from 'react';
import { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
import SearchBox from './Components/SearchBox';


function App() {
  const [movie, setMovie]  = useState([])
  const [searchMovie, setSearchMovie] = useState('')

  const getMovieRequest = async (searchMovie) => {
		const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=ca9dd405`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovie(responseJson.Search);
		}
	};

  useEffect(() => {
		getMovieRequest(searchMovie);
	}, [searchMovie]);

  
  return (
    <div className='p-[3rem] h-full justify-center items-center flex-col flex flex-wrap'>
      <h1 className='text-[3rem] spacing-[0.6rem] text-white font-bold w-fit'>Movie App</h1>
      <SearchBox searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      <MovieList movie={movie}/>
    </div>
  );
}

export default App;
