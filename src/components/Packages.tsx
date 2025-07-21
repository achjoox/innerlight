import React from 'react';
import { Clock, Users, MapPin, DollarSign, Star } from 'lucide-react';

interface PackageProps {
  onBookNow: (packageData: any) => void;
}

const Packages: React.FC<PackageProps> = ({ onBookNow }) => {
  const packages = [
    {
      id: 1,
      name: "Island Tapestry",
      duration: "10 Days 9 Nights",
      price: 2149,
      rating: 4.9,
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      destinations: [
        "Tanjung Benoa",
        "Uluwatu Temple",
        "GWK Cultural Park",
        "Ubud-Sukawati",
        "Taman Beji",
        "Sangeh Monkey Forest",
        "ATV Adventure at Ubud",
        "Desa Penglipuran",
        "Goa Raja Waterfall",
        "Bali Zoo-Kuta"
      ],
      highlights: [
        "Private temple ceremonies",
        "Luxury accommodation",
        "Professional photography",
        "Cultural immersion experiences"
      ]
    },
    {
      id: 2,
      name: "Inselharmoni",
      duration: "7 Days 6 Nights",
      price: 1502,
      rating: 4.8,
      image: "https://images.pexels.com/photos/2474631/pexels-photo-2474631.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      destinations: [
        "Tegalalang Rice Terraces",
        "Ubud Cultural Center",
        "Sangeh Monkey Forest",
        "Bali Zoo-Kuta",
        "Tanjung Benoa",
        "Uluwatu Temple",
        "GWK Cultural Park"
      ],
      highlights: [
        "Romantic sunset dinners",
        "Couple spa treatments",
        "Adventure activities",
        "Authentic Balinese cuisine"
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exclusive Couple Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated experiences designed for couples seeking romance, adventure, 
            and cultural immersion in beautiful Bali.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{pkg.rating}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-emerald-600">${pkg.price}</div>
                    <div className="text-sm text-gray-500">per couple</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 mb-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span className="text-sm">2 People</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                    Destinations
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {pkg.destinations.map((dest, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                        {dest}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Package Highlights</h4>
                  <div className="space-y-2">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => onBookNow(pkg)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;