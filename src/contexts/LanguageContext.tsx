import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'id';
  setLanguage: (lang: 'en' | 'id') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    home: 'Home',
    packages: 'Packages',
    about: 'About',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Discover the Magic of',
    heroSubtitle: 'Experience paradise with our exclusive couple packages. From pristine beaches to ancient temples, create unforgettable memories in the Island of the Gods.',
    explorePackages: 'Explore Packages',
    
    // Packages
    exclusivePackages: 'Exclusive Couple Packages',
    packagesDescription: 'Carefully curated experiences designed for couples seeking romance, adventure, and cultural immersion in beautiful Bali.',
    duration: 'Duration',
    people: 'People',
    chooseExperience: 'Choose Your Experience',
    economy: 'Economy',
    standard: 'Standard',
    luxury: 'Luxury',
    features: 'Features',
    destinations: 'Destinations',
    bookNow: 'Book Now',
    dailyItinerary: 'Daily Itinerary',
    
    // Package Features
    standardAccommodation: 'Standard accommodation',
    groupTours: 'Group tours',
    basicMeals: 'Basic meals included',
    sharedTransportation: 'Shared transportation',
    superiorAccommodation: 'Superior accommodation',
    semiPrivateTours: 'Semi-private tours',
    allMeals: 'All meals included',
    privateTransportation: 'Private transportation',
    welcomeDrink: 'Welcome drink',
    romanticDinner: 'Romantic dinner',
    luxuryResort: 'Luxury resort accommodation',
    privateTours: 'Private tours with guide',
    fineDining: 'Fine dining experiences',
    premiumTransportation: 'Premium transportation',
    spaIncluded: 'Spa treatments included',
    coupleSpa: 'Couple spa treatments',
    photography: 'Professional photography',
    sunsetCruise: 'Sunset cruise',
    
    // Footer
    footerDescription: 'Creating unforgettable romantic experiences in the paradise of Bali. Your dream tropical getaway awaits.',
    quickLinks: 'Quick Links',
    destination: 'Destinations',
    contactInfo: 'Contact Info',
    footerCopyright: '© 2025 Innerlight Tour and Travel. All rights reserved. Crafted with love for unforgettable journeys.',
    termsConditions: 'Terms & Conditions',
    
    // Booking Modal
    bookPackage: 'Book',
    perCouple: 'per couple',
    personalInfo: 'Personal Info',
    travelDates: 'Travel Dates',
    payment: 'Payment',
    confirmation: 'Confirmation',
    personalInformation: 'Personal Information',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phoneNumber: 'Phone Number',
    partnerInformation: 'Partner Information',
    partnerFirstName: 'Partner First Name',
    partnerLastName: 'Partner Last Name',
    checkInDate: 'Check-in Date',
    checkOutDate: 'Check-out Date',
    specialRequests: 'Special Requests (Optional)',
    specialRequestsPlaceholder: 'Any special dietary requirements, accessibility needs, or celebration occasions...',
    paymentMethod: 'Payment Method',
    paySecurely: 'Pay securely with your PayPal account',
    bankTransfer: 'Bank Transfer',
    bankTransferDesc: 'Direct bank transfer with payment instructions',
    bookingSummary: 'Booking Summary',
    package: 'Package',
    price: 'Price',
    guests: 'Guests',
    totalAmount: 'Total Amount',
    bookingConfirmed: 'Booking Confirmed!',
    confirmationMessage: 'Thank you for booking with Innerlight Tour and Travel. We\'ve sent a confirmation email to',
    contactMessage: 'Our team will contact you within 24 hours with detailed itinerary and payment instructions.',
    bookingReference: 'Booking Reference',
    previous: 'Previous',
    next: 'Next',
    confirmBooking: 'Confirm Booking',
    close: 'Close',
    
    // Destinations
    tanjungBenoa: 'Tanjung Benoa',
    uluwatuTemple: 'Uluwatu Temple',
    gwkCulturalPark: 'GWK Cultural Park',
    ubud: 'Ubud',
    sukawati: 'Sukawati',
    tamanBeji: 'Taman Beji',
    sangehMonkeyForest: 'Sangeh Monkey Forest',
    atvAdventureUbud: 'ATV Adventure at Ubud',
    desaPenglipuran: 'Desa Penglipuran',
    goaRajaWaterfall: 'Goa Raja Waterfall',
    baliZooKuta: 'Bali Zoo-Kuta',
    tegalalangRiceTerraces: 'Tegalalang Rice Terraces',
    ubudCulturalCenter: 'Ubud Cultural Center',
    
    // Itinerary Activities
    arrivalTanjungBenoa: 'Arrival & Tanjung Benoa Water Sports',
    uluwatuCultural: 'Uluwatu Temple & Cultural Experience',
    gwkShopping: 'GWK Cultural Park & Shopping',
    ubudImmersion: 'Ubud Cultural Immersion',
    tamanBejiNature: 'Taman Beji & Nature Exploration',
    sangehAdventure: 'Sangeh Monkey Forest Adventure',
    atvVillage: 'ATV Adventure & Village Life',
    penglipuranVillage: 'Desa Penglipuran Traditional Village',
    waterfallZoo: 'Goa Raja Waterfall & Bali Zoo',
    departureDay: 'Departure Day',
    tegalalangArrival: 'Arrival & Tegalalang Rice Terraces',
    ubudCulturalExp: 'Ubud Cultural Center Experience',
    sangehZoo: 'Sangeh & Bali Zoo Adventure',
    tanjungBenoaWater: 'Tanjung Benoa Water Sports',
    uluwatuSunset: 'Uluwatu Temple & Sunset',
    gwkSpa: 'GWK Cultural Park & Spa',
    
    // Tip
    optionalTip: 'Optional tip: $3 per person to support local guides and staff'
  },
  id: {
    // Header
    home: 'Beranda',
    packages: 'Paket',
    about: 'Tentang',
    contact: 'Kontak',
    
    // Hero
    heroTitle: 'Temukan Keajaiban',
    heroSubtitle: 'Rasakan surga dengan paket eksklusif pasangan kami. Dari pantai yang indah hingga pura kuno, ciptakan kenangan tak terlupakan di Pulau Dewata.',
    explorePackages: 'Jelajahi Paket',
    
    // Packages
    exclusivePackages: 'Paket Eksklusif Pasangan',
    packagesDescription: 'Pengalaman yang dikurasi dengan hati-hati untuk pasangan yang mencari romansa, petualangan, dan pendalaman budaya di Bali yang indah.',
    duration: 'Durasi',
    people: '2 Orang',
    chooseExperience: 'Pilih Pengalaman Anda',
    economy: 'Ekonomi',
    standard: 'Standar',
    luxury: 'Mewah',
    features: 'Fitur',
    destinations: 'Destinasi',
    bookNow: 'Pesan Sekarang',
    dailyItinerary: 'Itinerary Harian',
    
    // Package Features
    standardAccommodation: 'Akomodasi standar',
    groupTours: 'Tur grup',
    basicMeals: 'Makanan dasar termasuk',
    sharedTransportation: 'Transportasi bersama',
    superiorAccommodation: 'Akomodasi superior',
    semiPrivateTours: 'Tur semi-privat',
    allMeals: 'Semua makanan termasuk',
    privateTransportation: 'Transportasi privat',
    welcomeDrink: 'Minuman selamat datang',
    romanticDinner: 'Makan malam romantis',
    luxuryResort: 'Akomodasi resort mewah',
    privateTours: 'Tur privat dengan pemandu',
    fineDining: 'Pengalaman fine dining',
    premiumTransportation: 'Transportasi premium',
    spaIncluded: 'Perawatan spa termasuk',
    coupleSpa: 'Perawatan spa pasangan',
    photography: 'Fotografi profesional',
    sunsetCruise: 'Cruise sunset',
    
    // Footer
    footerDescription: 'Menciptakan pengalaman romantis tak terlupakan di surga Bali. Liburan tropis impian Anda menanti.',
    quickLinks: 'Tautan Cepat',
    destination: 'Destinasi',
    contactInfo: 'Info Kontak',
    footerCopyright: '© 2025 Innerlight Tour and Travel. Semua hak dilindungi. Dibuat dengan cinta untuk perjalanan tak terlupakan.',
    termsConditions: 'Syarat & Ketentuan',
    
    // Booking Modal
    bookPackage: 'Pesan',
    perCouple: 'per pasangan',
    personalInfo: 'Info Pribadi',
    travelDates: 'Tanggal Perjalanan',
    payment: 'Pembayaran',
    confirmation: 'Konfirmasi',
    personalInformation: 'Informasi Pribadi',
    firstName: 'Nama Depan',
    lastName: 'Nama Belakang',
    email: 'Email',
    phoneNumber: 'Nomor Telepon',
    partnerInformation: 'Informasi Pasangan',
    partnerFirstName: 'Nama Depan Pasangan',
    partnerLastName: 'Nama Belakang Pasangan',
    checkInDate: 'Tanggal Check-in',
    checkOutDate: 'Tanggal Check-out',
    specialRequests: 'Permintaan Khusus (Opsional)',
    specialRequestsPlaceholder: 'Kebutuhan diet khusus, kebutuhan aksesibilitas, atau acara perayaan...',
    paymentMethod: 'Metode Pembayaran',
    paySecurely: 'Bayar dengan aman menggunakan akun PayPal Anda',
    bankTransfer: 'Transfer Bank',
    bankTransferDesc: 'Transfer bank langsung dengan instruksi pembayaran',
    bookingSummary: 'Ringkasan Pemesanan',
    package: 'Paket',
    price: 'Harga',
    guests: 'Tamu',
    totalAmount: 'Total Jumlah',
    bookingConfirmed: 'Pemesanan Dikonfirmasi!',
    confirmationMessage: 'Terima kasih telah memesan dengan Innerlight Tour and Travel. Kami telah mengirim email konfirmasi ke',
    contactMessage: 'Tim kami akan menghubungi Anda dalam 24 jam dengan itinerary detail dan instruksi pembayaran.',
    bookingReference: 'Referensi Pemesanan',
    previous: 'Sebelumnya',
    next: 'Selanjutnya',
    confirmBooking: 'Konfirmasi Pemesanan',
    close: 'Tutup',
    
    // Destinations
    tanjungBenoa: 'Tanjung Benoa',
    uluwatuTemple: 'Pura Uluwatu',
    gwkCulturalPark: 'Taman Budaya GWK',
    ubud: 'Ubud',
    sukawati: 'Sukawati',
    tamanBeji: 'Taman Beji',
    sangehMonkeyForest: 'Hutan Monyet Sangeh',
    atvAdventureUbud: 'Petualangan ATV di Ubud',
    desaPenglipuran: 'Desa Penglipuran',
    goaRajaWaterfall: 'Air Terjun Goa Raja',
    baliZooKuta: 'Kebun Binatang Bali-Kuta',
    tegalalangRiceTerraces: 'Terasering Tegalalang',
    ubudCulturalCenter: 'Pusat Budaya Ubud',
    
    // Itinerary Activities
    arrivalTanjungBenoa: 'Kedatangan & Olahraga Air Tanjung Benoa',
    uluwatuCultural: 'Pura Uluwatu & Pengalaman Budaya',
    gwkShopping: 'Taman Budaya GWK & Belanja',
    ubudImmersion: 'Pendalaman Budaya Ubud',
    tamanBejiNature: 'Taman Beji & Eksplorasi Alam',
    sangehAdventure: 'Petualangan Hutan Monyet Sangeh',
    atvVillage: 'Petualangan ATV & Kehidupan Desa',
    penglipuranVillage: 'Desa Tradisional Penglipuran',
    waterfallZoo: 'Air Terjun Goa Raja & Kebun Binatang Bali',
    departureDay: 'Hari Keberangkatan',
    tegalalangArrival: 'Kedatangan & Terasering Tegalalang',
    ubudCulturalExp: 'Pengalaman Pusat Budaya Ubud',
    sangehZoo: 'Petualangan Sangeh & Kebun Binatang Bali',
    tanjungBenoaWater: 'Olahraga Air Tanjung Benoa',
    uluwatuSunset: 'Pura Uluwatu & Matahari Terbenam',
    gwkSpa: 'Taman Budaya GWK & Spa',
    
    // Tip
    optionalTip: 'Tip opsional: $3 per orang untuk mendukung pemandu lokal dan staf'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'id'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return {
    ...context,
    language: context.language
  };
};