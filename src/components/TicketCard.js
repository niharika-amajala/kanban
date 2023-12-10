import React from 'react';
import '../styles/TicketCard.css'; // Make sure to import the CSS file

const TicketCard = ({ ticket }) => {
  // Convert tag array to string classes
  const tagClasses = ticket.tag.map((tagItem) => 
    `tag ${tagItem.toLowerCase().replace(/\s+/g, '-')}`
  ).join(' ');

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {/* Assuming the first tag is the primary one for styling */}
        <span className={tagClasses}>
          {ticket.name} {/* Displaying only the first tag */}
        </span>
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      {/* Additional details can go here */}
    </div>
  );
};

export default TicketCard;
