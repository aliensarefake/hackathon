import React from 'react';
import './UserProfile.css';

const UserProfile = ({ data, username }) => {
    return (
        <div className="profile-container">
            <h2>Welcome, {username}!</h2>
            <div className="profile-details">
                <p className="profile-points">Points: {data[0]}</p>
                <p className="profile-level">Level: {data[1]}</p>
            </div>
            <div className="profile-activity">
                <h3 className="profile-section-title">Recent Activity</h3>
                {/* Implement user's recent activity */}
            </div>
        </div>
    );
};

export default UserProfile;
