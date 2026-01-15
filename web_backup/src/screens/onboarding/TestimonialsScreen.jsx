import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Star } from 'lucide-react';
import './TestimonialsScreen.css';

const TestimonialsScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/notifications');
  };

  const testimonials = [
    {
      id: 1,
      name: 'Jake Sullivan',
      avatar: 'https://i.pravatar.cc/150?u=4',
      rating: 5,
      text: 'I lost 15 lbs in 2 months! I was about to go on Ozempic but decided to give this app a shot and it worked :)'
    },
    {
      id: 2,
      name: 'Benny Marcs',
      avatar: 'https://i.pravatar.cc/150?u=5',
      rating: 5,
      text: "The time I have saved by just taking pictures of my food has been invaluable. Time is money, and I've confidently saved hundreds of dollars."
    }
  ];

  return (
    <div className="app-container">
      <Header onBack={() => navigate(-1)} progress={99.6} />
      
      <div className="screen-content">
        <div className="social-proof-header">
          <h2>Cal AI was made for people like you</h2>
          <div className="user-avatars">
            <img src="https://i.pravatar.cc/150?u=1" alt="User" />
            <img src="https://i.pravatar.cc/150?u=2" alt="User" />
            <img src="https://i.pravatar.cc/150?u=3" alt="User" />
          </div>
          <p className="user-count">5M+ Cal AI Users</p>
        </div>

        <div className="testimonials-list">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={t.avatar} alt={t.name} className="avatar" />
                <div className="user-info">
                  <span className="name">{t.name}</span>
                  <div className="stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="#e67e22" color="#e67e22" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">{t.text}</p>
            </div>
          ))}
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

export default TestimonialsScreen;
