import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import UnitToggle from '../../components/UnitToggle';
import ScrollPicker from '../../components/ScrollPicker';
import './HeightWeightScreen.css';

const HeightWeightScreen = () => {
  const navigate = useNavigate();
  const [unit, setUnit] = useState('Imperial');
  
  // Imperial state
  const [ft, setFt] = useState('5 ft');
  const [inVal, setInVal] = useState('10 in');
  const [lb, setLb] = useState('120 lb');

  // Metric state
  const [cm, setCm] = useState('178 cm');
  const [kg, setKg] = useState('54 kg');

  const ftOptions = Array.from({ length: 8 }, (_, i) => `${i + 1} ft`);
  const inOptions = Array.from({ length: 12 }, (_, i) => `${i} in`);
  const lbOptions = Array.from({ length: 451 }, (_, i) => `${i + 50} lb`);

  const cmOptions = Array.from({ length: 151 }, (_, i) => `${i + 100} cm`);
  const kgOptions = Array.from({ length: 221 }, (_, i) => `${i + 30} kg`);

  const handleContinue = () => {
    navigate('/birthday');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={45} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>Height & weight</h1>
          <p>This will be used to calibrate your custom plan.</p>
        </div>

        <UnitToggle unit={unit} setUnit={setUnit} />

        <div className="pickers-container">
          {unit === 'Imperial' ? (
            <>
              <div className="picker-group">
                <div className="picker-label">Height</div>
                <div className="picker-row">
                  <ScrollPicker options={ftOptions} value={ft} onChange={setFt} />
                  <ScrollPicker options={inOptions} value={inVal} onChange={setInVal} />
                </div>
              </div>
              <div className="picker-group">
                <div className="picker-label">Weight</div>
                <ScrollPicker options={lbOptions} value={lb} onChange={setLb} />
              </div>
            </>
          ) : (
            <>
              <div className="picker-group">
                <div className="picker-label">Height</div>
                <ScrollPicker options={cmOptions} value={cm} onChange={setCm} />
              </div>
              <div className="picker-group">
                <div className="picker-label">Weight</div>
                <ScrollPicker options={kgOptions} value={kg} onChange={setKg} />
              </div>
            </>
          )}
        </div>

        <div className="screen-footer">
          <Button onClick={handleContinue}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default HeightWeightScreen;
