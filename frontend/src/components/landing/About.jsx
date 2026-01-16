import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import { aboutContent } from '../../mock';

const iconMap = {
  Target,
  Heart,
  Sparkles
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200 mb-6">
            <span className="text-sm font-medium text-teal-700">À Propos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {aboutContent.title}
          </h2>
          <p className="text-xl text-gray-600">
            {aboutContent.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutContent.image}
                alt="Équipe Groupe Neema"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {aboutContent.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                    {highlight.value}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {aboutContent.values.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all hover:border-teal-300"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  {IconComponent && <IconComponent className="w-7 h-7 text-teal-600" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
