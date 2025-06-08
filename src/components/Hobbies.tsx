
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Waves, Rocket, Brain, Camera, Music } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    { name: "Dancing", icon: Music, color: "from-pink-500 to-rose-500" },
    { name: "Cooking", icon: Heart, color: "from-orange-500 to-red-500" },
    { name: "Jigsaw Puzzles", icon: Brain, color: "from-purple-500 to-indigo-500" },
    { name: "Home Workouts", icon: Heart, color: "from-green-500 to-emerald-500" },
    { name: "Meditation", icon: Brain, color: "from-blue-500 to-cyan-500" },
    { name: "Ocean Exploration", icon: Waves, color: "from-cyan-500 to-blue-500" },
    { name: "Space Exploration", icon: Rocket, color: "from-indigo-500 to-purple-500" },
    { name: "Documentaries", icon: Camera, color: "from-slate-500 to-slate-600" }
  ];

  return (
    <section id="hobbies" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hobbies & Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hobbies.map((hobby, index) => {
                const IconComponent = hobby.icon;
                return (
                  <div key={index} className="flex flex-col items-center p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:scale-105 group cursor-default">
                    <div className={`w-12 h-12 bg-gradient-to-br ${hobby.color} rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 text-center">{hobby.name}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring the mysteries of the ocean and space, 
                enhancing my emotional intelligence, or getting lost in thought-provoking documentaries.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hobbies;
