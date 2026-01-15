import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SelectionCard from '../../components/SelectionCard';
import Button from '../../components/Button';
import { Activity, Dumbbell, Zap } from 'lucide-react';
import './QuestionScreen.css';

const WorkoutsScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="app-container">
      <Header onBack={() => navigate('/gender')} progress={20} />
      
      <div className="question-content">
        <h1>How many workouts do you do per week?</h1>
        <p>This will be used to calibrate your custom plan.</p>
        
        <div className="options-container">
          <SelectionCard 
            title="0-2" 
            subtitle="Workouts now and then"
            icon={Activity}
            selected={selected === '0-2'} 
            onClick={() => setSelected('0-2')} 
            variant="radio"
          />
          <SelectionCard 
            title="3-5" 
            subtitle="A few workouts per week"
            icon={Dumbbell}
            selected={selected === '3-5'} 
            onClick={() => setSelected('3-5')} 
            variant="radio"
          />
          <SelectionCard 
            title="6+" 
            subtitle="Dedicated athlete"
            icon={Zap}
            selected={selected === '6+'} 
            onClick={() => setSelected('6+')} 
            variant="radio"
          />
        </div>
      </div>
      
      <div className="bottom-action">
        <Button 
          disabled={!selected} 
          onClick={() => navigate('/source')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default WorkoutsScreen;
