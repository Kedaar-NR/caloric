import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SelectionCard from '../../components/SelectionCard';
import Button from '../../components/Button';
import './QuestionScreen.css';

const GenderScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="app-container">
      <Header onBack={() => navigate('/intro')} progress={10} />
      
      <div className="question-content">
        <h1>Choose your Gender</h1>
        <p>This will be used to calibrate your custom plan.</p>
        
        <div className="options-container">
          <SelectionCard 
            title="Male" 
            selected={selected === 'male'} 
            onClick={() => setSelected('male')} 
          />
          <SelectionCard 
            title="Female" 
            selected={selected === 'female'} 
            onClick={() => setSelected('female')} 
          />
          <SelectionCard 
            title="Other" 
            selected={selected === 'other'} 
            onClick={() => setSelected('other')} 
          />
        </div>
      </div>
      
      <div className="bottom-action">
        <Button 
          disabled={!selected} 
          onClick={() => navigate('/workouts')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default GenderScreen;
