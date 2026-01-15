import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './BurnedCaloriesScreen.css';

const BurnedCaloriesScreen = () => {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    navigate('/rollover');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={98.5} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>Add calories burned back to your daily goal?</h1>
        </div>

        <div className="burned-calories-visual">
          <div className="visual-card">
            <div className="goal-info">
              <span className="info-label">Today's Goal</span>
              <div className="goal-value">
                <span className="fire-icon">🔥</span> 500 Cals
              </div>
            </div>
            <div className="activity-info">
              <div className="activity-icon">🏃‍♂️</div>
              <div className="activity-details">
                <span className="activity-name">Running</span>
                <span className="activity-bonus">+100 cals</span>
              </div>
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

export default BurnedCaloriesScreen;
