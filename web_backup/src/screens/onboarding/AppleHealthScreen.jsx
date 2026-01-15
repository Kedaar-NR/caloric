import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Heart, Activity, Apple, Moon } from 'lucide-react';
import './AppleHealthScreen.css';

const AppleHealthScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/burned-calories');
  };

  const handleSkip = () => {
    navigate('/burned-calories');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={98} />
      
      <div className="screen-content">
        <div className="sync-illustration">
          <div className="illustration-container">
            <div className="floating-item walking">Walking</div>
            <div className="floating-item running">Running</div>
            <div className="floating-item yoga">Yoga</div>
            <div className="floating-item sleep">Sleep</div>
            
            <div className="central-icons">
              <div className="health-icon">
                <Heart size={40} color="#ff2d55" fill="#ff2d55" />
              </div>
              <div className="sync-arrow">
                <div className="dot"></div>
                <div className="arrow">↓</div>
                <div className="dot"></div>
              </div>
              <div className="calai-icon">
                <Apple size={40} color="white" fill="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="screen-header text-center">
          <h1>Connect to Apple Health</h1>
          <p>Sync your daily activity between Cal AI and the Health app to have the most thorough data.</p>
        </div>

        <div className="screen-footer">
          <Button onClick={handleContinue}>
            Continue
          </Button>
          <button className="skip-button" onClick={handleSkip}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppleHealthScreen;
