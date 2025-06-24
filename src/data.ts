import { TouristPlace } from './types';

export const touristPlaces: TouristPlace[] = [
  {
    id: '1',
    name: 'Santorini',
    location: 'Cyclades',
    country: 'Greece',
    description: 'Stunning Greek island famous for its white-washed buildings and blue domes.',
    longDescription: 'Santorini is one of the most beautiful and romantic destinations in the world. The island is famous for its dramatic cliffs, stunning sunsets, and distinctive Cycladic architecture. The white-washed buildings with blue domes create a picturesque landscape that attracts millions of visitors each year. The island offers incredible views of the Aegean Sea, world-class cuisine, and some of the most luxurious resorts in Greece.',
    imageUrl: 'https://images.pexels.com/photos/161901/santorini-greece-island-sunset-161901.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/161901/santorini-greece-island-sunset-161901.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901214/pexels-photo-2901214.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Island',
    rating: 4.8,
    bestTimeToVisit: 'April to October',
    highlights: ['Stunning sunsets', 'White-washed architecture', 'Wine tasting', 'Luxury resorts'],
    coordinates: { lat: 36.3932, lng: 25.4615 }
  },
  {
    id: '2',
    name: 'Machu Picchu',
    location: 'Cusco Region',
    country: 'Peru',
    description: 'Ancient Incan city perched high in the Andes Mountains.',
    longDescription: 'Machu Picchu is an ancient Incan citadel set high in the Andes Mountains in Peru, above the Sacred Valley. Built in the 15th century and later abandoned, it is renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar. This UNESCO World Heritage site offers breathtaking views and is considered one of the New Seven Wonders of the World.',
    imageUrl: 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2356047/pexels-photo-2356047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2356046/pexels-photo-2356046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2356044/pexels-photo-2356044.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Historical',
    rating: 4.9,
    bestTimeToVisit: 'May to September',
    highlights: ['Ancient Incan architecture', 'Mountain hiking', 'UNESCO World Heritage', 'Sacred Valley views'],
    coordinates: { lat: -13.1631, lng: -72.5450 }
  },
  {
    id: '3',
    name: 'Bali',
    location: 'Indonesia',
    country: 'Indonesia',
    description: 'Tropical paradise with beautiful beaches, temples, and rice terraces.',
    longDescription: 'Bali is a tropical paradise that offers a perfect blend of ancient culture, stunning natural beauty, and modern luxury. From the iconic rice terraces of Tegallalang to the pristine beaches of Seminyak, Bali provides diverse experiences. The island is known for its Hindu temples, traditional arts, vibrant nightlife, and world-class spa treatments.',
    imageUrl: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166558/pexels-photo-2166558.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Tropical',
    rating: 4.7,
    bestTimeToVisit: 'April to October',
    highlights: ['Rice terraces', 'Hindu temples', 'Beautiful beaches', 'Spa treatments'],
    coordinates: { lat: -8.3405, lng: 115.0920 }
  },
  {
    id: '4',
    name: 'Northern Lights',
    location: 'Lapland',
    country: 'Finland',
    description: 'Spectacular natural light display in the Arctic sky.',
    longDescription: 'The Northern Lights, also known as Aurora Borealis, are one of nature\'s most spectacular phenomena. In Finnish Lapland, you can witness this magical display of dancing lights across the dark winter sky. The best viewing spots offer clear skies and minimal light pollution, creating unforgettable memories of green, blue, and purple lights dancing overhead.',
    imageUrl: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1933317/pexels-photo-1933317.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1933318/pexels-photo-1933318.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Natural Wonder',
    rating: 4.9,
    bestTimeToVisit: 'September to March',
    highlights: ['Aurora Borealis', 'Winter activities', 'Glass igloos', 'Reindeer farms'],
    coordinates: { lat: 68.0611, lng: 27.4280 }
  },
  {
    id: '5',
    name: 'Dubai',
    location: 'United Arab Emirates',
    country: 'UAE',
    description: 'Modern metropolis with futuristic architecture and luxury shopping.',
    longDescription: 'Dubai is a dazzling city that perfectly blends traditional Arabian culture with ultra-modern luxury. Home to the world\'s tallest building, largest shopping mall, and most luxurious hotels, Dubai offers experiences like no other. From desert safaris to world-class dining, artificial islands to traditional souks, Dubai is a city of superlatives.',
    imageUrl: 'https://images.pexels.com/photos/1703314/pexels-photo-1703314.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/1703314/pexels-photo-1703314.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1470503/pexels-photo-1470503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1470504/pexels-photo-1470504.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Urban',
    rating: 4.6,
    bestTimeToVisit: 'November to March',
    highlights: ['Burj Khalifa', 'Luxury shopping', 'Desert safari', 'Modern architecture'],
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    id: '6',
    name: 'Kyoto',
    location: 'Kansai',
    country: 'Japan',
    description: 'Ancient Japanese capital with beautiful temples and traditional culture.',
    longDescription: 'Kyoto, the former imperial capital of Japan, is a city where ancient traditions blend seamlessly with modern life. With over 2,000 temples and shrines, traditional wooden houses, formal gardens, and geishas, Kyoto offers an authentic glimpse into Japan\'s rich cultural heritage. The city is particularly famous for its spring cherry blossoms and autumn colors.',
    imageUrl: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1440477/pexels-photo-1440477.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1440478/pexels-photo-1440478.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1440479/pexels-photo-1440479.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Cultural',
    rating: 4.8,
    bestTimeToVisit: 'March to May, October to November',
    highlights: ['Ancient temples', 'Cherry blossoms', 'Traditional culture', 'Japanese gardens'],
    coordinates: { lat: 35.0116, lng: 135.7681 }
  },
  {
    id: '7',
    name: 'Río Negro Waterfront',
    location: 'Mercedes',
    country: 'Uruguay',
    description: 'Picturesque riverside city with colonial architecture and stunning river views.',
    longDescription: 'Mercedes, the capital of Soriano department, is a charming riverside city that sits gracefully along the banks of the Río Negro. Known for its well-preserved colonial architecture, tree-lined streets, and peaceful atmosphere, Mercedes offers visitors a glimpse into Uruguay\'s rich history and natural beauty. The city\'s waterfront promenade provides stunning views of the river, while its historic center showcases beautiful examples of 19th-century architecture.',
    imageUrl: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901214/pexels-photo-2901214.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Riverside',
    rating: 4.5,
    bestTimeToVisit: 'October to April',
    highlights: ['Colonial architecture', 'River promenade', 'Historic center', 'Peaceful atmosphere'],
    coordinates: { lat: -33.2527, lng: -58.0297 }
  },
  {
    id: '8',
    name: 'Palmar Dam',
    location: 'Soriano',
    country: 'Uruguay',
    description: 'Impressive hydroelectric dam creating a beautiful artificial lake surrounded by nature.',
    longDescription: 'The Palmar Dam is one of Uruguay\'s most significant engineering achievements and a stunning natural attraction. Built across the Río Negro, this hydroelectric facility has created a vast artificial lake that has become a paradise for water sports, fishing, and nature observation. The surrounding area offers excellent opportunities for hiking, birdwatching, and enjoying the serene beauty of the Uruguayan countryside. The dam itself is an impressive sight, showcasing modern engineering while harmoniously blending with the natural landscape.',
    imageUrl: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1933317/pexels-photo-1933317.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1933318/pexels-photo-1933318.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Engineering',
    rating: 4.4,
    bestTimeToVisit: 'November to March',
    highlights: ['Hydroelectric dam', 'Artificial lake', 'Water sports', 'Nature observation'],
    coordinates: { lat: -32.6833, lng: -58.0667 }
  },
  {
    id: '9',
    name: 'Estancia Tourism',
    location: 'Soriano Countryside',
    country: 'Uruguay',
    description: 'Authentic gaucho experience in traditional Uruguayan cattle ranches.',
    longDescription: 'The countryside of Soriano offers visitors an authentic glimpse into Uruguay\'s gaucho culture through its traditional estancias (cattle ranches). These working farms provide immersive experiences where guests can participate in daily ranch activities, horseback riding across endless pampas, and traditional asado (barbecue) meals. The vast open landscapes, dotted with cattle and native wildlife, showcase the natural beauty of the Uruguayan interior. Visitors can learn about traditional farming methods, enjoy folk music and dance, and experience the warm hospitality that defines rural Uruguay.',
    imageUrl: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166558/pexels-photo-2166558.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Rural Tourism',
    rating: 4.6,
    bestTimeToVisit: 'September to May',
    highlights: ['Gaucho culture', 'Horseback riding', 'Traditional asado', 'Pampas landscapes'],
    coordinates: { lat: -33.0000, lng: -58.2000 }
  },
  {
    id: '10',
    name: 'Fray Bentos Historic Quarter',
    location: 'Fray Bentos',
    country: 'Uruguay',
    description: 'UNESCO World Heritage industrial landscape with rich cultural heritage.',
    longDescription: 'Fray Bentos, located in the Río Uruguay, is home to the Anglo Meat Packing Plant, a UNESCO World Heritage site that represents one of the most complete examples of the early meat processing industry. This historic quarter tells the story of the global meat trade and its impact on South American development. The beautifully preserved industrial complex, along with the charming riverside town, offers visitors a unique journey through Uruguay\'s industrial heritage. The area also features beautiful parks, riverside walks, and excellent views of the Uruguay River.',
    imageUrl: 'https://images.pexels.com/photos/1703314/pexels-photo-1703314.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/1703314/pexels-photo-1703314.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1470503/pexels-photo-1470503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1470504/pexels-photo-1470504.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Historical',
    rating: 4.3,
    bestTimeToVisit: 'March to November',
    highlights: ['UNESCO World Heritage', 'Industrial heritage', 'Riverside walks', 'Cultural museums'],
    coordinates: { lat: -33.1167, lng: -58.3000 }
  }
];

export const categories = ['All', 'Island', 'Historical', 'Tropical', 'Natural Wonder', 'Urban', 'Cultural', 'Riverside', 'Engineering', 'Rural Tourism'];