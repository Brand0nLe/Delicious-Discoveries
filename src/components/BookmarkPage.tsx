import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import RestaurantCard from './RestaurantCard';

interface Restaurant {
  id: string;
  // Add other properties...
}

const BookmarkPage: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Restaurant[]>([]);

  useEffect(() => {
    const storedBookmarks: Restaurant[] = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(storedBookmarks);
  }, []);

  const handleUnbookmark = (restaurant: Restaurant) => {
    const updatedBookmarks = bookmarks.filter((r) => r.id !== restaurant.id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <main>
      <div>
        {bookmarks.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onBookmark={handleUnbookmark}
          />
        ))}
      </div>
    </main>
  );
};

export default BookmarkPage;
