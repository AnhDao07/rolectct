import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const Information: React.FC = () => {
  const navigate = useNavigate();
  const cards = Array.from({ length: 20 }, (_, i) => ({
    id: (i + 1).toString().padStart(2, '0'),
    title: `Subject ${i + 1}`,
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12"
    >
      <div className="text-center mb-12">
        <h2 className="madman-text text-horror-red mb-2">The Archive of Lost Souls</h2>
        <p className="typewriter-text">decipher the numeric sequence</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/character/${card.id}`)}
            className="aspect-[3/4] bg-neutral-900/40 border border-neutral-800 flex flex-col items-center justify-center cursor-pointer group transition-all duration-400 hover:border-horror-red hover:bg-horror-red/5"
          >
            <div className="font-typewriter text-3xl text-horror-red/40 group-hover:text-horror-red transition-colors mb-4">
              {card.id}
            </div>
            
            {/* Artistic Flair Lock Icon Representation */}
            <div className="w-5 h-4 border-2 border-ink-white/20 rounded-sm relative group-hover:border-ink-white transition-colors">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-ink-white/20 border-b-0 rounded-t-full group-hover:border-ink-white transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Information;
