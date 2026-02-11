export const schema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "name": "CAR RIVAS",
  "image": "/images/about-coach.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Ejemplo 123",
    "addressLocality": "Rivas-Vaciamadrid",
    "addressRegion": "Madrid",
    "postalCode": "28521",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.347, 
    "longitude": -3.535
  },
  "url": "https://carrivas.es",
  "telephone": "+34654125442",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "06:00", "closes": "22:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "14:00" }
  ]
};