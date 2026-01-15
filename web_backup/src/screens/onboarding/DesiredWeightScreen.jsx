import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import RulerPicker from '../../components/RulerPicker';
import './DesiredWeightScreen.css';

const DesiredWeightScreen = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(184.4);

  const handleContinue = () => {
    navigate('/target-text');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={65} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>What is your desired weight?</h1>
        </div>

        <div className="weight-display-container">
          <div className="goal-type">Lose weight</div>
          <RulerPicker 
            min={100} 
            max={300} 
            value={weight} 
            onChange={setWeight} 
            step={0.1}
            unit="lbs"
          />
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

export default DesiredWeightScreen;
