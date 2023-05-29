import { useParams } from 'react-router-dom';
import UserProfile from './UserProfile';

const userPointsLevel = {
    'user1': [1000, 2],
    'user2': [1200, 3],
    'user3': [800, 1],
    'user4': [1500, 4],
    'user5': [600, 2],
    'user6': [900, 3],
    'user7': [1100, 2],
    'user8': [1300, 4],
    'user9': [700, 1],
    'user10': [1400, 3]
  };

const Profile = () => {
  const { username } = useParams();
  const data = userPointsLevel[username];

  if (!data) {
    return <div>User not found</div>;
  }

  return <UserProfile data={data} username={username} />;
};

export default Profile;