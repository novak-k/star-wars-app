import React from 'react';
import { useSelector } from 'react-redux'
import './movieDescription.css';

const MovieDescription = () => {
  let listEpisodeId = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI'];
  const description = useSelector((state) => state.movies.selected);

  if (description === undefined || description === null || description === '') {
  return (
    <div className='noMovieText'>No movie selected</div>
  );
  }

  return (
    <>
      <div className='descriptionHeading'>
        <div className='episodeId'>
          Episode {listEpisodeId[description.episode_id]} - 
        </div>
        <div className='movieTitle'> {description.title}</div>
      </div>
      <div className='movieDescription'>{description.opening_crawl}</div>
      <div className='movieDirector'>Directed by: {description.director}</div>
    </>
  );
};

export default MovieDescription;
