import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { Drumstick, Fish, Apple, Leaf } from 'lucide-react';
import './DietScreen.css';

const DietScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'classic', label: 'Classic', icon: <Drumstick size={24} /> },
    { id: 'pescatarian', label: 'Pescatarian', icon: <Fish size={24} /> },
    { id: 'vegetarian', label: 'Vegetarian', icon: <Apple size={24} /> },
    { id: 'vegan', label: 'Vegan', icon: <Leaf size={24} /> }
  ];

  const handleContinue = () => {
    if (selected) {
      navigate('/accomplish');
    }
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={90} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>Do you follow a specific diet?</h1>
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

export default DietScreen;
