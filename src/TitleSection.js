import React from 'react';
import './TitleSection.css';

const TitleSection = ({ title, children }) => {
  return (
    <div className="title-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default TitleSection;