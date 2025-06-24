import React from 'react';
import { Heart, Camera, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Globe className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold">Visite Mercedes</h3>
            <Camera className="w-6 h-6 text-blue-400" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Inspiring wanderlust through beautiful photography and detailed destination guides. 
            Your journey to discover the world's most amazing places starts here.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-gray-400">for travelers worldwide</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 Visite Mercedes. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};