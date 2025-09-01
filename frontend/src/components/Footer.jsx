import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-12">
      <p>&copy; {new Date().getFullYear()} ChangeMakers. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
