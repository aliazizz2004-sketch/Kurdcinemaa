import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface MovieCardProps {
  movie: Movie;
  onInfoClick: (movie: Movie) => void;
  key?: React.Key;
}

export default function MovieCard({ movie, onInfoClick }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-none w-[240px] md:w-[300px] h-[130px] md:h-[160px] z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        onClick={() => onInfoClick(movie)}
        className="w-full h-full bg-netflix-card rounded-[4px] overflow-hidden cursor-pointer"
      >
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {movie.kurdishSub && !isHovered && (
          <div className="absolute top-2 left-2 bg-netflix-red text-white text-[9px] px-1.5 py-0.5 rounded-[2px] font-bold z-20 rtl">
            ژێرنووسی کوردی
          </div>
        )}

        {/* Static Title Overlay (Visible when not hovered) */}
        {!isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-2.5">
            <div className="text-[12px] font-bold truncate">{movie.title}</div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 0 }}
            animate={{ opacity: 1, scale: 1.15, y: -20 }}
            exit={{ opacity: 0, scale: 0.9, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="absolute top-0 left-0 w-full z-50 bg-netflix-dark rounded-[4px] shadow-2xl overflow-hidden"
          >
            <div className="relative aspect-video">
              <img
                src={movie.backdropUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-netflix-red text-white text-[9px] px-1.5 py-0.5 rounded-[2px] font-bold rtl">
                ژێرنووسی کوردی
              </div>
            </div>
            
            <div className="p-3 bg-netflix-dark">
              <div className="flex items-center gap-2 mb-3">
                <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-gray-200 transition-colors">
                  <Play fill="black" size={16} className="ml-0.5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center border-2 border-gray-600 rounded-full hover:border-white transition-colors">
                  <Plus size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center border-2 border-gray-600 rounded-full hover:border-white transition-colors">
                  <ThumbsUp size={16} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInfoClick(movie);
                  }}
                  className="w-8 h-8 flex items-center justify-center border-2 border-gray-600 rounded-full hover:border-white transition-colors ml-auto"
                >
                  <ChevronDown size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-1.5 font-sans">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold text-[13px]">{movie.rating} Match</span>
                  <span className="text-gray-400 text-[11px] border border-gray-600 px-1 leading-tight">HD</span>
                  <span className="text-gray-400 text-[11px]">{movie.duration}</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                   {movie.genres.map((genre, idx) => (
                      <span key={idx} className="text-[11px] text-gray-300">
                        {genre}
                        {idx !== movie.genres.length - 1 && <span className="mx-1 text-gray-500">•</span>}
                      </span>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
