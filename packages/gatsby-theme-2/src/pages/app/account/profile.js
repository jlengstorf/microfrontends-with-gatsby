import React from 'react';
import { Link } from 'gatsby';

const Profile = () => (
  <div>
    <h1>Account Profile</h1>
    <nav>
      <Link to="/app/account/">Account Home</Link>
    </nav>
    <p>Profile!</p>
  </div>
);

export default Profile;
