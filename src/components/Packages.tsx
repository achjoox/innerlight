import React from 'react';
import { Clock, Users, MapPin, DollarSign, Star, Crown, Gem, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
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
      image: "https://images.pexels.com/photos/13334227/pexels-photo-13334227.jpeg",
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
            t('language') === 'en' ? "Airport pickup and hotel check-in" : "Penjemputan bandara dan check-in hotel",
            t('language') === 'en' ? "Welcome drink and briefing" : "Minuman selamat datang dan briefing",
            t('language') === 'en' ? "Tanjung Benoa water sports activities" : "Aktivitas olahraga air Tanjung Benoa",
            t('language') === 'en' ? "Parasailing and jet ski adventure" : "Petualangan parasailing dan jet ski",
            t('language') === 'en' ? "Beachside lunch" : "Makan siang di tepi pantai",
            t('language') === 'en' ? "Evening at leisure" : "Malam bebas"
          ]
        },
        {
          day: 2,
          title: t('uluwatuCultural'),
          activities: [
            t('language') === 'en' ? "Morning departure to Uluwatu" : "Keberangkatan pagi ke Uluwatu",
            t('language') === 'en' ? "Explore Uluwatu Temple on cliff" : "Jelajahi Pura Uluwatu di atas tebing",
            t('language') === 'en' ? "Traditional Kecak fire dance performance" : "Pertunjukan tari Kecak api tradisional",
            t('language') === 'en' ? "Sunset viewing at temple" : "Menyaksikan matahari terbenam di pura",
            t('language') === 'en' ? "Seafood dinner at Jimbaran Bay" : "Makan malam seafood di Teluk Jimbaran",
            t('language') === 'en' ? "Return to hotel" : "Kembali ke hotel"
          ]
        },
        {
          day: 3,
          title: t('gwkShopping'),
          activities: [
            t('language') === 'en' ? "Visit GWK Cultural Park" : "Kunjungi Taman Budaya GWK",
            t('language') === 'en' ? "Explore Garuda Wisnu Kencana statue" : "Jelajahi patung Garuda Wisnu Kencana",
            t('language') === 'en' ? "Cultural performances and exhibitions" : "Pertunjukan budaya dan pameran",
            t('language') === 'en' ? "Traditional Balinese lunch" : "Makan siang tradisional Bali",
            t('language') === 'en' ? "Shopping at local markets" : "Berbelanja di pasar lokal",
            t('language') === 'en' ? "Spa treatment (luxury tier)" : "Perawatan spa (tier mewah)"
          ]
        },
        {
          day: 4,
          title: t('ubudImmersion'),
          activities: [
            t('language') === 'en' ? "Journey to Ubud cultural center" : "Perjalanan ke pusat budaya Ubud",
            t('language') === 'en' ? "Visit traditional art villages" : "Kunjungi desa seni tradisional",
            t('language') === 'en' ? "Sukawati traditional market" : "Pasar tradisional Sukawati",
            t('language') === 'en' ? "Silver jewelry workshop" : "Workshop perhiasan perak",
            t('language') === 'en' ? "Authentic Balinese cooking class" : "Kelas memasak Bali otentik",
            t('language') === 'en' ? "Overnight in Ubud" : "Menginap di Ubud"
          ]
        },
        {
          day: 5,
          title: t('tamanBejiNature'),
          activities: [
            t('language') === 'en' ? "Early morning at Taman Beji" : "Pagi hari di Taman Beji",
            t('language') === 'en' ? "Holy water temple ceremony" : "Upacara pura air suci",
            t('language') === 'en' ? "Nature walk and meditation" : "Jalan-jalan alam dan meditasi",
            t('language') === 'en' ? "Traditional purification ritual" : "Ritual penyucian tradisional",
            t('language') === 'en' ? "Organic lunch in rice fields" : "Makan siang organik di sawah",
            t('language') === 'en' ? "Afternoon relaxation" : "Relaksasi sore hari"
          ]
        },
        {
          day: 6,
          title: t('sangehAdventure'),
          activities: [
            t('language') === 'en' ? "Visit Sangeh Monkey Forest Sanctuary" : "Kunjungi Suaka Hutan Monyet Sangeh",
            t('language') === 'en' ? "Interact with sacred monkeys" : "Berinteraksi dengan monyet suci",
            t('language') === 'en' ? "Explore ancient temple ruins" : "Jelajahi reruntuhan pura kuno",
            t('language') === 'en' ? "Nature photography session" : "Sesi fotografi alam",
            t('language') === 'en' ? "Traditional Balinese lunch" : "Makan siang tradisional Bali",
            t('language') === 'en' ? "ATV adventure preparation" : "Persiapan petualangan ATV"
          ]
        },
        {
          day: 7,
          title: t('atvVillage'),
          activities: [
            t('language') === 'en' ? "ATV adventure through rice terraces" : "Petualangan ATV melalui terasering",
            t('language') === 'en' ? "Village tour and local interaction" : "Tur desa dan interaksi lokal",
            t('language') === 'en' ? "Traditional craft demonstrations" : "Demonstrasi kerajinan tradisional",
            t('language') === 'en' ? "Mud and jungle trails" : "Jalur lumpur dan hutan",
            t('language') === 'en' ? "Riverside lunch" : "Makan siang di tepi sungai",
            t('language') === 'en' ? "Cultural evening program" : "Program budaya malam hari"
          ]
        },
        {
          day: 8,
          title: t('penglipuranVillage'),
          activities: [
            t('language') === 'en' ? "Visit Penglipuran traditional village" : "Kunjungi desa tradisional Penglipuran",
            t('language') === 'en' ? "Learn about Balinese architecture" : "Pelajari arsitektur Bali",
            t('language') === 'en' ? "Traditional bamboo forest walk" : "Jalan-jalan hutan bambu tradisional",
            t('language') === 'en' ? "Local family interaction" : "Interaksi dengan keluarga lokal",
            t('language') === 'en' ? "Traditional weaving demonstration" : "Demonstrasi tenun tradisional",
            t('language') === 'en' ? "Authentic village lunch" : "Makan siang desa otentik"
          ]
        },
        {
          day: 9,
          title: t('waterfallZoo'),
          activities: [
            t('language') === 'en' ? "Trek to Goa Raja Waterfall" : "Trekking ke Air Terjun Goa Raja",
            t('language') === 'en' ? "Swimming and relaxation" : "Berenang dan relaksasi",
            t('language') === 'en' ? "Jungle exploration" : "Eksplorasi hutan",
            t('language') === 'en' ? "Visit Bali Zoo in Kuta" : "Kunjungi Kebun Binatang Bali di Kuta",
            t('language') === 'en' ? "Animal encounters and shows" : "Bertemu hewan dan pertunjukan",
            t('language') === 'en' ? "Makan malam perpisahan" : "Farewell dinner"
          ]
        },
        {
          day: 10,
          title: t('departureDay'),
          activities: [
            t('language') === 'en' ? "Hotel check-out" : "Check-out hotel",
            t('language') === 'en' ? "Last-minute shopping" : "Belanja menit terakhir",
            t('language') === 'en' ? "Souvenir collection" : "Koleksi souvenir",
            t('language') === 'en' ? "Airport transfer" : "Transfer bandara",
            t('language') === 'en' ? "Departure assistance" : "Bantuan keberangkatan",
            t('language') === 'en' ? "Safe journey home" : "Perjalanan pulang yang aman"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Inselharmoni",
      duration: "7 Days 6 Nights",
      rating: 4.8,
      image: "https://images.pexels.com/photos/32162991/pexels-photo-32162991.jpeg",
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
            t('language') === 'en' ? "Airport pickup and hotel check-in" : "Penjemputan bandara dan check-in hotel",
            t('language') === 'en' ? "Welcome drink and orientation" : "Minuman selamat datang dan orientasi",
            t('language') === 'en' ? "Visit Tegalalang Rice Terraces" : "Kunjungi Terasering Tegalalang",
            t('language') === 'en' ? "Instagram-worthy photo session" : "Sesi foto untuk Instagram",
            t('language') === 'en' ? "Traditional lunch with rice field view" : "Makan siang tradisional dengan pemandangan sawah",
            t('language') === 'en' ? "Evening at leisure" : "Malam bebas"
          ]
        },
        {
          day: 2,
          title: t('ubudCulturalExp'),
          activities: [
            t('language') === 'en' ? "Explore Ubud Cultural Center" : "Jelajahi Pusat Budaya Ubud",
            t('language') === 'en' ? "Traditional art galleries visit" : "Kunjungi galeri seni tradisional",
            t('language') === 'en' ? "Balinese painting workshop" : "Workshop lukisan Bali",
            t('language') === 'en' ? "Sacred Monkey Forest Sanctuary" : "Suaka Hutan Monyet Suci",
            t('language') === 'en' ? "Romantic dinner at Ubud restaurant" : "Makan malam romantis di restoran Ubud",
            t('language') === 'en' ? "Traditional dance performance" : "Pertunjukan tari tradisional"
          ]
        },
        {
          day: 3,
          title: t('sangehZoo'),
          activities: [
            t('language') === 'en' ? "Morning visit to Sangeh Monkey Forest" : "Kunjungan pagi ke Hutan Monyet Sangeh",
            t('language') === 'en' ? "Ancient temple exploration" : "Eksplorasi pura kuno",
            t('language') === 'en' ? "Wildlife photography" : "Fotografi satwa liar",
            t('language') === 'en' ? "Bali Zoo animal encounters" : "Bertemu hewan di Kebun Binatang Bali",
            t('language') === 'en' ? "Educational animal shows" : "Pertunjukan hewan edukatif",
            t('language') === 'en' ? "Sunset at zoo restaurant" : "Matahari terbenam di restoran kebun binatang"
          ]
        },
        {
          day: 4,
          title: t('tanjungBenoaWater'),
          activities: [
            t('language') === 'en' ? "Water sports at Tanjung Benoa" : "Olahraga air di Tanjung Benoa",
            t('language') === 'en' ? "Parasailing adventure" : "Petualangan parasailing",
            t('language') === 'en' ? "Banana boat and jet ski" : "Banana boat dan jet ski",
            t('language') === 'en' ? "Snorkeling experience" : "Pengalaman snorkeling",
            t('language') === 'en' ? "Beachside seafood lunch" : "Makan siang seafood di tepi pantai",
            t('language') === 'en' ? "Beach relaxation time" : "Waktu relaksasi pantai"
          ]
        },
        {
          day: 5,
          title: t('uluwatuSunset'),
          activities: [
            t('language') === 'en' ? "Journey to Uluwatu Temple" : "Perjalanan ke Pura Uluwatu",
            t('language') === 'en' ? "Cliff-top temple exploration" : "Eksplorasi pura di atas tebing",
            t('language') === 'en' ? "Traditional Kecak fire dance" : "Tari Kecak api tradisional",
            t('language') === 'en' ? "Spectacular sunset viewing" : "Menyaksikan matahari terbenam spektakuler",
            t('language') === 'en' ? "Romantic dinner at Jimbaran" : "Makan malam romantis di Jimbaran",
            t('language') === 'en' ? "Beach walk under stars" : "Jalan-jalan pantai di bawah bintang"
          ]
        },
        {
          day: 6,
          title: t('gwkSpa'),
          activities: [
            t('language') === 'en' ? "Visit GWK Cultural Park" : "Kunjungi Taman Budaya GWK",
            t('language') === 'en' ? "Garuda Wisnu Kencana statue" : "Patung Garuda Wisnu Kencana",
            t('language') === 'en' ? "Cultural exhibitions and shows" : "Pameran budaya dan pertunjukan",
            t('language') === 'en' ? "Traditional Balinese lunch" : "Makan siang tradisional Bali",
            t('language') === 'en' ? "Couple spa treatment" : "Perawatan spa pasangan",
            t('language') === 'en' ? "Relaxation and leisure time" : "Waktu relaksasi dan santai"
          ]
        },
        {
          day: 7,
          title: t('departureDay'),
          activities: [
            t('language') === 'en' ? "Hotel check-out" : "Check-out hotel",
            t('language') === 'en' ? "Last-minute souvenir shopping" : "Belanja souvenir menit terakhir",
            t('language') === 'en' ? "Traditional market visit" : "Kunjungi pasar tradisional",
            t('language') === 'en' ? "Airport transfer" : "Transfer bandara",
            t('language') === 'en' ? "Departure assistance" : "Bantuan keberangkatan",
            t('language') === 'en' ? "Farewell to paradise" : "Selamat tinggal surga"
          ]
        }
      ]
    }
  ];

  const [selectedTiers, setSelectedTiers] = React.useState<{[key: number]: number}>({
    1: 1, // Default to Standard tier (index 1)
    2: 1
  });
  
  const [expandedItinerary, setExpandedItinerary] = React.useState<{[key: number]: boolean}>({});

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
                  </div>
                </div>

                {/* Tier Selection */}
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

                {/* Selected Tier Features */}
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

                {/* Daily Itinerary */}
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

                {/* Optional Tip */}
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