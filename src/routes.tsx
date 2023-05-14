import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookmarkPage from './components/BookmarkPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/bookmarks" component={BookmarkPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;