import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { BarChart3, Utensils, Users, Calendar, Apple } from 'lucide-react';
import './ObstaclesScreen.css';

const ObstaclesScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'consistency', label: 'Lack of consistency', icon: <BarChart3 size={24} /> },
    { id: 'habits', label: 'Unhealthy eating habits', icon: <Utensils size={24} /> },
    { id: 'support', label: 'Lack of support', icon: <Users size={24} /> },
    { id: 'schedule', label: 'Busy schedule', icon: <Calendar size={24} /> },
    { id: 'inspiration', label: 'Lack of meal inspiration', icon: <Apple size={24} /> }
  ];

  const handleContinue = () => {
    if (selected) {
      navigate('/diet');
    }
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={85} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>What's stopping you from reaching your goals?</h1>
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

export default ObstaclesScreen;
