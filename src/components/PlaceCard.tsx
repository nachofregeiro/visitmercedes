import React from 'react';
import { MapPin, Star, Images, Map } from 'lucide-react';
import { TouristPlace } from '../types';

interface PlaceCardProps {
  place: TouristPlace;
  onClick: () => void;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place, onClick }) => {
  const openMapLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const { lat, lng } = place.coordinates;
    const url = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=15#map=15/${lat}/${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-800">{place.rating}</span>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <div className="bg-blue-600/80 backdrop-blur-sm text-white rounded-full px-3 py-1 flex items-center space-x-1">
            <Images className="w-4 h-4" />
            <span className="text-sm font-medium">{place.imageGallery.length}</span>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {place.category}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={openMapLink}
            className="bg-green-600/90 hover:bg-green-700 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            title="View on OpenStreetMap"
          >
            <Map className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{place.location}, {place.country}</span>
          </div>
          <button
            onClick={openMapLink}
            className="text-green-600 hover:text-green-700 transition-colors duration-200"
            title="View on OpenStreetMap"
          >
            <Map className="w-4 h-4" />
          </button>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {place.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {place.description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Best time to visit</span>
            <span className="text-xs text-blue-600 font-semibold">{place.bestTimeToVisit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};