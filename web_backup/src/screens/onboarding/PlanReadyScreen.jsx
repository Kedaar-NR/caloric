import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { CheckCircle2, Flame, Wheat, Drumstick, Droplets } from 'lucide-react';
import './PlanReadyScreen.css';

const PlanReadyScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home'); // Final destination of onboarding
  };

  const targets = [
    { id: 'calories', label: 'Calories', value: '2181', unit: '', icon: <Flame size={16} />, color: '#000' },
    { id: 'carbs', label: 'Carbs', value: '226', unit: 'g', icon: <Wheat size={16} />, color: '#e67e22' },
    { id: 'protein', label: 'Protein', value: '182', unit: 'g', icon: <Drumstick size={16} />, color: '#ff4d4d' },
    { id: 'fats', label: 'Fats', value: '60', unit: 'g', icon: <Droplets size={16} />, color: '#007aff' }
  ];

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={100} />
      
      <div className="screen-content">
        <div className="success-icon">
          <CheckCircle2 size={48} color="black" fill="white" />
        </div>

        <div className="screen-header text-center">
          <h1>Congratulations your custom plan is ready!</h1>
          <div className="goal-summary">
            You should lose:
            <div className="goal-badge">Lose 9.6 lbs by June 10</div>
          </div>
        </div>

        <div className="recommendation-section">
          <h3>Daily recommendation</h3>
          <p>You can edit this anytime</p>

          <div className="targets-grid">
            {targets.map((target) => (
              <div key={target.id} className="target-card">
                <div className="target-header">
                  <span className="target-icon">{target.icon}</span>
                  <span className="target-label">{target.label}</span>
                </div>
                <div className="target-visual">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#eee" strokeWidth="8" />
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke={target.color} 
                      strokeWidth="8" 
                      strokeDasharray="200" 
                      strokeDashoffset="60" 
                    />
                  </svg>
                  <div className="target-value">
                    {target.value}<span>{target.unit}</span>
                  </div>
                </div>
                <button className="edit-btn">✏️</button>
              </div>
            ))}
          </div>
        </div>

        <div className="screen-footer">
          <Button onClick={handleStart}>
            Let's get started!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlanReadyScreen;
