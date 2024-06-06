// src/components/FollowUser.js
import api from "../api";

const FollowUser = ({ followerId, followedId }) => {
  const handleFollow = async () => {
    try {
      const response = await api.post(`/users/${followerId}/follow`, {
        followedId,
      });
      console.log("User followed successfully:", response.data);
    } catch (error) {
      console.error(
        "Error following user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return <button onClick={handleFollow}>Follow</button>;
};

export default FollowUser;
