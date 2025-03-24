
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Shield, Heart } from 'lucide-react';
import Card from '@/components/Card';

const Solutions = () => {
  const solutions = [
    {
      title: 'MentorConnect',
      description: 'Connect with mentors who will guide you on your personal and professional journey.',
      icon: <Users className="w-10 h-10" />,
      href: '/mentor-connect',
      delay: 100,
    },
    {
      title: 'EduGirls',
      description: 'Access to quality education, scholarships, and career development resources.',
      icon: <BookOpen className="w-10 h-10" />,
      href: '/edu-girls',
      delay: 200,
    },
    {
      title: 'SafeHer',
      description: 'AI-powered safety tools with SOS alerts and community support networks.',
      icon: <Shield className="w-10 h-10" />,
      href: '/safe-her',
      delay: 300,
    },
    {
      title: 'Inspiration Hub',
      description: 'Success stories of women who have broken barriers and achieved greatness.',
      icon: <Heart className="w-10 h-10" />,
      href: '/inspiration-hub',
      delay: 400,
    },
  ];

  return (
    <div className="page-container pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-lavender-100 text-lavender-800 text-sm font-medium px-3 py-1 rounded-full mb-6 animate-fade-in">
            Explore
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-lavender-800 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Our Solutions
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Discover the tools and resources we've created to help girls thrive in every aspect of their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              href={solution.href}
              className="animate-scale-in h-full"
              delay={solution.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
