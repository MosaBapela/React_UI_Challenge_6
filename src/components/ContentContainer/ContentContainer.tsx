import React from 'react';
import './ContentContainer.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'full' | 'centered';
};

export const ContentContainer: React.FC<Props> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClass = 'content-container';
  const variantClass = `content-container--${variant}`;
  const combinedClass = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <div className={combinedClass}>
      {children}
    </div>
  );
};