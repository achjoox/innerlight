import React from 'react';
import {
  Clock, Users, MapPin, DollarSign, Star, Crown, Gem, Calendar,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLanguage } from '../contexts/LanguageContext';

interface PackageProps {
  onBookNow: (packageData: any) => void;
}

const Packages: React.FC<PackageProps> = ({ onBookNow }) => {
  const { t, language } = useLanguage();

  const packages = [
    {
      id: 1,
      name: "Island Tapestry",
      duration: "10 Days 9 Nights",
      rating: 4.9,
      images: [
        "https://images.pexels.com/photos/13334227/pexels-photo-13334227.jpeg",
        "https://images.pexels.com/photos/32162991/pexels-photo-32162991.jpeg"
      ],
      tiers: [
        {
          name: t('economy'),
          price: 1058,
          icon: null,
          features: [
            t('standardAccommodation'),
            t('groupTours'),
            t('basicMeals'),
            t('sharedTransportation')
          ]
        },
        {
          name: t('standard'),
          price: 1146,
          icon: <Star className="h-4 w-4" />,
          features: [
            t('superiorAccommodation'),
            t('semiPrivateTours'),
            t('allMeals'),
            t('privateTransportation'),
            t('welcomeDrink')
          ]
        },
        {
          name: t('luxury'),
          price: 1939,
          icon: <Crown className="h-4 w-4" />,
          features: [
            t('luxuryResort'),
            t('privateTours'),
            t('fineDining'),
            t('premiumTransportation'),
            t('spaIncluded'),
            t('photography')
          ]
        }
      ],
      destinations: [
        t('tanjungBenoa'),
        t('uluwatuTemple'),
        t('gwkCulturalPark'),
        `${t('ubud')}-${t('sukawati')}`,
        t('tamanBeji'),
        t('sangehMonkeyForest'),
        t('atvAdventureUbud'),
        t('desaPenglipuran'),
        t('goaRajaWaterfall'),
        t('baliZooKuta')
      ],
      highlights: [
        "Private temple ceremonies",
        "Luxury accommodation",
        "Professional photography",
        "Cultural immersion experiences"
      ],
      itinerary: [
        {
          day: 1,
          title: t('arrivalTanjungBenoa'),
          activities: [
            language === 'en' ? "Airport pickup and hotel check-in" : "Penjemputan bandara dan check-in hotel",
            language === 'en' ? "Welcome drink and briefing" : "Minuman selamat datang dan briefing",
            language === 'en' ? "Tanjung Benoa water sports activities" : "Aktivitas olahraga air Tanjung Benoa"
          ]
        },
        {
          day: 2,
          title: t('uluwatuCultural'),
          activities: [
            language === 'en' ? "Morning departure to Uluwatu" : "Keberangkatan pagi ke Uluwatu",
            language === 'en' ? "Traditional Kecak fire dance performance" : "Pertunjukan tari Kecak api tradisional"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Inselharmoni",
      duration: "7 Days 6 Nights",
      rating: 4.8,
      images: [
        "https://images.pexels.com/photos/5479896/pexels-photo-5479896.jpeg",
        "https://images.pexels.com/photos/32855802/pexels-photo-32855802.jpeg"
      ],
      tiers: [
        {
          name: t('economy'),
          price: 724,
          icon: null,
          features: [
            t('standardAccommodation'),
            t('groupTours'),
            t('basicMeals'),
            t('sharedTransportation')
          ]
        },
        {
          name: t('standard'),
          price: 807,
          icon: <Star className="h-4 w-4" />,
          features: [
            t('superiorAccommodation'),
            t('semiPrivateTours'),
            t('allMeals'),
            t('privateTransportation'),
            t('romanticDinner')
          ]
        },
      ],
      destinations: [
        t('tegalalangRiceTerraces'),
        t('ubudCulturalCenter'),
        t('sangehMonkeyForest'),
        t('baliZooKuta'),
        t('tanjungBenoa'),
        t('uluwatuTemple'),
        t('gwkCulturalPark')
      ],
      highlights: [
        "Romantic sunset dinners",
        "Couple spa treatments",
        "Adventure activities",
        "Authentic Balinese cuisine"
      ],
      itinerary: [
        {
          day: 1,
          title: t('tegalalangArrival'),
          activities: [
            language === 'en' ? "Airport pickup and hotel check-in" : "Penjemputan bandara dan check-in hotel"
          ]
        }
      ]
    }
  ];

  const [selectedTiers, setSelectedTiers] = React.useState<{ [key: number]: number }>({
    1: 1,
    2: 1
  });

  const [expandedItinerary, setExpandedItinerary] = React.useState<{ [key: number]: boolean }>({});

  const handleTierChange = (packageId: number, tierIndex: number) => {
    setSelectedTiers(prev => ({
      ...prev,
      [packageId]: tierIndex
    }));
  };

  const toggleItinerary = (packageId: number) => {
    setExpandedItinerary(prev => ({
      ...prev,
      [packageId]: !prev[packageId]
    }));
  };

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('exclusivePackages')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('packagesDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop
                  autoPlay
                  interval={4000}
                  className="h-full"
                >
                  {pkg.images.map((src, i) => (
                    <div key={i} className="h-64">
                      <img
                        src={src}
                        alt={`${pkg.name} ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </Carousel>

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
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('chooseExperience')}</h4>
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
                        <div className="text-lg font-bold text-emerald-600">${tier.price} / Pax</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {pkg.tiers[selectedTiers[pkg.id]].name} {t('features')}
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
                    {t('destinations')}
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

                <div className="mb-6">
                  <button
                    onClick={() => toggleItinerary(pkg.id)}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                      {t('dailyItinerary')}
                    </h4>
                    {expandedItinerary[pkg.id] ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </button>

                  {expandedItinerary[pkg.id] && (
                    <div className="mt-4 space-y-4 max-h-96 overflow-y-auto">
                      {pkg.itinerary.map((day, index) => (
                        <div key={index} className="border-l-4 border-emerald-400 pl-4 pb-4">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                              {day.day}
                            </div>
                            <h5 className="font-semibold text-gray-900">{day.title}</h5>
                          </div>
                          <div className="ml-11 space-y-1">
                            {day.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="text-sm text-gray-600 flex items-start">
                                <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                {activity}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800 flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {t('optionalTip')}
                  </p>
                </div>

                <button
                  onClick={() => onBookNow({
                    ...pkg,
                    selectedTier: pkg.tiers[selectedTiers[pkg.id]],
                    price: pkg.tiers[selectedTiers[pkg.id]].price
                  })}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('bookNow')}
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