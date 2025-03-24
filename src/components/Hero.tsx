
import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink, image }: HeroProps) => {
  return (
    <section className="hero-gradient pt-32 pb-20 px-4 md:px-8 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl animate-slide-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lavender-800 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 text-balance">
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <Button 
              size="lg" 
              asChild 
              href={ctaLink}
              className="group"
            >
              <>
                {ctaText}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </>
            </Button>
          )}
        </div>
        
        {image && (
          <div className="relative lg:flex justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-lavender-500 rounded-full blur-3xl opacity-20 animate-float"></div>
              <img 
                src={image} 
                alt="Hero" 
                className="relative z-10 rounded-2xl shadow-xl max-w-full" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
