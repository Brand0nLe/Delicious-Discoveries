import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';

interface Restaurant {
  id: string;
  name: string;
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
      <Container>
        <Row>
          {bookmarks.map((restaurant) => (
            <Col key={restaurant.id} lg={4} md={6} sm={12}>
              <RestaurantCard
                restaurant={restaurant}
                onBookmark={handleUnbookmark}
                showBookmark={false} // Optional: To hide bookmark button in BookmarkPage
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default BookmarkPage;
