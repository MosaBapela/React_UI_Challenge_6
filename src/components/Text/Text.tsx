import React, { type JSX } from 'react';
import './Text.css';

type Props = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: 'primary' | 'secondary' | 'white' | 'black' | 'orange';
  size?: 'small' | 'medium' | 'large' | 'xl';
  weight?: 'normal' | 'medium' | 'bold';
};

export const Text: React.FC<Props> = ({
  variant = 'p',
  children,
  className = '',
  style,
  color,
  size,
  weight
}) => {
  const baseClass = 'text';
  const variantClass = `text--${variant}`;
  const colorClass = color ? `text--${color}` : '';
  const sizeClass = size ? `text--size-${size}` : '';
  const weightClass = weight ? `text--weight-${weight}` : '';
  
  const combinedClass = `${baseClass} ${variantClass} ${colorClass} ${sizeClass} ${weightClass} ${className}`.trim();

  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag className={combinedClass} style={style}>
      {children}
    </Tag>
  );
};