// Tour.js
import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p>
        {showInfo ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? 'Show less' : 'Read more'}
        </button>
      </p>
      <button
        id={`delete-btn-${id}`}
        onClick={() => removeTour(id)}
        className="delete-btn"
      >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
