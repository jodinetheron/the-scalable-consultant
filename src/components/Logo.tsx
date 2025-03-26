
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'dark' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const getColor = () => {
    switch (variant) {
      case 'white':
        return 'text-white';
      case 'dark':
        return 'text-space-dark';
      default:
        return 'text-space-blue';
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${getColor()}`}
        >
          <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
          <path
            d="M20 8C20 8 14 14 14 20C14 26 20 32 20 32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 8C20 8 26 14 26 20C26 26 20 32 20 32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="2" fill="currentColor" />
          <circle cx="20" cy="8" r="1.5" fill="currentColor" />
          <circle cx="20" cy="32" r="1.5" fill="currentColor" />
        </svg>
        <div className="absolute top-[10px] left-[10px] h-20 w-20 animate-orbit opacity-0">
          <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-space-teal"></div>
        </div>
      </div>
      <div className="font-display font-semibold text-xl leading-none">
        <span className={getColor()}>The </span>
        <span className={getColor()}>Scalable</span>
        <div className={getColor()}>Consultant</div>
      </div>
    </div>
  );
};

export default Logo;
