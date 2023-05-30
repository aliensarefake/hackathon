import React from 'react';
import { Link } from 'react-router-dom';
import './EarnMorePointsCard.css'; 


const EarnMorePointsCard = () => {
    return (
        <div className="card">
            <h3>Earn More Points?</h3>
            <div className="sub-card">
                <a>Challenge #1</a>
            </div>
            <div className="sub-card">
                <a>Challenge #2</a>
            </div>
            <div className="sub-card">
                <a>Challenge #3</a>
            </div>
            <div className="sub-card">
                <a>Challenge #4</a>
            </div>
        </div>
    );
};

export default EarnMorePointsCard;
