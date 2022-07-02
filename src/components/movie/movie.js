import React from 'react';
import { useDispatch } from 'react-redux';
import { movieSelected } from "../../store/moviesSlice";
import './movie.css';

const Movie = (props) => {
  let movie = props.movie;
  let listEpisodeId = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI'];

  const dispatch = useDispatch();
  const onMovieSelected=() => {
    dispatch(movieSelected(movie.episode_id))
  }

  return (
    <>
      <div className='movie' onClick={onMovieSelected}>
        <div className='episodeNum'>EPISODE {movie.episode_id}</div>
        <div className='descriptionMovie'>
          <div className='episodeId'>
            Episode {listEpisodeId[movie.episode_id]} - 
          </div>
          <div className='movieTitle'> {movie.title}</div>
        </div>
        <div className='movieRelease'>{movie.release_date}</div>
        </div>
      </>
  );
};

export default Movie;
