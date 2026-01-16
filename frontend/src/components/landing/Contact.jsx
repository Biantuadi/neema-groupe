import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { contactInfo } from '../../mock';
import { toast } from 'sonner';

const iconMap = {
  Phone,
  Mail,
  MapPin
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast.success('Message envoyé avec succès!', {
      description: 'Nous vous contacterons dans les plus brefs délais.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200 mb-6">
            <span className="text-sm font-medium text-teal-700">Contact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {contactInfo.title}
          </h2>
          <p className="text-xl text-gray-600">
            {contactInfo.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nos Coordonnées
              </h3>
              <div className="space-y-4">
                {contactInfo.methods.map((method, index) => {
                  const IconComponent = iconMap[method.icon];
                  return (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all hover:border-teal-300 border-gray-200"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors flex-shrink-0">
                            {IconComponent && (
                              <IconComponent className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">
                              {method.label}
                            </p>
                            <a
                              href={method.link}
                              className="text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors"
                            >
                              {method.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl p-8 border border-teal-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Horaires d'ouverture
              </h4>
              <div className="space-y-2 text-gray-700">
                <p>Lundi - Vendredi: 9h00 - 18h00</p>
                <p>Samedi: 9h00 - 13h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 X XX XX XX XX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous de votre projet..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg group"
                >
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
