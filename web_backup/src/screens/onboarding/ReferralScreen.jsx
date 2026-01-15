import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './ReferralScreen.css';

const ReferralScreen = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleContinue = () => {
    navigate('/analyzing');
  };

  const handleSkip = () => {
    navigate('/analyzing');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={99.8} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>Enter referral code (optional)</h1>
          <p>You can skip this step</p>
        </div>

        <div className="referral-input-container">
          <div className="input-wrapper">
            <input 
              type="text" 
              placeholder="Referral Code" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button className="submit-btn" disabled={!code}>Submit</button>
          </div>
        </div>

        <div className="screen-footer">
          <Button onClick={handleSkip}>
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReferralScreen;
