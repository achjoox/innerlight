import React from 'react';
import { Palmtree, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-xl font-bold text-emerald-400">
                Innerlight Tour and Travel
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">{t('packages')}</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">{t('about')}</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">{t('contact')}</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">{t('termsConditions')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('destinations')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Ubud</li>
              <li>Uluwatu</li>
              <li>Tanjung Benoa</li>
              <li>GWK Cultural Park</li>
              <li>Sangeh Monkey Forest</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactInfo')}</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-sm">info@balibliss.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-sm">+62 361 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-sm">Denpasar, Bali, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;