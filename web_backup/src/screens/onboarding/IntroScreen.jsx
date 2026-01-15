import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import './IntroScreen.css';

const IntroScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-screen">
      <div className="intro-content">
        <div className="intro-image-container">
          {/* Mockup of the phone screen in IMG_1975 */}
          <div className="phone-mockup">
            <div className="mockup-header">Nutrition</div>
            <div className="mockup-card">
              <div className="mockup-food">Turkey Sandwich...</div>
              <div className="mockup-macros">
                <div className="macro-dot orange"></div>
                <div className="macro-dot red"></div>
                <div className="macro-dot blue"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="intro-text">
          <h1>Calorie tracking made easy</h1>
          <Button onClick={() => navigate('/gender')}>Get Started</Button>
          <div className="signin-link">
            Already have an account? <strong>Sign In</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
