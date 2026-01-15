import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './RolloverCaloriesScreen.css';

const RolloverCaloriesScreen = () => {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    navigate('/rating');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={99} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>Rollover extra calories to the next day?</h1>
          <div className="rollover-badge">Rollover up to <span className="highlight">200 cals</span></div>
        </div>

        <div className="rollover-visual">
          <div className="day-card yesterday">
            <div className="day-label">Yesterday</div>
            <div className="cal-values">
              <span className="current">350</span>
              <span className="total">/500</span>
            </div>
            <div className="cals-left-badge">Cals left 150</div>
            <div className="progress-circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#eee" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#ff4d4d" strokeWidth="8" strokeDasharray="200" strokeDashoffset="60" />
              </svg>
              <span className="fire-icon">🔥</span>
            </div>
          </div>

          <div className="day-card today">
            <div className="day-label">Today</div>
            <div className="cal-values">
              <span className="current">350</span>
              <span className="total">/650</span>
            </div>
            <div className="rollover-info">
              <span className="history-icon">🕒</span>
              <span className="bonus">+150</span>
            </div>
            <div className="cals-left-badge">Cals left 150 <span className="highlight">+ 150</span></div>
            <div className="progress-circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#eee" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#34c759" strokeWidth="8" strokeDasharray="200" strokeDashoffset="100" />
              </svg>
              <span className="fire-icon">🔥</span>
            </div>
          </div>
        </div>

        <div className="dual-footer">
          <Button variant="outline" onClick={() => handleChoice('no')}>No</Button>
          <Button onClick={() => handleChoice('yes')}>Yes</Button>
        </div>
      </div>
    </div>
  );
};

export default RolloverCaloriesScreen;
