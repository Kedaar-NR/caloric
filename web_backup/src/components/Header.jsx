import React from 'react';
import './Header.css';
import { ChevronLeft } from 'lucide-react';

const Header = ({ onBack, progress, showBack = true }) => {
  return (
    <header className="app-header">
      <div className="header-top">
        {showBack ? (
          <button className="back-button" onClick={onBack}>
            <ChevronLeft size={24} />
          </button>
        ) : <div className="header-spacer" />}
        
        {progress !== undefined && (
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        )}
        
        <div className="header-spacer" />
      </div>
    </header>
  );
};

export default Header;
