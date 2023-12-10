import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../api/api';
import TicketCard from './TicketCard';
import '../styles/KanbanBoard.css';

const TitleGroup = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTickets();
      // Sort tickets by title in ascending order
      const sortedTickets = data.tickets.sort((a, b) => a.title.localeCompare(b.title));
      setTickets(sortedTickets);
    };
    fetchData();
  }, []);

  return (
    <div className="kanban-board">
      <div className="column">
        <h2 className="column-header">Title</h2>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TitleGroup;
