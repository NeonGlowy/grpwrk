import React from 'react';
import { useLocation } from 'react-router-dom';

function Display() {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div>
      <h1>your information </h1>
      <p>Name: {formData?.name || 'No data'}</p>
      <p>Email: {formData?.email || 'No data'}</p>
      <p>Password: {formData?.password || 'hashed'}</p>
    </div>
  );
}

export default Display;
