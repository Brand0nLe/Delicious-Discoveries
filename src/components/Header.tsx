import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Add theme switching logic here.

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/bookmarks">Bookmarks</Link>
        // Add theme selector here.
      </nav>
    </header>
  );
};

export default Header;