import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 mt-auto border-t border-white/10 flex flex-col items-center space-y-4">
      <p className="signature-text opacity-80 text-center text-white">
        © 2026 NGƯỜI TẠO WEB{' '}
        <a 
          href="https://www.facebook.com/profile.php?id=61582242182174" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-white no-underline border-none outline-none transition-opacity hover:opacity-100"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          em rí cte
        </a>
      </p>
    </footer>
  );
};

export default Footer;
