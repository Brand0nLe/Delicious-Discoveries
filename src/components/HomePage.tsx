import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import SearchBar from './SearchBar';

const HomePage = () => {
    const [results, setResults] = useState([]);
  
    const handleSearch = (newResults) => {
      setResults(newResults);
    };
  
    return (
      <main>
        <SearchBar onSearch={handleSearch} />
        <div>
          {results.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onBookmark={/* Implement bookmarking logic here. */}
            />
          ))}
        </div>
      </main>
    );
  };
  
  export default HomePage;
  