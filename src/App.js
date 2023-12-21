// App.js
import React from 'react';
import TaskForm from './TaskForm';

import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Momentum Task</h1>
      </header>
      <main>
        <TaskForm />
      
      </main>
      <Sidebar />
    </div>
  );
}

export default App;
