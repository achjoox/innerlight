import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

function App() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNow = (packageData: any) => {
    setSelectedPackage(packageData);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPackage(null);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Packages onBookNow={handleBookNow} />
        <Footer />
        
        {isBookingOpen && selectedPackage && (
          <BookingModal 
            package={selectedPackage} 
            onClose={handleCloseBooking} 
          />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;