
import React, { useState } from 'react';

interface LogoProps {
  variant?: 'default' | 'dark' | 'white';
  className?: string;
  logoStyle?: 'orbital' | 'constellation' | 'galaxy' | 'trajectory';
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  className = '',
  logoStyle = 'orbital'
}) => {
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

  const renderLogo = () => {
    switch (logoStyle) {
      case 'constellation':
        return (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${getColor()}`}
          >
            <circle cx="20" cy="20" r="3" fill="currentColor" />
            <circle cx="10" cy="15" r="2" fill="currentColor" />
            <circle cx="30" cy="15" r="2" fill="currentColor" />
            <circle cx="15" cy="30" r="2" fill="currentColor" />
            <circle cx="25" cy="30" r="2" fill="currentColor" />
            <line x1="20" y1="20" x2="10" y2="15" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="20" x2="30" y2="15" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="20" x2="15" y2="30" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="20" x2="25" y2="30" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      
      case 'galaxy':
        return (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${getColor()}`}
          >
            <path
              d="M20 8C26 8 32 14 32 20C32 26 26 32 20 32C14 32 8 26 8 20C8 14 14 8 20 8Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2 2"
            />
            <path
              d="M20 12C24 12 28 16 28 20C28 24 24 28 20 28C16 28 12 24 12 20C12 16 16 12 20 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="26" cy="14" r="1" fill="currentColor" />
            <circle cx="14" cy="26" r="1" fill="currentColor" />
          </svg>
        );
        
      case 'trajectory':
        return (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${getColor()}`}
          >
            <path
              d="M8 32C8 32 16 28 20 24C24 20 28 12 28 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="8" cy="32" r="2" fill="currentColor" />
            <circle cx="28" cy="8" r="2" fill="currentColor" />
            <circle cx="20" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      
      default: // 'orbital'
        return (
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
        );
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        {renderLogo()}
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
