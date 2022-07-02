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
                onClick={onEpisodeSort}>Episode</div>
              <div 
                className="dropdown-item"
                onClick={onYearSort}>Year</div>
            </div>
          </div>
        
          <div className="input-group rounded">
            <input 
              type="search" 
              onChange={onMovieSearch}
              className="form-control rounded searchImg" 
              placeholder="Type to search..." 
              aria-label="Search" 
              aria-describedby="search-addon" 
            />
            <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
            </span>
          </div>
        </>
    );
};

export default Header;
