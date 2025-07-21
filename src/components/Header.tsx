import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-emerald-600">
              Innerlight Tour and Travel
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">{t('home')}</a>
              <a href="#packages" className="text-gray-700 hover:text-emerald-600 transition-colors">{t('packages')}</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">{t('about')}</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">{t('contact')}</a>
            </nav>

            {/* Language Toggle */}
            <div className="hidden md:flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-600" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`px-2 py-1 text-sm rounded transition-colors ${
                  language === 'id' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                ID
              </button>
            </div>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">{t('home')}</a>
              <a href="#packages" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">{t('packages')}</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">{t('about')}</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">{t('contact')}</a>
            </nav>
            
            {/* Mobile Language Toggle */}
            <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
              <Globe className="h-4 w-4 text-gray-600" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'id' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                Indonesia
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;