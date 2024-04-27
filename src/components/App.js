// App.js
import React, { useState, useEffect } from 'react';
import Tours from './Tours';
import Loading from './Loading';
import toursData from './toursData.json';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(toursData);
    setLoading(false);
  }, []);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  return (
    <div id="main">
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div>
          <p>No tours left</p>
          <button onClick={() => setTours(toursData)}>Refresh</button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
};

export default App;
