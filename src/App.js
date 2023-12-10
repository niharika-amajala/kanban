import React from 'react';
import KanbanBoard from './components/KanbanBoard';
// import PriorityGroup from './components/PriorityGroup';
// import StatusGroup from './components/StatusGroup';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <KanbanBoard/>
    </div>
  );
}

export default App;
