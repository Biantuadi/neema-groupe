import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { companyInfo } from '../../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GN</span>
              </div>
              <span className="text-xl font-bold text-white">
                {companyInfo.name}
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {companyInfo.tagline}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', id: 'hero' },
                { label: 'Services', id: 'services' },
                { label: 'À Propos', id: 'about' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Conseil en Stratégie</li>
              <li>Développement Commercial</li>
              <li>Gestion des Ressources</li>
              <li>Analyse & Performance</li>
              <li>Innovation & Transformation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-teal-400 transition-colors">
                Mentions légales
              </button>
              <button className="hover:text-teal-400 transition-colors">
                Politique de confidentialité
              </button>
              <span>SIRET: {companyInfo.siret}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
