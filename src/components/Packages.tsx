import React from 'react';
import { Clock, Users, MapPin, DollarSign, Star, Crown, Gem } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PackageProps {
  onBookNow: (packageData: any) => void;
}

const Packages: React.FC<PackageProps> = ({ onBookNow }) => {
  const { t } = useLanguage();

  const packages = [
    {
      id: 1,
      name: "Island Tapestry",
      duration: "10 Days 9 Nights",
      rating: 4.9,
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tiers: [
        {
          name: "Economy",
          price: 1973,
          icon: null,
          features: [
            "Standard accommodation",
            "Group tours",
            "Basic meals included",
            "Shared transportation"
          ]
        },
        {
          name: "Standard",
          price: 2149,
          icon: <Star className="h-4 w-4" />,
          features: [
            "Superior accommodation",
            "Semi-private tours",
            "All meals included",
            "Private transportation",
            "Welcome drink"
          ]
        },
        {
          name: "Luxury",
          price: 3619,
          icon: <Crown className="h-4 w-4" />,
          features: [
            "Luxury resort accommodation",
            "Private tours with guide",
            "Fine dining experiences",
            "Premium transportation",
            "Spa treatments included",
            "Professional photography"
          ]
        }
      ],
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
      rating: 4.8,
      image: "https://images.pexels.com/photos/2166643/pexels-photo-2166643.jpeg",
      tiers: [
        {
          name: "Economy",
          price: 1199,
          icon: null,
          features: [
            "Standard accommodation",
            "Group tours",
            "Basic meals included",
            "Shared transportation"
          ]
        },
        {
          name: "Standard",
          price: 1502,
          icon: <Star className="h-4 w-4" />,
          features: [
            "Superior accommodation",
            "Semi-private tours",
            "All meals included",
            "Private transportation",
            "Romantic dinner"
          ]
        },
      ],
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

  const [selectedTiers, setSelectedTiers] = React.useState<{[key: number]: number}>({
    1: 1, // Default to Standard tier (index 1)
    2: 1
  });

  const handleTierChange = (packageId: number, tierIndex: number) => {
    setSelectedTiers(prev => ({
      ...prev,
      [packageId]: tierIndex
    }));
  };

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
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="flex items-center space-x-6 mt-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span className="text-sm">2 People</span>
                    </div>
                  </div>
                </div>

                {/* Tier Selection */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Choose Your Experience</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {pkg.tiers.map((tier, index) => (
                      <button
                        key={index}
                        onClick={() => handleTierChange(pkg.id, index)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedTiers[pkg.id] === index
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-center mb-1">
                          {tier.icon && <span className="text-emerald-600">{tier.icon}</span>}
                        </div>
                        <div className="text-sm font-medium text-gray-900">{tier.name}</div>
                        <div className="text-lg font-bold text-emerald-600">${tier.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Tier Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {pkg.tiers[selectedTiers[pkg.id]].name} Features
                  </h4>
                  <div className="space-y-2">
                    {pkg.tiers[selectedTiers[pkg.id]].features.map((feature, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
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

                <button 
                  onClick={() => onBookNow({
                    ...pkg,
                    selectedTier: pkg.tiers[selectedTiers[pkg.id]],
                    price: pkg.tiers[selectedTiers[pkg.id]].price
                  })}
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