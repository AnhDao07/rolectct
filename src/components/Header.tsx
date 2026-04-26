import React from 'react';
import BloodTitle from './BloodTitle';

const Header: React.FC = () => {
  return (
    <header className="pt-12 pb-2 flex flex-col items-center">
      <BloodTitle text="Em Rí Cte" />
      <p className="typewriter-text mt-4">venture into the unspoken.</p>
    </header>
  );
};

export default Header;
