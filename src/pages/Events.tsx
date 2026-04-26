import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Radio } from 'lucide-react';

const Events: React.FC = () => {
  const navigate = useNavigate();
  
  const eventItems = [
    { id: 1, title: 'Incoming Signal...', subtitle: 'Crimson Moon', desc: 'Data synchronization pending. The moon is heavier than usual tonight.' },
    { id: 2, title: 'Frequency Shift...', subtitle: 'Void Whispers', desc: 'Neural patterns detected in subsonic ranges. Listen closely to the silence.' },
    { id: 3, title: 'Pattern Match...', subtitle: 'Shadow Trace', desc: 'A silhouette has detached from its source. It is currently roaming Sector 4.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 space-y-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-horror-red/30 pb-6">
        <div>
          <h2 className="madman-text text-horror-red">Ethereal Anomalies</h2>
          <p className="typewriter-text mt-2">Active Event Protocols - System Status: STABLE</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventItems.map((event) => (
          <motion.div 
            key={event.id} 
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/event/${event.id}`)}
            className="group border border-neutral-800 bg-neutral-900/30 p-8 space-y-4 hover:border-horror-red transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Radio size={100} />
            </div>
            
            <div className="text-horror-red/40 group-hover:text-horror-red transition-colors font-horror text-2xl">
              Protocol {event.id.toString().padStart(2, '0')}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white">{event.title}</h3>
              <p className="text-[10px] text-horror-red font-mono uppercase tracking-[0.2em]">{event.subtitle}</p>
            </div>
            <p className="text-gray-500 text-sm italic line-clamp-2">
              {event.desc}
            </p>
            <div className="h-1 w-full bg-neutral-800 mt-4 overflow-hidden">
              <div className="h-full bg-horror-red w-1/3 animate-[pulse_2s_infinite]" />
            </div>
            
            <div className="pt-4 text-[10px] text-white/20 uppercase tracking-widest group-hover:text-white/60 transition-colors flex items-center space-x-1">
              <span>Expand Protocol</span>
              <span className="animate-bounce-x">→</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-horror-red/5 border-l-4 border-horror-red p-8 mt-12 flex items-start space-x-6">
        <ShieldAlert className="text-horror-red shrink-0" size={32} />
        <div>
          <h4 className="text-horror-red font-bold uppercase tracking-widest mb-2">Notice to All Personnel</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            The Events section is highly unstable. If you encounter non-linear time 
            loops or spectral bleeding, report to the decontamination chamber 
            immediately. New protocols will be loaded upon synchronization.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
