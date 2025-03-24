
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  className?: string;
  delay?: number;
}

const Card = ({ title, description, icon, href, className, delay = 0 }: CardProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "glass-card hover-lift rounded-2xl p-6 flex flex-col items-center text-center opacity-0",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
      onMouseEnter={(e) => e.currentTarget.classList.add('animate-scale-in')}
    >
      {icon && (
        <div className="mb-4 text-lavender-600 w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-lavender-800">{title}</h3>
      <p className="text-gray-600 text-balance">{description}</p>
    </Link>
  );
};

export default Card;
