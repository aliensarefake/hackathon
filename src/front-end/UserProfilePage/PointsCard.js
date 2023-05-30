import React from 'react';
import './PointsCard.css'; //import the CSS File


const PointsCard = ({ points, level }) => {
    return (
        <div className="card">
            <h3>Your Points</h3>
            <p className="profile-points">Points: {points}</p>
            <p className="profile-level">Level: {level}</p>
        </div>
    );
};

export default PointsCard;
