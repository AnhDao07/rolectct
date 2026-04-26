import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Information', path: '/info' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <nav className="flex justify-center space-x-12 my-8 py-4 border-t border-b border-horror-red/30">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`text-xs uppercase tracking-[3px] transition-all duration-300 ${
            location.pathname === link.path 
              ? 'text-horror-red font-bold underline decoration-horror-red/30 underline-offset-8' 
              : 'text-ink-white hover:text-horror-red'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
