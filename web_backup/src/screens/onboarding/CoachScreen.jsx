import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { CheckCircle2, XCircle } from 'lucide-react';
import './CoachScreen.css';

const CoachScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'yes', label: 'Yes', icon: <CheckCircle2 size={24} /> },
    { id: 'no', label: 'No', icon: <XCircle size={24} /> }
  ];

  const handleContinue = () => {
    if (selected) {
      navigate('/goal');
    }
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={55} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>Do you currently work with a personal coach or nutritionist?</h1>
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

export default CoachScreen;
