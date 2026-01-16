import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { heroContent } from '../../mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-teal-700">
                Votre partenaire de confiance
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              {heroContent.title}
              <span className="block mt-2 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Excellence & Innovation
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {heroContent.subtitle}
            </p>

            <div className="space-y-3">
              {[
                'Solutions professionnelles sur mesure',
                'Accompagnement personnalisé',
                'Expertise reconnue'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg group"
              >
                Démarrer votre projet
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToServices}
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 px-8 py-6 text-lg"
              >
                Découvrir nos services
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] animate-fade-in-delay">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroContent.image}
                alt="Groupe Neema - Équipe professionnelle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">10+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Années</p>
                  <p className="text-lg font-semibold text-gray-900">d'Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating Success Card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">98%</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Taux de</p>
                  <p className="text-lg font-semibold text-gray-900">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
