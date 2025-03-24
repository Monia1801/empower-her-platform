
import React from 'react';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import { Heart, BookOpen, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero 
        title="Empowering Girls to Shape the Future"
        subtitle="EMPOWER HER connects young girls with mentors, education resources, and safety tools to help them reach their full potential."
        ctaText="Explore Our Solutions"
        ctaLink="/solutions"
        image="https://images.unsplash.com/photo-1571894697623-dea2f0cfa967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block bg-lavender-100 text-lavender-800 text-sm font-medium px-3 py-1 rounded-full mb-6 animate-fade-in">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Creating a World Where Every Girl Can Thrive
          </h2>
          <p className="text-lg text-gray-600 mb-10 text-balance animate-fade-in" style={{ animationDelay: '400ms' }}>
            We believe that every girl deserves the opportunity to learn, grow, and pursue her dreams. 
            Through mentorship, education, and safety resources, we're empowering the next generation 
            of women leaders, thinkers, and changemakers.
          </p>
          <Button 
            variant="outline" 
            asChild 
            className="animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            <Link to="/solutions">
              Learn More About Our Mission
            </Link>
          </Button>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-lavender-50 py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-lavender-200 text-lavender-800 text-sm font-medium px-3 py-1 rounded-full mb-6 animate-fade-in">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              How We're Making a Difference
            </h2>
            <p className="text-lg text-gray-600 text-balance animate-fade-in" style={{ animationDelay: '400ms' }}>
              EMPOWER HER offers four key solutions designed to support girls in every aspect of their journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center opacity-0 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-lavender-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Users className="w-8 h-8 text-lavender-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-lavender-800">MentorConnect</h3>
              <p className="text-gray-600 mb-6">Connecting girls with mentors who guide them on their personal and professional journey.</p>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/mentor-connect">Learn More</Link>
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center opacity-0 animate-scale-in" style={{ animationDelay: '400ms' }}>
              <div className="bg-lavender-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-lavender-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-lavender-800">EduGirls</h3>
              <p className="text-gray-600 mb-6">Providing access to quality education, scholarships, and career development resources.</p>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/edu-girls">Learn More</Link>
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center opacity-0 animate-scale-in" style={{ animationDelay: '600ms' }}>
              <div className="bg-lavender-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Shield className="w-8 h-8 text-lavender-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-lavender-800">SafeHer</h3>
              <p className="text-gray-600 mb-6">AI-powered safety tools with SOS alerts and community support networks.</p>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/safe-her">Learn More</Link>
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center opacity-0 animate-scale-in" style={{ animationDelay: '800ms' }}>
              <div className="bg-lavender-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Heart className="w-8 h-8 text-lavender-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-lavender-800">Inspiration Hub</h3>
              <p className="text-gray-600 mb-6">Showcasing success stories of women who have broken barriers and achieved greatness.</p>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/inspiration-hub">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-lavender-500 to-rose-400 rounded-3xl p-12 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-lg mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Community Today
              </h2>
              <p className="text-white/90 text-lg mb-0">
                Sign up now to access all of our resources and start your journey toward empowerment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                asChild
              >
                <Link to="/login">
                  Log In
                </Link>
              </Button>
              <Button
                className="bg-white text-lavender-700 hover:bg-white/90"
                asChild
              >
                <Link to="/signup">
                  Sign Up Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
