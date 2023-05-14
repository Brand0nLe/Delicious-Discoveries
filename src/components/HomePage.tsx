import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';
import SearchBar from './SearchBar';

interface Restaurant {
  id: string;
  // Add other properties...
}

const HomePage: React.FC = () => {
  const [results, setResults] = useState<Restaurant[]>([]);

  const handleSearch = (newResults: Restaurant[]) => {
    setResults(newResults);
  };

  const handleBookmark = (restaurant: Restaurant) => {
    // Implement bookmarking logic here.
  };

  return (
    <main>
      <Container>
        <SearchBar onSearch={handleSearch} />
        <Row>
          {results.map((restaurant) => (
            <Col lg={4} md={6} sm={12} key={restaurant.id}>
              <RestaurantCard
                restaurant={restaurant}
                onBookmark={handleBookmark}
                showBookmark={true} // Optional: To show bookmark button in HomePage
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default HomePage;
