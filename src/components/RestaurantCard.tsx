import React from 'react';

interface Restaurant {
  id: string;
  name: string;
  // Add other properties...
}

interface Props {
  restaurant: Restaurant;
  onBookmark: (restaurant: Restaurant) => void;
  showBookmark: boolean;
}

const RestaurantCard: React.FC<Props> = ({ restaurant, onBookmark, showBookmark }) => {
  const handleBookmarkClick = () => {
    onBookmark(restaurant);
  };

  return (
    <div>
      <h2>{restaurant.name}</h2>
      {/* Display other restaurant information here */}
      {showBookmark && (
        <button onClick={handleBookmarkClick}>
          Bookmark
        </button>
      )}
    </div>
  );
};

export default RestaurantCard;
