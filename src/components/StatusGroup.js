import React from 'react';
import TicketCard from './TicketCard';
import '../styles/KanbanBoard.css';

const StatusGroup = ({ tickets }) => {
  // Define the status categories
  const statusCategories = ['Backlog', 'Todo', 'In progress', 'Done', 'Completed'];

  // Function to get the tickets for a specific status
  const getTicketsForStatus = (status) => {
    return tickets.filter(ticket => ticket.status === status);
  };

  // Create an object to hold the count of tickets per status
  const ticketCountByStatus = statusCategories.reduce((countObj, status) => {
    countObj[status] = getTicketsForStatus(status).length;
    return countObj;
  }, {});

  return (
    <div className="kanban-board">
      {statusCategories.map((status) => (
        <div key={status} className="column">
          <h2 className="column-header">{status} ({ticketCountByStatus[status]})</h2>
          {getTicketsForStatus(status).map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default StatusGroup;
