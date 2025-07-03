import React, { useState } from 'react';
import { FaTicketAlt, FaHeart, FaMusic, } from 'react-icons/fa';
import { GiTheaterCurtains, GiFilmProjector } from 'react-icons/gi';
import { motion } from 'framer-motion';
import BookingModal from '../components/BookingModel';
import '../Home.css';

const BookItUpHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = {
    movies: [
      {
        id: 1,
        title: "The Midnight Adventure",
        description: "A thrilling heist under the neon lights of Tokyo",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
        date: "Today, 8:30 PM",
        venue: "PVR Cinemas",
        price: 129,
        timings: ["6:00 PM", "8:30 PM", "10:00 PM"]
      },
      {
        id: 2,
        title: "Romance in Paris",
        description: "Love story at the Eiffel Tower's centennial celebration",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9",
        date: "Tomorrow, 7:00 PM",
        venue: "INOX City Center",
        price: 109,
        timings: ["5:00 PM", "7:00 PM", "9:30 PM"]
      }
    ],
    music: [
      {
        id: 3,
        title: "Jazz Under the Stars",
        description: "Open-air concert with Grammy-winning artists",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
        date: "Fri, Jun 10",
        venue: "Phoenix Amphitheatre",
        price: 350,
        timings: ["7:00 PM"]
      }
    ]
  };

  const filteredEvents = activeCategory === 'all'
    ? [...events.movies, ...events.music]
    : events[activeCategory];

  const categories = [
    { id: 'all', name: 'All Events', icon: <GiTheaterCurtains /> },
    { id: 'movies', name: 'Movies', icon: <GiFilmProjector /> },
    { id: 'music', name: 'Music', icon: <FaMusic /> }
  ];

  return (
    <div className="bookitup-container">
      <header className="hero">
        <GiTheaterCurtains className="hero-icon" />
        <h1>BookItUp</h1>
        <p>Discover amazing events happening near you</p>
        <motion.button whileHover={{ scale: 1.05 }} className="explore-btn">
          <FaTicketAlt /> Explore Events
        </motion.button>
      </header>

      <nav className="category-nav">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={activeCategory === category.id ? 'category-btn active' : 'category-btn'}>
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </nav>

      <main className="event-grid">
        {filteredEvents.map(event => (
          <motion.div key={event.id} whileHover={{ y: -5 }} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="event-meta">
                <span>{event.date}</span>
                <strong>Rs {event.price}</strong>
              </div>
              <div className="event-actions">
                <button className="book-btn" onClick={() => setSelectedEvent(event)}>Book Now</button>
                <button className="fav-btn"><FaHeart /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      {selectedEvent && (
        <BookingModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      
    </div>
  );
};

export default BookItUpHome;
