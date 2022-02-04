import "./App.css";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Comment from "./Components/Comments/Comment";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Route path="/home/:tweetId" element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/comment/:tweetId" element={<Comment />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
