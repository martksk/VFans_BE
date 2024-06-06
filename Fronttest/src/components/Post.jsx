// src/components/Posts.js
import { useState, useEffect } from "react";
import api from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts/");
        setPosts(response.data);
        console.log("Posts fetched successfully:", response.data);
      } catch (error) {
        console.error(
          "Error fetching posts:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
