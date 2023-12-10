import React from 'react';
import TicketCard from './TicketCard';
import '../styles/KanbanBoard.css';

const UserGroup = ({ tickets, users }) => {
  // Function to get the tickets for a specific user
  const getTicketsForUser = (userId) => {
    return tickets.filter(ticket => ticket.userId === userId);
  };

  // Create an object to hold the count of tickets per user
  const ticketCountByUser = users.reduce((countObj, user) => {
    countObj[user.id] = getTicketsForUser(user.id).length;
    return countObj;
  }, {});

  return (
    <div className="kanban-board">
      {users.map((user) => (
        <div key={user.id} className="column">
          {/* Display user name and ticket count */}
          <h2 className="column-header">{user.name} ({ticketCountByUser[user.id]})</h2>
          {getTicketsForUser(user.id).map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserGroup;
