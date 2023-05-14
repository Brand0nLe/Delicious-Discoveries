import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookmarkPage from './components/BookmarkPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/bookmarks" element={<BookmarkPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;