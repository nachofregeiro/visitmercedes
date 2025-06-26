import React, { useState, useMemo } from 'react';
import { PlaceCard } from './PlaceCard';
import { PlaceModal } from './PlaceModal';
import { SearchBar } from './SearchBar';
import { TouristPlace } from '../types';

interface GalleryProps {
  places: TouristPlace[];
  categories: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ places, categories }) => {
  const [selectedPlace, setSelectedPlace] = useState<TouristPlace | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           place.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           place.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || place.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [places, searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      {filteredPlaces.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl">🔍</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No destinations found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'Todos los lugares' : selectedCategory} 
              <span className="text-lg font-normal text-gray-600 ml-2">
                ({filteredPlaces.length} {filteredPlaces.length === 1 ? 'lugar' : 'lugares'})
              </span>
            </h2>
            {searchTerm && (
              <p className="text-gray-600">
                Showing results for "<span className="font-semibold">{searchTerm}</span>"
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                onClick={() => setSelectedPlace(place)}
              />
            ))}
          </div>
        </>
      )}

      <PlaceModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};