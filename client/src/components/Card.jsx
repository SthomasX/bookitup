import React, { useState } from 'react';
import BookingModal from './BookingModel';
import '../App.css';

const Card = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="card"
        onClick={() => setShowModal(true)}
      >
        <img 
          src={event.image} 
          alt={event.title} 
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">{event.title}</h3>
          <p className="card-venue">{event.venue}</p>
          <p className="card-date">{event.date}</p>
          <p className="card-price">From ${event.price.toFixed(2)}</p>
        </div>
      </div>
      
      {showModal && (
        <BookingModal 
          event={event} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

export default Card;