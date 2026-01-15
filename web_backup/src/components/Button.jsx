import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false,
  icon: Icon
}) => {
  return (
    <button 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={20} className="btn-icon" />}
      {children}
    </button>
  );
};

export default Button;
