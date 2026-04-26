import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Flame, Skull } from 'lucide-react';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock data for static pages - in a real static site, these could be separate files
  const eventData: Record<string, { title: string, subtitle: string, content: string }> = {
    '1': {
      title: 'The Crimson Moon Eclipse',
      subtitle: 'Protocol 01 - Astral Anomaly',
      content: 'The sky turned the color of bruised flesh. Those who looked up didn\'t just see the moon; they felt it looking back. The sensors recorded localized gravity fluctuations and high-frequency auditory phenomena described as "screaming whispers".'
    },
    '2': {
      title: 'Whispers from the Void',
      subtitle: 'Protocol 02 - Sonic Seance',
      content: 'Recordings from the basement levels revealed voices that haven\'t been heard in centuries. The frequency pattern matches the neural signature of sleep paralysis. Do not attempt to transcribe the words. The ink will bleed.'
    },
    '3': {
      title: 'The Shadow That Walked Away',
      subtitle: 'Protocol 03 - Manifestation',
      content: 'At exactly 03:00 AM, Subject 14\'s shadow detached itself from the wall and exited the chamber via the ventilation shaft. The subject remains in a catatonic state, claiming they "feel too light". Security footage shows the shadow has its own pulse.'
    }
  };

  const event = eventData[id || ''] || { 
    title: 'Unknown Signal', 
    subtitle: 'Protocol Error', 
    content: 'The data for this event has been erased or has not yet occurred in this timeline.' 
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto py-12 px-6"
    >
      <button 
        onClick={() => navigate('/events')}
        className="group flex items-center space-x-2 text-xs uppercase tracking-widest text-gray-500 hover:text-horror-red transition-all mb-12"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Return to Protocols</span>
      </button>

      <div className="space-y-12 relative">
        {/* Decorative elements */}
        <div className="absolute -top-12 -left-12 opacity-5">
          <Skull size={200} />
        </div>

        <header className="space-y-4 border-b border-horror-red/20 pb-8 relative z-10">
          <div className="flex items-center space-x-3 text-horror-red">
            <Flame size={18} className="animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.4em]">{event.subtitle}</span>
          </div>
          <h1 className="madman-text text-5xl md:text-6xl text-white leading-tight">
            {event.title}
          </h1>
        </header>

        <section className="relative z-10">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light italic">
              {event.content}
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 pt-12 relative z-10">
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-horror-red font-bold">Investigation Log</h4>
            <p className="text-sm text-gray-500 font-mono">
              [SYSTEM_STAMP]: 2026.04.26_09:34<br/>
              [ANALYSIS]: Spatial integrity compromised. Visual distortions reported by team Beta. 
              Psychic dampeners at 40% efficiency.
            </p>
          </div>
          <div className="p-6 border border-horror-red/10 bg-horror-red/5 flex items-center justify-center italic text-gray-500 text-sm text-center">
            "We thought the dark was empty. We were wrong. The dark is full of eyes that haven't learned how to blink."
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-horror-red/30 to-transparent" />
      </div>
    </motion.div>
  );
};

export default EventDetail;
