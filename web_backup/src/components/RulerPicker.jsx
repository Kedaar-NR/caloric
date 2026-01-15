import React, { useRef, useEffect } from 'react';
import './RulerPicker.css';

const RulerPicker = ({ min, max, value, onChange, step = 0.1, unit = 'lbs' }) => {
  const scrollRef = useRef(null);
  const itemWidth = 10; // Width of each small tick

  useEffect(() => {
    if (scrollRef.current) {
      const offset = (value - min) / step * itemWidth;
      scrollRef.current.scrollLeft = offset;
    }
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const newValue = Math.round((scrollLeft / itemWidth) * step + min);
      // Ensure we stay within bounds and handle decimals if needed
      const clampedValue = Math.min(max, Math.max(min, newValue));
      if (clampedValue !== value) {
        onChange(clampedValue);
      }
    }
  };

  const ticks = [];
  for (let i = min; i <= max; i += step) {
    ticks.push(i);
  }

  return (
    <div className="ruler-picker-container">
      <div className="ruler-value">
        {value.toFixed(1)} <span className="ruler-unit">{unit}</span>
      </div>
      <div 
        className="ruler-picker" 
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <div className="ruler-content">
          <div className="ruler-spacer"></div>
          {ticks.map((tick, index) => (
            <div 
              key={index} 
              className={`ruler-tick ${Math.round(tick) === tick ? 'major' : ''}`}
            >
              {Math.round(tick) === tick && index % 10 === 0 && (
                <span className="tick-label">{Math.round(tick)}</span>
              )}
            </div>
          ))}
          <div className="ruler-spacer"></div>
        </div>
        <div className="ruler-pointer"></div>
      </div>
    </div>
  );
};

export default RulerPicker;
