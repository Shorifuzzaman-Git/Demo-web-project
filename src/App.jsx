import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/home.jsx";
import TuitionJobs from "./pages/tuitionJobs.jsx";
import TutorHub from "./pages/tutorHub.jsx";
import TutorProfile from "./pages/TutorProfile.jsx";
import Profile from "./pages/Profile.jsx";
import Notifications from "./pages/Notifications.jsx";
import Navbar from "./components/Navbar.jsx";
import BottomNav from "./components/BottomNav.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tuitionJobs" element={<TuitionJobs />} />
        <Route path="/tutorHub" element={<TutorHub />} />
        <Route path="/tutor/:id" element={<TutorProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Footer/> */}
      <BottomNav/>
    </div>
  );
};

export default App;
