import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaBell, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser);
    } else {
      setUsername('Admin'); // fallback
    }
  }, []);

  return (
    <div className="sidebar">
      <h2 className="logo">Hi, {username}</h2>
      <nav>
        <NavLink to="/dashboard"><FaHome /> Home</NavLink>  
        <NavLink to="/dashboard/schedule"><FaCalendarAlt /> Schedule</NavLink>
        <NavLink to="/dashboard/notifications"><FaBell /> Notifications</NavLink>
        <NavLink to="/"><FaSignOutAlt /> Logout</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
