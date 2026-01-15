import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { CheckCircle2 } from 'lucide-react';
import './GeneratePlanScreen.css';

const GeneratePlanScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/analyzing');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={99.9} />
      
      <div className="screen-content">
        <div className="heart-illustration">
          <div className="circle-bg">
            <div className="heart-icon">❤️</div>
            <div className="hand-icon">🫰</div>
          </div>
        </div>

        <div className="status-badge">
          <CheckCircle2 size={20} color="#e67e22" fill="#fdf2f2" />
          <span>All done!</span>
        </div>

        <div className="screen-header text-center">
          <h1>Time to generate your custom plan!</h1>
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

export default GeneratePlanScreen;
