import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import RetirementGoal from '@/pages/RetirementGoal/RetirementGoal';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register/*" element={<Register />} />
      <Route path="/form/*" element={<RetirementGoal />} />
    </Routes>
  );
}

export default Routing;
