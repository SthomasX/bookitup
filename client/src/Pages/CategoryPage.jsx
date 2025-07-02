import React from 'react';
import Card from '../components/Card';
import eventsData from '../eventsData.json';
import '../App.css';

const CategoryPage = ({ category }) => {
  const events = eventsData[category] || [];

  return (
    <div className="category-page">
      <div className="container">
        <h1 className="page-title">{category} Events</h1>
        
        {events.length === 0 ? (
          <p className="no-events">No events found in this category.</p>
        ) : (
          <div className="events-grid">
            {events.map((event) => (
              <Card key={`${category}-${event.id}`} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;