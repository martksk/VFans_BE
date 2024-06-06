// src/components/AddComment.js
import { useState } from "react";
import api from "../api";

const AddComment = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/comments", {
        user: "user_id",
        post: postId,
        content,
      });
      console.log("Comment added successfully:", response.data);
    } catch (error) {
      console.error(
        "Error adding comment:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Add a comment..."
        required
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default AddComment;
