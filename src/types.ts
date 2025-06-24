export interface TouristPlace {
  id: string;
  name: string;
  location: string;
  country: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageGallery: string[];
  category: string;
  rating: number;
  bestTimeToVisit: string;
  highlights: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}