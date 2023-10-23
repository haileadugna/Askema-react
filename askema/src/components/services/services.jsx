import React, { useState, useEffect } from 'react';
import './service.css'


const CardRotator = ({ cards }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    // Initially, show the first three cards
    setVisibleCards(cards.slice(0, 3));
    const interval = setInterval(() => {
      // Rotate cards every 5 seconds
      const nextIndex = (currentCardIndex + 1) % cards.length;
      setVisibleCards([cards[nextIndex]]);
      setCurrentCardIndex(nextIndex);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [cards, currentCardIndex]);

  return (
    <div className="about">
      <div className="content">
        <div className="box">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className={`card ${index === 0 ? 'large' : ''}`}
            >
              <img src={card.image} alt="" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardRotator;
