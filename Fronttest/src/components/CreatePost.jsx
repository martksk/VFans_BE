// src/components/CreatePost.js
import { useState } from "react";
import api from "../api";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/posts", {
        description: content,
      });
      console.log("Post created successfully:", response.data);
    } catch (error) {
      console.error(
        "Error creating post:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="What's on your mind?"
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
