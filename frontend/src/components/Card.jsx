import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link, linkText }) => {
  // Use a regular 'a' tag if the link is external, otherwise use Link
  const isExternal = link.startsWith('http');
  const LinkComponent = isExternal ? 'a' : Link;
  const linkProps = isExternal ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : { to: link };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <LinkComponent
        {...linkProps}
        className="block bg-gray-50 hover:bg-gray-100 text-blue-500 font-semibold p-4 text-center transition-colors"
      >
        {linkText}
      </LinkComponent>
    </div>
  );
};

export default Card;
