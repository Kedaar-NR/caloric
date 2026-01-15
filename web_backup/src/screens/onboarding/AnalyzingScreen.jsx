import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import './AnalyzingScreen.css';

const AnalyzingScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [items, setItems] = useState([
    { id: 1, label: 'Calories', checked: false },
    { id: 2, label: 'Carbs', checked: false },
    { id: 3, label: 'Protein', checked: false },
    { id: 4, label: 'Fats', checked: false },
    { id: 5, label: 'Health Score', checked: false }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate('/plan-ready'), 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    const newItems = items.map((item, index) => {
      if (progress >= (index + 1) * 20) {
        return { ...item, checked: true };
      }
      return item;
    });
    setItems(newItems);
  }, [progress]);

  return (
    <div className="app-container analyzing-bg">
      <div className="analyzing-content">
        <div className="progress-number">{progress}%</div>
        <h1 className="analyzing-title">We're setting everything up for you</h1>

        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <p className="status-text">Finalizing results...</p>

        <div className="checklist-container">
          <h3>Daily recommendation for</h3>
          <div className="checklist">
            {items.map((item) => (
              <div key={item.id} className={`checklist-item ${item.checked ? 'checked' : ''}`}>
                <span>• {item.label}</span>
                {item.checked && <CheckCircle2 size={20} color="black" fill="white" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingScreen;
