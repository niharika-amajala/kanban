import React from 'react';
import TicketCard from './TicketCard';
import '../styles/KanbanBoard.css';

// Priorities are already defined as an array of objects
const priorities = [
  { name: 'Urgent', level: 4 },
  { name: 'High', level: 3 },
  { name: 'Medium', level: 2 },
  { name: 'Low', level: 1 },
  { name: 'No priority', level: 0 }
];

const PriorityGroup = ({ tickets }) => {
  // Function to filter tickets based on the priority level
  const getTicketsByPriority = (priorityLevel) => {
    return tickets.filter(ticket => ticket.priority === priorityLevel);
  };

  // Calculate the count of tickets for each priority
  const ticketCountByPriority = priorities.reduce((countObj, priority) => {
    countObj[priority.level] = getTicketsByPriority(priority.level).length;
    return countObj;
  }, {});

  return (
    <div className="kanban-board">
      {priorities.map((priority) => (
        <div key={priority.level} className="column">
          {/* Display priority name and ticket count */}
          <h2 className="column-header">{priority.name} ({ticketCountByPriority[priority.level]})</h2>
          {getTicketsByPriority(priority.level).map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PriorityGroup;
