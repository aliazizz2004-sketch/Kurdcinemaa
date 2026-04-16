/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MovieDetailsModal from './components/MovieDetailsModal';
import { featuredMovie, categories } from './data';
import { Movie } from './types';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleInfoClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="relative min-h-screen bg-netflix-black overflow-x-hidden">
      <Navbar />

      <main className="pb-20">
        <Hero movie={featuredMovie} onInfoClick={handleInfoClick} />

        <div className="-mt-16 md:-mt-32 relative z-20 pb-10">
          {categories.map((category) => (
            <MovieRow
              key={category.id}
              category={category}
              onInfoClick={handleInfoClick}
            />
          ))}
        </div>
      </main>

      <footer className="px-4 md:px-12 py-12 md:py-20 bg-netflix-dark border-t border-zinc-900 text-zinc-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-sm">
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:underline">Audio Description</a>
              <a href="#" className="hover:underline">Investor Relations</a>
              <a href="#" className="hover:underline">Privacy</a>
              <button className="text-left border border-zinc-500 px-2 py-1 w-fit mt-4 hover:border-white hover:text-white transition-colors">Service Code</button>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:underline">Help Centre</a>
              <a href="#" className="hover:underline">Jobs</a>
              <a href="#" className="hover:underline">Legal Notices</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:underline">Gift Cards</a>
              <a href="#" className="hover:underline">Netflix Shop</a>
              <a href="#" className="hover:underline">Cookie Preferences</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:underline">Media Centre</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Corporate Information</a>
            </div>
          </div>

          <p className="text-xs">© 1997-2024 KurdSub, Inc.</p>
        </div>
      </footer>

      <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} />
    </div>
  );
}

