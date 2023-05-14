import React from 'react';

const RestaurantCard = ({ restaurant, onBookmark }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      // Display other restaurant information here.
      <button onClick={() => onBookmark(restaurant)}>Bookmark</button>
    </div>
  );
};

export default RestaurantCard;