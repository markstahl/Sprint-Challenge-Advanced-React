import React from 'react';
import {DarkMode} from '../custom_hooks/DarkMode';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = DarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="topButton">
      <h1 className="title">Women's World Cup Players</h1>
      <div className="dark-mode-toggle">
        <button 
            onClick={toggleMode} 
            className={darkMode ? 'toggle toggled' : 'toggle'} />
      </div>
    </div>
  )
}
export default DarkModeToggle;