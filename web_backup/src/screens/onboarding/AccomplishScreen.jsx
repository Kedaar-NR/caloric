import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { Apple, Sun, Dumbbell, User } from 'lucide-react';
import './AccomplishScreen.css';

const AccomplishScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'healthier', label: 'Eat and live healthier', icon: <Apple size={24} /> },
    { id: 'energy', label: 'Boost my energy and mood', icon: <Sun size={24} /> },
    { id: 'consistent', label: 'Stay motivated and consistent', icon: <Dumbbell size={24} /> },
    { id: 'body', label: 'Feel better about my body', icon: <User size={24} /> }
  ];

  const handleContinue = () => {
    if (selected) {
      navigate('/potential');
    }
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={95} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>What would you like to accomplish?</h1>
        </div>

        <div className="options-list">
          {options.map((option) => (
            <SelectionCard
              key={option.id}
              label={option.label}
              selected={selected === option.id}
              onClick={() => setSelected(option.id)}
              icon={option.icon}
            />
          ))}
        </div>

        <div className="screen-footer">
          <Button onClick={handleContinue} disabled={!selected}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccomplishScreen;
