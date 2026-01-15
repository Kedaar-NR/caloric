import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import './GoalScreen.css';

const GoalScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('lose');

  const options = [
    { id: 'lose', label: 'Lose weight' },
    { id: 'maintain', label: 'Maintain' },
    { id: 'gain', label: 'Gain weight' }
  ];

  const handleContinue = () => {
    navigate('/desired-weight');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={60} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>What is your goal?</h1>
          <p>This helps us generate a plan for your calorie intake.</p>
        </div>

        <div className="options-list">
          {options.map((option) => (
            <SelectionCard
              key={option.id}
              label={option.label}
              selected={selected === option.id}
              onClick={() => setSelected(option.id)}
              variant="default"
            />
          ))}
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

export default GoalScreen;
