
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Users, Calendar, Coffee } from 'lucide-react';

const SoftSkills = () => {
  const softSkills = [
    {
      title: "Public Speaking",
      description: "Anchored Orientation Day at NGIT and KMEC",
      icon: Mic,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Event Management",
      description: "Hosted Tricode technical event",
      icon: Calendar,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Community Engagement",
      description: "Anchored Open Mic 3.0 at local café (adaptable, engaging presence)",
      icon: Coffee,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="soft-skills" className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Leadership & Communication
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-full flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">{skill.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
