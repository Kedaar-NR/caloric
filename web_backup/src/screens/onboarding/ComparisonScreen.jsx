import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './ComparisonScreen.css';

const ComparisonScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/obstacles');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={80} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>Lose twice as much weight with Cal AI vs on your own</h1>
        </div>

        <div className="comparison-chart-container">
          <div className="chart-card">
            <div className="chart-bars">
              <div className="chart-bar-item">
                <div className="bar-label">Without Cal AI</div>
                <div className="bar-wrapper">
                  <div className="bar-fill gray" style={{ height: '40%' }}>
                    <span className="bar-value">20%</span>
                  </div>
                </div>
              </div>
              <div className="chart-bar-item">
                <div className="bar-label">With Cal AI</div>
                <div className="bar-wrapper">
                  <div className="bar-fill black" style={{ height: '80%' }}>
                    <span className="bar-value">2X</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="chart-footer">
              Cal AI makes it easy and holds you accountable.
            </p>
          </div>
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

export default ComparisonScreen;
