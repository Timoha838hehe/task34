// src/AllFriends.js
import React from 'react';
import { Link } from 'react-router-dom';
import FriendsAPI from './FriendsAPI';

const AllFriends = () => (
  <div>
    <h2>All Friends</h2>
    <ul>
      {FriendsAPI.all().map(f => (
        <li key={f.id}>
          <Link to={`/friends/${f.id}`}>{f.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AllFriends;
