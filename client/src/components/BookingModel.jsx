import React, { useState } from 'react';
import '../App.css';

const BookingModal = ({ event, onClose }) => {
  const [tickets, setTickets] = useState(1);
  const [seatType, setSeatType] = useState('gold');
  const [selectedTime, setSelectedTime] = useState(event.timings[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      event: event.title,
      tickets,
      seatType,
      time: selectedTime,
      total: (tickets * getSeatPrice(seatType, event.price)).toFixed(2)
    });
    onClose();
  };

  const getSeatPrice = (type, basePrice) => {
    switch(type) {
      case 'gold': return basePrice * 1.5;
      case 'silver': return basePrice * 1.2;
      case 'bronze': return basePrice;
      default: return basePrice;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Book Tickets</h2>
          <button onClick={onClose} className="modal-close">
            &times;
          </button>
        </div>
        
        <div className="modal-body">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-details">{event.venue} - {event.date}</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Number of Tickets</label>
              <input 
                type="number" 
                min="1" 
                max="10" 
                value={tickets}
                onChange={(e) => setTickets(parseInt(e.target.value))}
                className="form-control"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Seat Type</label>
              <select 
                value={seatType}
                onChange={(e) => setSeatType(e.target.value)}
                className="form-control"
              >
                <option value="gold">Gold (Rs {(event.price * 1.5).toFixed(2)})</option>
                <option value="silver">Silver (Rs {(event.price * 1.2).toFixed(2)})</option>
                <option value="bronze">Bronze (Rs {event.price.toFixed(2)})</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Timing</label>
              <select 
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="form-control"
              >
                {event.timings.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            
            <div className="total-price">
              Total: Rs {(tickets * getSeatPrice(seatType, event.price)).toFixed(2)}
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;