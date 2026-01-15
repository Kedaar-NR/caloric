import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Rabbit, Turtle, Zap } from 'lucide-react';
import './GoalSpeedScreen.css';

const GoalSpeedScreen = () => {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState(1.0);

  const handleContinue = () => {
    navigate('/comparison');
  };

  const getSpeedLabel = () => {
    if (speed < 0.8) return 'Slow';
    if (speed > 1.2) return 'Fast';
    return 'Recommended';
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={75} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>How fast do you want to reach your goal?</h1>
          <p>Weight loss speed per week</p>
        </div>

        <div className="speed-display">
          <div className="speed-value">{speed.toFixed(1)} lbs</div>
        </div>

        <div className="speed-icons">
          <div className={`speed-icon-item ${speed < 0.8 ? 'active' : ''}`}>
            <Turtle size={32} />
            <span>Slow</span>
          </div>
          <div className={`speed-icon-item ${speed >= 0.8 && speed <= 1.2 ? 'active' : ''}`}>
            <Rabbit size={32} />
            <span>Recommended</span>
          </div>
          <div className={`speed-icon-item ${speed > 1.2 ? 'active' : ''}`}>
            <Zap size={32} />
            <span>Fast</span>
          </div>
        </div>

        <div className="slider-container">
          <input 
            type="range" 
            min="0.5" 
            max="2.0" 
            step="0.1" 
            value={speed} 
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="speed-slider"
          />
        </div>

        <div className="speed-info-card">
          <div className="info-title">
            You will reach your goal in <span className="highlight">5 months</span>
          </div>
          <p className="info-text">
            This is the most balanced pace, motivating and ideal for most users.
          </p>
          <div className="info-calories">Daily calorie goal: 2,181 cal</div>
        </div>

        <div className="screen-footer">
          <Button onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GoalSpeedScreen;
