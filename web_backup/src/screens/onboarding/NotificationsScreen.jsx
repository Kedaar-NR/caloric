import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './NotificationsScreen.css';

const NotificationsScreen = () => {
  const navigate = useNavigate();

  const handleAllow = () => {
    navigate('/referral');
  };

  const handleDontAllow = () => {
    navigate('/referral');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={99.7} />
      
      <div className="screen-content">
        <div className="screen-header text-center">
          <h1>Be reminded to log meals</h1>
        </div>

        <div className="notification-mockup">
          <div className="mockup-card">
            <div className="mockup-header">
              Cal AI would like to send you Notifications
            </div>
            <div className="mockup-actions">
              <button className="mockup-btn" onClick={handleDontAllow}>Don't Allow</button>
              <button className="mockup-btn primary" onClick={handleAllow}>Allow</button>
            </div>
          </div>
          <div className="hand-pointer">👆</div>
        </div>

        <div className="screen-footer">
          {/* No standard button here, using the mockup actions */}
        </div>
      </div>
    </div>
  );
};

export default NotificationsScreen;
