import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';
import SearchBar from './SearchBar';
import Header from './Header';

interface Restaurant {
  id: string;
  name: string;
  // Add other properties...
}

interface UpdatedRestaurant extends Restaurant {
  bookmarked: boolean;
}

const HomePage: React.FC = () => {
  const [results, setResults] = useState<UpdatedRestaurant[]>([]);

  const handleSearch = (newResults: Restaurant[]) => {
    const updatedResults = newResults.map((restaurant) => ({
      ...restaurant,
      bookmarked: false,
    }));
    setResults(updatedResults);
  };

  const handleBookmark = (restaurant: Restaurant) => {
    const updatedResults = results.map((res) => {
      if (res.id === restaurant.id) {
        return {
          ...res,
          bookmarked: !res.bookmarked,
        };
      }
      return res;
    });
    setResults(updatedResults);
  };

  return (
    <main>
      <Container>
        <Header/>
        <SearchBar onSearch={handleSearch} />
        <Row>
          {results.map((restaurant) => (
            <Col lg={4} md={6} sm={12} key={restaurant.id}>
              <RestaurantCard
                restaurant={restaurant}
                onBookmark={handleBookmark}
                showBookmark={true}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default HomePage;
