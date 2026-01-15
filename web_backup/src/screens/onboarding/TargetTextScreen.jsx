import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './TargetTextScreen.css';

const TargetTextScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/goal-speed');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={70} />
      
      <div className="screen-content">
        <div className="target-text-container">
          <h1 className="target-title">
            Losing <span className="highlight">9.6 lbs</span> is a realistic target. It's not hard at all!
          </h1>
          <p className="target-subtext">
            90% of users say that the change is obvious after using Cal AI and it is not easy to rebound.
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

export default TargetTextScreen;
