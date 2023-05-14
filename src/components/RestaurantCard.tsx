import React from 'react';

interface Props {
  restaurant: {
    id: string;
    name: string;
    // Add other properties...
  };
  onBookmark: (restaurant: any) => void;
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
          {restaurant.bookmarked ? 'Unbookmark' : 'Bookmark'}
        </button>
      )}
    </div>
  );
};

export default RestaurantCard;