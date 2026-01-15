import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './QuestionScreen.css';
import './MotivationScreen.css';

const MotivationScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <Header onBack={() => navigate('/experience')} progress={50} />
      
      <div className="question-content">
        <h1>Cal AI creates long-term results</h1>
        
        <div className="motivation-card">
          <div className="card-header">Your weight</div>
          <div className="chart-container">
            {/* Mockup of the chart in IMG_1982 */}
            <div className="chart-placeholder">
              <div className="line-traditional"></div>
              <div className="line-calai"></div>
              <div className="chart-labels">
                <span>Month 1</span>
                <span>Month 6</span>
              </div>
            </div>
          </div>
          <p className="card-footer">
            80% of Cal AI users maintain their weight loss even 6 months later
          </p>
        </div>
      </div>
      
      <div className="bottom-action">
        <Button onClick={() => navigate('/results')}>Continue</Button>
      </div>
    </div>
  );
};

export default MotivationScreen;
