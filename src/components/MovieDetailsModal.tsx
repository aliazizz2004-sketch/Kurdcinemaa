import React from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import { Movie } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface MovieDetailsModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function MovieDetailsModal({ movie, onClose }: MovieDetailsModalProps) {
  if (!movie) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-netflix-dark rounded-xl overflow-hidden shadow-2xl overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[110] w-10 h-10 bg-black/60 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="relative h-96 w-full">
            <img
              src={movie.backdropUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{movie.title}</h1>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded font-bold hover:bg-gray-200 transition-colors">
                  <Play fill="black" size={20} />
                  Play
                </button>
                <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-full hover:border-white transition-colors bg-black/40">
                  <Plus size={24} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-full hover:border-white transition-colors bg-black/40">
                  <ThumbsUp size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-green-500 font-bold">{movie.rating} Match</span>
                <span className="text-gray-400">{movie.releaseYear}</span>
                <span className="px-1.5 border border-gray-500 text-xs text-gray-400">16+</span>
                <span className="text-gray-400">{movie.duration}</span>
                <span className="px-1.5 border border-gray-500 text-xs text-gray-400 font-bold">4K</span>
              </div>

              {movie.kurdishSub && (
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-yellow-500 rtl">بەردەستە بە ژێرنووسی کوردی</span>
                </div>
              )}

              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                {movie.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <div>
                <span className="text-gray-500">Cast: </span>
                <span className="text-gray-200">{movie.cast.join(', ')}</span>
              </div>
              <div>
                <span className="text-gray-500">Genres: </span>
                <span className="text-gray-200">{movie.genres.join(', ')}</span>
              </div>
              <div>
                <span className="text-gray-500">Director: </span>
                <span className="text-gray-200">{movie.director}</span>
              </div>
              <div>
                <span className="text-gray-500">This movie is: </span>
                <span className="text-gray-200">Exciting, Gripping, Atmospheric</span>
              </div>
            </div>
          </div>

          <div className="px-8 pb-12">
            <h3 className="text-2xl font-bold mb-6">More Like This</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-zinc-900 rounded-md overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <img
                    src={`https://picsum.photos/seed/${movie.id}${i}/400/225`}
                    alt="Similar"
                    className="w-full aspect-video object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-green-500 text-xs font-bold">98% Match</span>
                       <Plus size={16} className="text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-2">A gripping tale of adventure and survival in the wilderness.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
