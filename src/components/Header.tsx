import React from 'react';
import { Camera, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Visite Mercedes
          </h1>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <Camera className="w-8 h-8" />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the world's most breathtaking destinations through our curated collection of stunning photography and detailed guides
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-green-200">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
            <span>10 Amazing Destinations</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>High Quality Images</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span>Detailed Information</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span>Including Uruguay Gems</span>
          </div>
        </div>
      </div>
    </header>
  );
};