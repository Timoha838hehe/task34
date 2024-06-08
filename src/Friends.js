// src/Friends.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllFriends from './AllFriends';
import Friend from './Friend';

const Friends = () => (
  <Routes>
    <Route path="/" element={<AllFriends />} />
    <Route path=":id" element={<Friend />} />
  </Routes>
);

export default Friends;
