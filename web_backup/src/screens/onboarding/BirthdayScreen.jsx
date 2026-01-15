import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ScrollPicker from '../../components/ScrollPicker';
import './BirthdayScreen.css';

const BirthdayScreen = () => {
  const navigate = useNavigate();
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());

  const [month, setMonth] = useState('January');
  const [day, setDay] = useState('3');
  const [year, setYear] = useState('2024');

  const handleContinue = () => {
    navigate('/coach');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={50} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>When were you born?</h1>
          <p>This will be used to calibrate your custom plan.</p>
        </div>

        <div className="birthday-pickers">
          <ScrollPicker options={months} value={month} onChange={setMonth} />
          <ScrollPicker options={days} value={day} onChange={setDay} />
          <ScrollPicker options={years} value={year} onChange={setYear} />
        </div>

        <div className="screen-footer">
          <Button onClick={handleContinue}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayScreen;
