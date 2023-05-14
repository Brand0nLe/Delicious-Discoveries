import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookmarkPage from './components/BookmarkPage';

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/bookmarks" Component={BookmarkPage} />
      <Route path="/" Component={HomePage} />
    </Router>
  );
};

export default Routes;