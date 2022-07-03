import React from 'react';
import { useDispatch } from 'react-redux';
import { search, sortEpisode, sortYear } from "../../store/moviesSlice";
import './header.css';

const Header = () => {

  const dispatch = useDispatch();
  const onMovieSearch=(event) => {
    dispatch(search(event.target.value))
  }
  const onEpisodeSort=(event) => {
    dispatch(sortEpisode())
  }
  const onYearSort=(event) => {
    dispatch(sortYear())
  }

    return (
        <>
          <div className="dropdown">
            <button 
              className="btn btn-secondary dropdown-toggle" 
              type="button" 
              id="dropdownMenuButton" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
            Sort by
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div 
                className="dropdown-item" 
                onClick={onEpisodeSort}>
              Episode
              </div>
              <div 
                className="dropdown-item"
                onClick={onYearSort}>
              Year
              </div>
            </div>
          </div>
        
           <div className="input-group rounded">
            <input 
              type="search" 
              onChange={onMovieSearch}
              className="form-control py-2 border-right-0 border" 
              placeholder="Type to search..."
            />
            <span className="input-group-append">
              <button 
                className="btn btn-outline-secondary border-left-0 border" type="button">
                <i className="fas fa-search"></i>
              </button>
            </span>
          </div>
        </>
    );
};

export default Header;
