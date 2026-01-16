import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { team } from '../../mock';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200 mb-6">
            <span className="text-sm font-medium text-teal-700">Notre Équipe</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Rencontrez nos{' '}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Une équipe passionnée et expérimentée à votre service pour garantir votre succès.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={member.id}
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-teal-300 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardContent className="p-0">
                {/* Avatar Section */}
                <div className="relative bg-gradient-to-br from-teal-50 to-slate-50 p-8 pb-12">
                  <div className="flex justify-center">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-teal-600 text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                {/* Info Section */}
                <div className="px-6 pb-8 -mt-6 relative">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-teal-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-teal-600 font-medium mb-3 text-center">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {member.bio}
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

export default Team;
