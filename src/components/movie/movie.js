import React from 'react';
import './movie.css';

const Movie = (props) => {
  let movie = props.movie;
  let listEpisodeId = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI'];

  return (
    <>
      <div className='movie'>
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
