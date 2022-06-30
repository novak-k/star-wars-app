import React from 'react';
import { useSelector } from 'react-redux'
import Header from '../header/header';
import Movie from '../movie/movie';
import MovieDescription from '../movieDescription/movieDescription';
import './screen.css';

const Screen = () => {
  const movieData = useSelector((state) => state.movies.value)

  const mock = {
            "title": "A New Hope", 
            "episode_id": 4,  
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
            "director": "George Lucas", 
            "release_date": "1977-05-25", 
  }

let movieList = [];
// console.log(movieData.results);
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
          {/* <Movie/> */}
          </div>
          <div className='description'>
            <MovieDescription description={mock}/>
          </div>
        </div>
      </div>
    );
};

export default Screen;