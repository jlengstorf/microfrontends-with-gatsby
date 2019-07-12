import React from 'react';
import { Link } from 'gatsby';

const Dashboard = () => (
  <div>
    <h1>Account Home</h1>
    <nav>
      <Link to="/app/account/profile">Profile</Link>
    </nav>
    <p>Home!</p>
  </div>
);

export default Dashboard;
