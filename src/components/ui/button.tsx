// components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger' | 'destructive'; // Add 'destructive' variant
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick, type = 'button', variant = 'primary' }) => {
  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-500';
      case 'secondary':
        return 'bg-gray-600 hover:bg-gray-500';
      case 'danger':
        return 'bg-red-600 hover:bg-red-500';
      case 'destructive': // Handle the 'destructive' variant
        return 'bg-red-700 hover:bg-red-600';
      default:
        return 'bg-blue-600 hover:bg-blue-500';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-md text-white transition ${getVariantClasses(variant)} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
