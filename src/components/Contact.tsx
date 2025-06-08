
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saru.tanujaa@gmail.com",
      href: "mailto:saru.tanujaa@gmail.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/tanuja_luffy",
      href: "https://github.com/tanuja_luffy",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/",
      href: "https://linkedin.com/in/",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8522862372",
      href: "tel:+918522862372",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on innovative projects, 
            or simply chat about technology and AI. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{contact.label}</h3>
                  <a 
                    href={contact.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300 break-all"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Collaborate?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss internship opportunities, 
              or just want to connect with a fellow tech enthusiast, I'd love to hear from you!
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:saru.tanujaa@gmail.com', '_blank')}
            >
              <Send className="mr-2 h-5 w-5" />
              Send me an email
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
