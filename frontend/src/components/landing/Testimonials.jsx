import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { testimonials } from '../../mock';

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200 mb-6">
            <span className="text-sm font-medium text-teal-700">Témoignages</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ce que disent nos{' '}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            La satisfaction de nos clients est notre plus grande fierté.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-teal-300"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                  <Quote className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                  <Avatar className="w-12 h-12 border-2 border-teal-200">
                    <AvatarFallback className="bg-teal-100 text-teal-700 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
