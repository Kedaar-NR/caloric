import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-logo">
        <span className="apple-icon">🍎</span>
        <span className="logo-text">Cal AI</span>
      </div>
    </div>
  );
};

export default SplashScreen;
