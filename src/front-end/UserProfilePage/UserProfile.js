import React from 'react';
import PointsCard from './PointsCard';
import EarnMorePointsCard from './EarnMorePointsCard';
import RedeemPointsCard from './RedeemPointsCard';
import "./UserProfile.css"

const UserProfile = ({ data, username }) => {
    return (
        <div className="profile-container">
            <h2 className='user'>{username}!</h2>
            <div className="profile-cards">
                <div className="card-container">
                  <PointsCard points={data[0]} level={data[1]} />
                </div>
                <div className="card-container">
                  <EarnMorePointsCard />
                </div>
            </div>
            <RedeemPointsCard />
        </div>
    );
};

export default UserProfile;

