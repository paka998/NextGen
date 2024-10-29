import React from 'react';

const Copyright = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className='copyright'>&copy; {currentYear} Nextgen. All rights reserved.</p>
    </footer>
  );
};

export default Copyright;
