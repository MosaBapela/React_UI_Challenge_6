import React from 'react';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
};

export const IconButton: React.FC<Props> = ({ src, alt = '', className = '', onClick }) => {
  return (
    <div className={`navbar__action-btn ${className}`.trim()} onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default IconButton;
