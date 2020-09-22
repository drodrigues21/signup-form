import React from 'react';
import '../styles/InfoSection.css';

const InfoSection = () => {
    return (
        <div className="info-section-container">
            <h1 className="info-section--header">
                Learn to code by watching others
            </h1>
            <p className="info-section--text">
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
            </p>
        </div>
    );
}

export default InfoSection;