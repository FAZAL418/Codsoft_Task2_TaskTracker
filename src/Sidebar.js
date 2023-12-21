import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

  const handleMouseMove = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <aside className={`sidebar ${isVisible ? 'visible' : ''}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="sidebar-content">
        <h2 className="sidebar-date">{currentDate}</h2>
        <div className="fun-element">
          {isVisible && (
            <div className="animated-character" role="img" aria-label="Animated Character">
              🌟
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
