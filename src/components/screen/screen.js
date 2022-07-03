import React from 'react';
import { useSelector } from 'react-redux'
import Header from '../header/header';
import Movie from '../movie/movie';
import MovieDescription from '../movieDescription';
import './screen.css';

const Screen = () => {
  const movieData = useSelector((state) => state.movies.data);
  let movieList = [];
  if (movieData.results !== undefined) {
    for (let i = 0; i < movieData.results.length; i++) {
      movieList.push(<Movie key={i} movie={movieData.results[i]} />);
    }
  }
    return (
      <div className='screen'>
        <div className='header'>
          <Header/>
        </div>
        <div className='about'>
          <div className='movie-container'>
          {movieList}
          </div>
          <div className='description'>
            <MovieDescription/>
          </div>
        </div>
      </div>
    );
};

export default Screen;
