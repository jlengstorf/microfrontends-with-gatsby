import React from 'react';
import { Link } from 'gatsby';

const Index = () => (
  <>
    <p>Hello everyone!</p>
    <Link to="/app/dashboard">Dashboard</Link>
    <Link to="/app/account">Account</Link>
  </>
);

export default Index;
