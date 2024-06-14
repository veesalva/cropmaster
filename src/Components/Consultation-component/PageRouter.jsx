import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import UserMessages  from "./pages/User/Messages/Messages.jsx";
import UserSingleChat from "./pages/User/SingleChat/SingleChat.jsx";
import ExpertMessages from "./pages/Expert/Messages/Messages.jsx";
import  ExpertSingleChat from "./pages/Expert/SingleChat/SingleChat.jsx";
import "./output.css"
const PageRouter = () => {
  return (
    
      <Routes>
        <Route path="consultation/farmers" element={<Home />} />
        <Route path="consultation/farmers/messages" element={<UserMessages />} />
        <Route path="consultation/farmers/messages/:id" element={<UserSingleChat />} />
        <Route path="consultation/experts/messages" element={<ExpertMessages />} />
        <Route path="consultation/experts/messages/:id" element={<ExpertSingleChat />} />

      </Routes>
    
  )
}

export default PageRouter