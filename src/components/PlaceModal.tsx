import React from 'react';
import { X, MapPin, Star, Calendar, CheckCircle, Map } from 'lucide-react';
import { TouristPlace } from '../types';
import { ImageGallery } from './ImageGallery';

interface PlaceModalProps {
  place: TouristPlace | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceModal: React.FC<PlaceModalProps> = ({ place, isOpen, onClose }) => {
  if (!isOpen || !place) return null;

  const openMapLink = () => {
    const { lat, lng } = place.coordinates;
    const url = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=15#map=15/${lat}/${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image Gallery Section */}
              <div>
                <ImageGallery images={place.imageGallery} placeName={place.name} />
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 rounded-full px-4 py-2 flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold text-gray-800">{place.rating}</span>
                    </div>
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {place.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{place.name}</h2>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg">{place.location}, {place.country}</span>
                    </div>
                    <button
                      onClick={openMapLink}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      <Map className="w-4 h-4" />
                      <span className="text-sm font-medium">Ver en el Mapa</span>
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Best Time to Visit</h4>
                  </div>
                  <p className="text-gray-700 font-medium">{place.bestTimeToVisit}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Destacados</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {place.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Acerca de este lugar</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {place.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};