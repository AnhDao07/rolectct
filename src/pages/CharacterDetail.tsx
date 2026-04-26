import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === id) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPasscode('');
      // Shake animation effect could be trigger here
    }
  };

  if (!isUnlocked) {
    return (
      <div className="max-w-md mx-auto py-24 flex flex-col items-center">
        <h2 className="madman-text text-horror-red mb-8">Passcode Required</h2>
        <p className="text-gray-400 mb-8 text-center">
          The file for Subject {id} is encrypted. <br/>
          Enter the two-digit authorization code to proceed.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <input
            type="password"
            maxLength={2}
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className={`w-full bg-black border-b-2 text-center text-6xl font-horror tracking-widest focus:outline-none transition-colors ${
              error ? 'border-horror-red text-horror-red animate-pulse' : 'border-neutral-800 text-white focus:border-white'
            }`}
            autoFocus
          />
          <button 
            type="submit"
            className="w-full py-3 border border-white/20 hover:bg-horror-red hover:border-horror-red transition-all uppercase tracking-widest text-sm"
          >
            Authenticate
          </button>
          
          <button 
            type="button"
            onClick={() => navigate('/info')}
            className="w-full text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-widest"
          >
            ← Back to Archive
          </button>
        </form>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-[3/4] bg-neutral-900 border border-horror-red overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <div className="w-full h-full flex items-center justify-center text-horror-red/20 font-horror text-8xl">
            ?
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <span className="text-xs text-horror-red uppercase tracking-[0.3em] font-bold">Classified File</span>
            <h2 className="horror-title mt-2">Subject {id}</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Status: <span className="text-horror-red">TERMINATED</span>
            </p>
            <p>
              The subject was last seen within the restricted perimeter of Sector 01. 
              Observations indicate a rapid degradation of physical form followed by 
              systemic reality-warping events.
            </p>
            <p>
              Warning: Prolonged exposure to this data may result in visual or 
              auditory hallucinations. Proceed with extreme caution.
            </p>
          </div>
          
          <div className="pt-8 flex space-x-4">
             <button 
                onClick={() => navigate('/info')}
                className="px-6 py-2 border border-white/10 text-xs uppercase tracking-widest hover:border-horror-red transition-all"
              >
                Back to Archives
              </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterDetail;
