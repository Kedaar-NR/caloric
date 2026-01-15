import React, { useRef, useEffect } from 'react';
import './ScrollPicker.css';

const ScrollPicker = ({ options, value, onChange, label }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const index = options.indexOf(value);
      if (index !== -1) {
        const itemHeight = 44; // Matches CSS
        scrollRef.current.scrollTop = index * itemHeight;
      }
    }
  }, [value, options]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const itemHeight = 44;
      const index = Math.round(scrollRef.current.scrollTop / itemHeight);
      if (options[index] !== value) {
        onChange(options[index]);
      }
    }
  };

  return (
    <div className="scroll-picker-container">
      {label && <div className="scroll-picker-label">{label}</div>}
      <div 
        className="scroll-picker" 
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <div className="scroll-picker-content">
          <div className="scroll-picker-spacer"></div>
          {options.map((option, index) => (
            <div 
              key={index} 
              className={`scroll-picker-item ${option === value ? 'selected' : ''}`}
            >
              {option}
            </div>
          ))}
          <div className="scroll-picker-spacer"></div>
        </div>
        <div className="scroll-picker-selection-overlay"></div>
      </div>
    </div>
  );
};

export default ScrollPicker;
