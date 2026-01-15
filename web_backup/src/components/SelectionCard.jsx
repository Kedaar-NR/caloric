import React from 'react';
import './SelectionCard.css';

const SelectionCard = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  selected, 
  onClick,
  variant = 'default' 
}) => {
  return (
    <div 
      className={`selection-card ${selected ? 'selected' : ''} selection-card-${variant}`}
      onClick={onClick}
    >
      {Icon && (
        <div className="selection-card-icon">
          <Icon size={24} />
        </div>
      )}
      <div className="selection-card-content">
        <div className="selection-card-title">{title}</div>
        {subtitle && <div className="selection-card-subtitle">{subtitle}</div>}
      </div>
      {variant === 'radio' && (
        <div className={`selection-card-radio ${selected ? 'checked' : ''}`}>
          {selected && <div className="radio-inner" />}
        </div>
      )}
    </div>
  );
};

export default SelectionCard;
