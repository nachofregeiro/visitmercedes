import { TouristPlace } from './types';

export const touristPlaces: TouristPlace[] = [
  {
    id: '1',
    name: 'Castillo Mauá',
    location: 'Mercedes',
    country: 'Uruguay',
    description: 'Stunning Greek island famous for its white-washed buildings and blue domes.',
    longDescription: 'El Castillo Mauá está ubicado a 4 km hacia el Oeste de la ciudad de Mercedes, departamento de Soriano, Uruguay. Comprende un casco de estancia adquirida por el banquero Irineu Evangelista de Sousa, Barón y Vizconde de Mauá en 1857 y los terrenos circundantes.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Frente_castillo_Mau%C3%A1.JPG/1280px-Frente_castillo_Mau%C3%A1.JPG',
    imageGallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Frente_castillo_Mau%C3%A1.JPG/1280px-Frente_castillo_Mau%C3%A1.JPG?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901214/pexels-photo-2901214.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Castillo',
    rating: 4.5,
    bestTimeToVisit: 'Todo el año',
    highlights: ['Museo paleontológico', 'Juegos para niños', 'Vinos'],
    coordinates: { lat: -33.242978, lng: -58.065040 }
  },
  {
    id: '2',
    name: 'Isla del Puerto',
    location: 'Mercedes',
    country: 'Uruguay',
    description: 'Ancient Incan city perched high in the Andes Mountains.',
    longDescription: 'Machu Picchu is an ancient Incan citadel set high in the Andes Mountains in Peru, above the Sacred Valley. Built in the 15th century and later abandoned, it is renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar. This UNESCO World Heritage site offers breathtaking views and is considered one of the New Seven Wonders of the World.',
    imageUrl: 'https://i.pinimg.com/736x/5b/e2/5c/5be25c69dfd1ee1e6d223fcbbda00b05.jpg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2356047/pexels-photo-2356047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2356046/pexels-photo-2356046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2356044/pexels-photo-2356044.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Naturaleza',
    rating: 4,
    bestTimeToVisit: 'Diciembre a marzo',
    highlights: ['Ancient Incan architecture', 'Mountain hiking', 'UNESCO World Heritage', 'Sacred Valley views'],
    coordinates: { lat: -33.24456, lng: -58.04111 }
  },
  {
    id: '3',
    name: 'Calera Real del Dacá',
    location: 'Mercedes',
    country: 'Uruguay',
    description: 'Esta calera data del año 1722, más de sesenta y cinco años antes de la fundación de la ciudad de Mercedes.',
    longDescription: 'Bali is a tropical paradise that offers a perfect blend of ancient culture, stunning natural beauty, and modern luxury. From the iconic rice terraces of Tegallalang to the pristine beaches of Seminyak, Bali provides diverse experiences. The island is known for its Hindu temples, traditional arts, vibrant nightlife, and world-class spa treatments.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Calera2.JPG/1280px-Calera2.JPG?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166558/pexels-photo-2166558.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Historia',
    rating: 4.7,
    bestTimeToVisit: 'April to October',
    highlights: ['Rice terraces', 'Hindu temples', 'Beautiful beaches', 'Spa treatments'],
    coordinates: { lat: -33.250389, lng: -58.052659 }, 
  },
  {
    id: '4',
    name: 'Polideportivo Ciudad de Mercedes',
    location: 'Mercedes',
    country: 'Uruguay',
    description: 'El Polideportivo Ciudad de Mercedes es un circuito de deportes de motor de 2,970 km ubicado a 5 km al oeste de  Mercedes.',
    longDescription: 'El circuito fue inaugurado en 2010 y renovado en 2023. El circuito alberga principalmente eventos nacionales de AUVO, aunque también albergó eventos de la Fórmula 4 Sudamericana y la Serie TC2000.',
    imageUrl: 'https://www.auvo.com.uy/wp-content/uploads/2023/03/POLI-3-A.jpg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://www.auvo.com.uy/wp-content/uploads/2023/03/POLI-3-A.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://www.auvo.com.uy/wp-content/uploads/2023/03/8.4.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://www.auvo.com.uy/wp-content/uploads/2023/03/DSC_6069-A.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://www.auvo.com.uy/wp-content/uploads/2023/03/POLI-2-A-2048x1152.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://www.auvo.com.uy/wp-content/uploads/2023/03/POLI-5-AA.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Deportes',
    rating: 4.9,
    bestTimeToVisit: 'September to March',
    highlights: ['Aurora Borealis', 'Winter activities', 'Glass igloos', 'Reindeer farms'],
    coordinates: { lat: 68.0611, lng: 27.4280 }
  },
  {
    id: '5',
    name: 'Manzana 20',
    location: 'Mercedes',
    country: 'Uruguay',
    description: 'Modern metropolis with futuristic architecture and luxury shopping.',
    longDescription: 'Dubai is a dazzling city that perfectly blends traditional Arabian culture with ultra-modern luxury. Home to the world\'s tallest building, largest shopping mall, and most luxurious hotels, Dubai offers experiences like no other. From desert safaris to world-class dining, artificial islands to traditional souks, Dubai is a city of superlatives.',
    imageUrl: 'https://d1b58frn0ydubf.cloudfront.net//files/tmp/compressed/normal/uz5o0apbmn3k9ev93chg.jpg?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/1703314/pexels-photo-1703314.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1470503/pexels-photo-1470503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1470504/pexels-photo-1470504.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Historia',
    rating: 4.6,
    bestTimeToVisit: 'November to March',
    highlights: ['Burj Khalifa', 'Luxury shopping', 'Desert safari', 'Modern architecture'],
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    id: '6',
    name: 'Rambla de Mercedes',
    location: 'Mercedes',
    country: 'Soriano',
    description: 'Es un paseo costero a las orillas del río Negro.',
    longDescription: 'Kyoto, the former imperial capital of Japan, is a city where ancient traditions blend seamlessly with modern life. With over 2,000 temples and shrines, traditional wooden houses, formal gardens, and geishas, Kyoto offers an authentic glimpse into Japan\'s rich cultural heritage. The city is particularly famous for its spring cherry blossoms and autumn colors.',
    imageUrl: 'https://scontent.fros9-1.fna.fbcdn.net/v/t1.6435-9/84668206_2978640375481699_2815430373394087936_n.jpg?auto=compress&cs=tinysrgb&w=800',
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
    name: 'Parque Guernica',
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
    name: 'Catedral de Mercedes',
    location: 'Mercedes',
    country: 'Uruguay',
    description: 'Impressive hydroelectric dam creating a beautiful artificial lake surrounded by nature.',
    longDescription: 'The Palmar Dam is one of Uruguay\'s most significant engineering achievements and a stunning natural attraction. Built across the Río Negro, this hydroelectric facility has created a vast artificial lake that has become a paradise for water sports, fishing, and nature observation. The surrounding area offers excellent opportunities for hiking, birdwatching, and enjoying the serene beauty of the Uruguayan countryside. The dam itself is an impressive sight, showcasing modern engineering while harmoniously blending with the natural landscape.',
    imageUrl: 'https://www.aciprensa.com/imagespp/Catedral-de-Mercedes_24092021.jpg?auto=compress&cs=tinysrgb&w=800',
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
    name: 'Casa de la Cultura',
    location: 'Mercedes',
    country: 'Uruguay',
    description: 'Authentic gaucho experience in traditional Uruguayan cattle ranches.',
    longDescription: 'The countryside of Soriano offers visitors an authentic glimpse into Uruguay\'s gaucho culture through its traditional estancias (cattle ranches). These working farms provide immersive experiences where guests can participate in daily ranch activities, horseback riding across endless pampas, and traditional asado (barbecue) meals. The vast open landscapes, dotted with cattle and native wildlife, showcase the natural beauty of the Uruguayan interior. Visitors can learn about traditional farming methods, enjoy folk music and dance, and experience the warm hospitality that defines rural Uruguay.',
    imageUrl: 'https://www.gub.uy/ministerio-educacion-cultura/sites/ministerio-educacion-cultura/files/styles/documento/public/imagenes/noticias/dadbf40c-1d4c-4094-8d90-6e6fc5df898a.png?auto=compress&cs=tinysrgb&w=800',
    imageGallery: [
      'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166558/pexels-photo-2166558.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Cultural',
    rating: 4.6,
    bestTimeToVisit: 'September to May',
    highlights: ['Gaucho culture', 'Horseback riding', 'Traditional asado', 'Pampas landscapes'],
    coordinates: { lat: -33.0000, lng: -58.2000 }
  },
  {
    id: '10',
    name: 'Paseo Peatonal',
    location: 'Mercedes',
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