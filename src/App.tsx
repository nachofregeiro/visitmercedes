import React from 'react';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { touristPlaces, categories } from './data';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <Header />
      <Gallery places={touristPlaces} categories={categories} />
      <Footer />
    </div>
  );
}

export default App;