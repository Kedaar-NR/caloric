import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SelectionCard from '../../components/SelectionCard';
import Button from '../../components/Button';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import './QuestionScreen.css';

const ExperienceScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="app-container">
      <Header onBack={() => navigate('/source')} progress={40} />
      
      <div className="question-content">
        <h1>Have you tried other calorie tracking apps?</h1>
        
        <div className="options-container">
          <SelectionCard 
            title="Yes" 
            icon={ThumbsUp}
            selected={selected === 'yes'} 
            onClick={() => setSelected('yes')} 
          />
          <SelectionCard 
            title="No" 
            icon={ThumbsDown}
            selected={selected === 'no'} 
            onClick={() => setSelected('no')} 
          />
        </div>
      </div>
      
      <div className="bottom-action">
        <Button 
          disabled={!selected} 
          onClick={() => navigate('/motivation')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ExperienceScreen;
