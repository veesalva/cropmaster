import React, { useState } from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Components/Landing-components/LandingPage/LandingPage';
import MergeFarmersLayouts from './Components/Farmers-components/FarmersLayout/MergeFarmersLayouts/MergeFarmersLayouts';
import MergerBuyersLayouts from './Components/Buyers-components/BuyersLayout/MergeBuyersLayouts/MergeBuyersLayouts';
import MergerExpertsLayouts from './Components/Experts-components/ExpertsLayout/MergeExpertsLayouts/MergeExpertsLayouts';
import Login from './Components/AuthPages/Login/Login';
import Signup from './Components/AuthPages/Signup/Signup';
import ForumPage from "./Components/Forum-components/Page"
import ConsultationPageRouter from './Components/Consultation-component/PageRouter';
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

  const handleSetToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const handleSetUserId = (userId) => {
    setUserId(userId);
    localStorage.setItem('userId', userId);
  };

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setToken={handleSetToken} setUserId={handleSetUserId} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/farmers/*" element={<MergeFarmersLayouts setToken={handleSetToken}/>} />
        <Route path="/buyers/*" element={<MergerBuyersLayouts setToken={handleSetToken}/>} />
        <Route path="/experts/*" element={<MergerExpertsLayouts setToken={handleSetToken}/>} />
        <Route path='experts/Forum' element={<ForumPage/>}/>
        <Route path='farmers/Forum' element={<ForumPage/>}/>

      </Routes>
      <ConsultationPageRouter/>
    </Router>
     

      
        </>
    
  );
};

export default App;
