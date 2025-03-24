
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-lavender-500 text-white hover:bg-lavender-600 shadow-sm",
      secondary: "bg-rose-400 text-white hover:bg-rose-500 shadow-sm",
      outline: "border border-lavender-300 hover:bg-lavender-100 text-lavender-700",
      ghost: "hover:bg-lavender-100 text-lavender-700",
    };
    
    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-6 text-lg",
    };
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    
    if (asChild && href) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      );
    }
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
