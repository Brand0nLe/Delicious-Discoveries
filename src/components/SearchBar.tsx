import React, { useState } from 'react';

interface Props {
  onSearch: (results: any[]) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=YOUR_LOCATION`,
        {
          headers: {
            Authorization: 'Bearer YOUR_YELP_API_KEY',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const results = data.businesses;
        onSearch(results);
      } else {
        console.error('Error occurred while fetching Yelp API:', response.statusText);
        onSearch([]);
      }
    } catch (error) {
      console.error('Error occurred while fetching Yelp API:', error);
      onSearch([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
