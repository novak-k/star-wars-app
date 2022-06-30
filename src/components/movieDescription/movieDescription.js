import React from 'react';
import './movieDescription.css';

const MovieDescription = (props) => {
  let description = props.description;
  let listEpisodeId = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI'];

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
