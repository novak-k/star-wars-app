import React from 'react';
import './header.css';


const Header = () => {
    return (
        <>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Sort by
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="https://www.google.com/">Episode</a>
              <a className="dropdown-item" href="https://www.youtube.com/">Year</a>
            </div>
          </div>
        
          <div className="input-group rounded">
             <input type="search" className="form-control rounded searchImg" placeholder="Type to search..." aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
            </span>
          </div>
        </>
    );
};

export default Header;