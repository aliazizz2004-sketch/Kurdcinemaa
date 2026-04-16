import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types';
import { motion } from 'motion/react';

interface HeroProps {
  movie: Movie;
  onInfoClick: (movie: Movie) => void;
}

export default function Hero({ movie, onInfoClick }: HeroProps) {
  return (
    <div className="relative h-[520px] w-full max-h-[85vh] min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          className="w-full h-full object-cover brightness-[0.6]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-overlay-gradient z-1" />
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" 
          style={{ 
            background: `radial-gradient(circle at 70% 30%, #1a1a1a 0%, #050505 100%)` 
          }} 
        />
      </div>

      {/* Content */}
      <div className="relative h-full px-12 flex flex-col justify-center max-w-[600px] z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="uppercase tracking-[4px] text-[11px] text-[#aaa] mb-2.5 flex items-center gap-2.5">
             <span className="text-netflix-red border border-netflix-red px-1 font-bold">N</span>
             زنجیرەی کوردی ستریم
          </div>
          
          <h1 className="text-[64px] font-serif italic font-normal leading-[1.1] mb-4 drop-shadow-xl text-white">
            {movie.title}
          </h1>
          
          <p className="text-[16px] leading-[1.5] mb-6 line-clamp-3 text-[#ccc] drop-shadow-md">
            {movie.description}
          </p>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-[4px] font-bold hover:bg-gray-200 transition-colors text-[16px]">
              <Play fill="black" size={20} />
              لێدان
            </button>
            <button
              onClick={() => onInfoClick(movie)}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#6d6d6e]/70 text-white rounded-[4px] font-bold hover:bg-[#6d6d6e]/90 transition-colors backdrop-blur-sm text-[16px]"
            >
              <Info size={20} />
              زانیاری زیاتر
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
