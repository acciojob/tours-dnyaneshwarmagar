// Tour.js
import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleInfo = () => {
    setShowAll(!showAll);
  };

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p id={`tour-item-para-${id}`}>
        {showAll ? info : `${info.substring(0, 200)}...`}
        <button onClick={toggleInfo} id={`see-more-${id}`}>
          {showAll ? 'Show less' : 'See more'}
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
