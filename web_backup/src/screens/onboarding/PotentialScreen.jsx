import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Trophy } from 'lucide-react';
import './PotentialScreen.css';

const PotentialScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/privacy');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={96} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>You have great potential to crush your goal</h1>
        </div>

        <div className="potential-chart-card">
          <div className="chart-header">Your weight transition</div>
          <div className="chart-svg-container">
            <svg viewBox="0 0 300 150" className="potential-chart">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e67e22" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#e67e22" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M 0 100 Q 50 100 100 90 T 200 60 T 300 40 L 300 150 L 0 150 Z" 
                fill="url(#chartGradient)" 
              />
              <path 
                d="M 0 100 Q 50 100 100 90 T 200 60 T 300 40" 
                fill="none" 
                stroke="#e67e22" 
                strokeWidth="3" 
              />
              <circle cx="10" cy="100" r="5" fill="white" stroke="#e67e22" strokeWidth="2" />
              <circle cx="100" cy="90" r="5" fill="white" stroke="#e67e22" strokeWidth="2" />
              <circle cx="200" cy="60" r="5" fill="white" stroke="#e67e22" strokeWidth="2" />
              <g transform="translate(280, 25)">
                <circle cx="0" cy="0" r="15" fill="#e67e22" />
                <Trophy size={16} color="white" style={{ transform: 'translate(-8px, -8px)' }} />
              </g>
            </svg>
            <div className="chart-labels">
              <span>3 Days</span>
              <span>7 Days</span>
              <span>30 Days</span>
            </div>
          </div>
          <p className="chart-description">
            Based on Cal AI's historical data, weight loss is usually delayed at first, but after 7 days, you can burn fat like crazy!
          </p>
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

export default PotentialScreen;
