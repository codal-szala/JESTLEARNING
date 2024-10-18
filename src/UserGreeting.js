import React from 'react';

const UserGreeting = ({ user }) => {
  if (!user) return <div>No user logged in</div>;

  return <div>Welcome, {user.name}!</div>;
};

export default UserGreeting;