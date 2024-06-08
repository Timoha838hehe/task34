// src/Friend.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FriendsAPI from './FriendsAPI';

const Friend = () => {
  const { id } = useParams();
  const friend = FriendsAPI.get(parseInt(id, 10));
  if (!friend) {
    return <div>Sorry, but the friend was not found</div>;
  }
  return (
    <div>
      <h1>{friend.name}</h1>
      <h2>Age: {friend.age}</h2>
      <h2>Hobby: {friend.hobby}</h2>
      <Link to='/friends'>Back</Link>
    </div>
  );
};

export default Friend;
