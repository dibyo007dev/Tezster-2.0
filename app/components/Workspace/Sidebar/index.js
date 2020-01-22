import React from 'react';

function Sidebar() {
  return (
    <aside className="container-sidebar">
      <ul className="sidebar-content-container">
        <li className="sidebar-content-active">
          <span className="accounts-icon" /> Accounts
        </li>
        <li className="sidebar-content">
          <span className="blocks-icon" /> Blocks
        </li>
        <li className="sidebar-content">
          <span className="wallet-icon" /> Transactions
        </li>
        <li className="sidebar-content">
          <span className="card-icon" /> Contracts
        </li>
        <li className="sidebar-content">
          <span className="events-icon" /> Events
        </li>
        <li className="sidebar-content">
          <span className="fill-icon" /> Logs
        </li>
        <li className="sidebar-content">
          <span className="email-icon" /> Help Desk
        </li>
        <li className="sidebar-content">
          <span className="settings-icon" /> Settings
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
