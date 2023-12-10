import React, { useState, useEffect } from 'react';
import PriorityGroup from './PriorityGroup';
import { fetchTickets } from '../api/api';
import TicketCard from './TicketCard';
import StatusGroup from './StatusGroup';
import UserGroup from './UserGroup'; // Assuming you have a UserGroup component
import TitleGroup from './TitleGroup'; // Assuming you have a TitleGroup component
import '../styles/KanbanBoard.css';

const Kanban = () => {
  
  const [displayMode, setDisplayMode] = useState('priority'); // Grouping mode
  const [orderMode, setOrderMode] = useState('priority'); // Ordering mode
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch tickets and set initial state
    const fetchData = async () => {
      const data = await fetchTickets();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    fetchData();
  }, []);

  const handleGroupingChange = (event) => {
    setDisplayMode(event.target.value);
  };

  const handleOrderingChange = (event) => {
    setOrderMode(event.target.value);
  };

  // You can define sorting functions based on priority and title
  const sortByPriority = (a, b) => b.priority - a.priority;
  const sortByTitle = (a, b) => a.title.localeCompare(b.title);
  const [showOptions, setShowOptions] = useState(false);
  // Apply the sorting to tickets
  const getSortedTickets = () => {
    let sortedTickets = [...tickets];
    if (orderMode === 'priority') {
      sortedTickets.sort(sortByPriority);
    } else if (orderMode === 'title') {
      sortedTickets.sort(sortByTitle);
    }
    return sortedTickets;
  };

  const sortedTickets = getSortedTickets();
  const toggleDisplayOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div>
       <div className="display-controls">
        <button onClick={toggleDisplayOptions}>
          {showOptions ? 'Hide Options' : 'Display'}
        </button>
        {showOptions && (
          <div className="display-options">
            <select onChange={handleGroupingChange} value={displayMode}>
              <option value="priority">Priority</option>
              <option value="user">User</option>
              <option value="status">Status</option>
            </select>
            <select onChange={handleOrderingChange} value={orderMode}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        )}
      </div>
      {displayMode === 'priority' && <PriorityGroup tickets={sortedTickets} />}
      {displayMode === 'user' && <UserGroup tickets={sortedTickets} users={users}/>}
      {displayMode === 'status' && <StatusGroup tickets={sortedTickets} />}
      {displayMode === 'title' && <TitleGroup tickets={sortedTickets} />}
    </div>
  );
};

export default Kanban;
