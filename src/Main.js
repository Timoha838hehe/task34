// src/Main.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Friends from './Friends';

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/friends/*" element={<Friends />} />
    </Routes>
  </main>
);

export default Main;
