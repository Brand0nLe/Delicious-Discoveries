import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookmarkPage from './components/BookmarkPage';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" Component={HomePage} />
      <Route path="/bookmarks" Component={BookmarkPage} />
    </Router>
  );
};

export default App;