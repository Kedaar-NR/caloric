import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SelectionCard from '../../components/SelectionCard';
import Button from '../../components/Button';
import { Search, Instagram, Tv, Users, Twitter, Youtube, AppWindow } from 'lucide-react';
import './QuestionScreen.css';

const SourceScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const sources = [
    { id: 'google', title: 'Google', icon: Search },
    { id: 'instagram', title: 'Instagram', icon: Instagram },
    { id: 'tv', title: 'TV', icon: Tv },
    { id: 'friends', title: 'Friend or family', icon: Users },
    { id: 'x', title: 'X', icon: Twitter },
    { id: 'youtube', title: 'Youtube', icon: Youtube },
    { id: 'appstore', title: 'App Store', icon: AppWindow },
  ];

  return (
    <div className="app-container">
      <Header onBack={() => navigate('/workouts')} progress={30} />
      
      <div className="question-content">
        <h1>Where did you hear about us?</h1>
        
        <div className="options-container">
          {sources.map(source => (
            <SelectionCard 
              key={source.id}
              title={source.title} 
              icon={source.icon}
              selected={selected === source.id} 
              onClick={() => setSelected(source.id)} 
            />
          ))}
        </div>
      </div>
      
      <div className="bottom-action">
        <Button 
          disabled={!selected} 
          onClick={() => navigate('/experience')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SourceScreen;
