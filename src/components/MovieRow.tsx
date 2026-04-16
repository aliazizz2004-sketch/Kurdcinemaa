import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Category, Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieRowProps {
  category: Category;
  onInfoClick: (movie: Movie) => void;
  key?: React.Key;
}

export default function MovieRow({ category, onInfoClick }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8 relative group px-12">
      <div className="flex justify-between items-center mb-4 rtl text-right md:text-left">
        <h2 className="text-[20px] font-bold">{category.title}</h2>
        <span className="text-[12px] text-netflix-red cursor-pointer hover:underline font-bold">بینینی هەمووی</span>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/40 hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity w-10 md:w-12 flex items-center justify-center"
        >
          <ChevronLeft size={32} />
        </button>

        <div
          ref={rowRef}
          className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar py-4 scroll-smooth"
        >
          {category.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onInfoClick={onInfoClick} />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/40 hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity w-10 md:w-12 flex items-center justify-center"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
