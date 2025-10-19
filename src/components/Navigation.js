import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          🎬 Movie Explorer
        </div>
        <div className="nav-links">
          <a href="#movies">Movies</a>
          <a href="#tv">TV Shows</a>
          <a href="#about">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
