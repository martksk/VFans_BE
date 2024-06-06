// src/components/LikePost.js
import api from "../api";

const LikePost = ({ postId, userId }) => {
  const handleLike = async () => {
    try {
      const response = await api.post(`/posts/${postId}/like`, { userId });
      console.log("Post liked successfully:", response.data);
    } catch (error) {
      console.error(
        "Error liking post:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return <button onClick={handleLike}>Like</button>;
};

export default LikePost;
