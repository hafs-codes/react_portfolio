// API.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        setData(response.data.value);
      } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Chuck Norris Joke from API Component:</h2>
      <p>{data}</p>
    </div>
  );
};

export default API;
