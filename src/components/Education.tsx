
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Keshav Memorial Engineering College",
      period: "2022–2026",
      achievement: "CGPA: 8.11",
      level: "Bachelor's in Computer Science and Engineering",
      color: "from-blue-500 to-blue-600"
    },
    {
      institution: "Sri Chaitanya Junior Kalasala",
      period: "2020–2022",
      achievement: "94.8%",
      level: "Intermediate",
      color: "from-purple-500 to-purple-600"
    },
    {
      institution: "Sri Chaitanya Techno School",
      period: "Up to 2020",
      achievement: "CGPA: 10.0",
      level: "Secondary Education",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.institution}</h3>
                    <p className="text-slate-600 mb-2">{edu.level}</p>
                    <p className="text-sm text-slate-500">{edu.period}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-700">{edu.achievement}</span>
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

export default Education;
