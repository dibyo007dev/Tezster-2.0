import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function Workspace() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Workspace;
