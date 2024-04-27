import React, { useState, useEffect } from 'react';
import Tours from './Tours';
import Loading from './Loading';
import toursData from './toursData.json'; // Import the tour data

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(toursData); // Set tours data from the JSON file
    setLoading(false);
  }, []);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const refreshTours = () => {
    setTours(toursData); // Reset tours data from the JSON file
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div>
        <p>No tours left</p>
        <button onClick={refreshTours}>Refresh</button>
      </div>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />;
};

export default App;
