// src/App.js
import Register from "./components/Register";
import Posts from "./components/Post";
import CreatePost from "./components/CreatePost";
import ActiveUser from "./components/ActiveUser";
// import AddComment from "./components/AddComment";
// import LikePost from "./components/LikePost";
// import FollowUser from "./components/FollowUser";

const App = () => {
  return (
    <div>
      <h1>Social Media App</h1>
      <Register />
      <ActiveUser />
      <CreatePost />
      <Posts />
    </div>
  );
};

export default App;
