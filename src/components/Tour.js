import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p>
        {showInfo ? info : `${info.substring(0, 200)}...`}
        <button onClick={toggleInfo}>
          {showInfo ? 'Show less' : 'Read more'}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </article>
  );
};

export default Tour;
