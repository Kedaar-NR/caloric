import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Star } from 'lucide-react';
import './RatingScreen.css';

const RatingScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/testimonials');
  };

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={99.5} />
      
      <div className="screen-content">
        <div className="screen-header">
          <h1>Give us a rating</h1>
        </div>

        <div className="rating-card">
          <div className="rating-header">
            <div className="laurel-left">🌿</div>
            <div className="rating-value">
              <span className="number">4.8</span>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="#e67e22" color="#e67e22" />
                ))}
              </div>
              <span className="ratings-count">200K+ App Ratings</span>
            </div>
            <div className="laurel-right">🌿</div>
          </div>
        </div>

        <div className="social-proof">
          <h2>Cal AI was made for people like you</h2>
          <div className="user-avatars">
            <img src="https://i.pravatar.cc/150?u=1" alt="User" />
            <img src="https://i.pravatar.cc/150?u=2" alt="User" />
            <img src="https://i.pravatar.cc/150?u=3" alt="User" />
          </div>
          <p className="user-count">5M+ Cal AI Users</p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src="https://i.pravatar.cc/150?u=4" alt="Jake" className="avatar" />
            <div className="user-info">
              <span className="name">Jake Sullivan</span>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} fill="#e67e22" color="#e67e22" />
                ))}
              </div>
            </div>
          </div>
          <p className="testimonial-text">
            I lost 15 lbs in 2 months! I was about to go on Ozempic but decided to give this app a shot and it worked :)
          </p>
        </div>

        <div className="screen-footer">
          <Button onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RatingScreen;
