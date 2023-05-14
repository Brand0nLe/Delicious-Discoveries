import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const handleThemeChange = (theme: string) => {
    // Implement theme switching logic here.
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Delicious Discoveries
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bookmarks" className="nav-link">
                  Bookmarks
                </Link>
              </li>
              <li className="nav-item">
                <select
                  className="form-control"
                  onChange={(e) => handleThemeChange(e.target.value)}
                >
                  <option value="light">Light Theme</option>
                  <option value="dark">Dark Theme</option>
                  <option value="ice-cream">Ice Cream Theme</option>
                  {/* Add other theme options */}
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
