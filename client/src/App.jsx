import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import React from 'react';

// Import Pages
import Home from "./Pages/LandingPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import UserHome from "./Pages/Home";
import ScanPage from "./Pages/ScanPage";
import TutorialsPage from "./Pages/TutorialsPage";
import ProfilePage from "./Pages/ProfilePage";

// Import Components
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/scan" element={<ScanPage />} />
        <Route path="/tutorials/:objectName" element={<TutorialsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Toaster />
      <Footer />
    </>
  );
}

export default App;