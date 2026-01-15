import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { ShieldCheck, Lock } from 'lucide-react';
import './PrivacyScreen.css';

const PrivacyScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/apple-health');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={97} />
      
      <div className="screen-content">
        <div className="trust-illustration">
          <div className="circle-bg">
            <div className="hands-icon">🙌</div>
          </div>
        </div>

        <div className="screen-header text-center">
          <h1>Thank you for trusting us</h1>
          <p>Now let's personalize Cal AI for you...</p>
        </div>

        <div className="privacy-promise-card">
          <div className="promise-icon">
            <Lock size={24} color="#e67e22" />
          </div>
          <div className="promise-content">
            <h3>Your privacy and security matter to us.</h3>
            <p>We promise to always keep your personal information private and secure.</p>
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

export default PrivacyScreen;
