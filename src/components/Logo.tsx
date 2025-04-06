
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'dark' | 'white';
  className?: string;
  logoStyle?: 'rocket';
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  className = '',
  logoStyle = 'rocket'
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
    // Always return rocket logo since it's our only style now
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${getColor()}`}
      >
        {/* Rocket body */}
        <path 
          d="M20 8L14 20V30C14 30 17 32 20 32C23 32 26 30 26 30V20L20 8Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        {/* Rocket window */}
        <circle 
          cx="20" 
          cy="22" 
          r="2" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
        />
        {/* Rocket fins */}
        <path 
          d="M14 25H10V29L14 27" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        <path 
          d="M26 25H30V29L26 27" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        {/* Rocket flames with gradient */}
        <defs>
          <linearGradient id="flameGradient" x1="20" y1="36" x2="20" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--color-space-purple)" />
            <stop offset="1" stopColor="var(--color-space-blue)" />
          </linearGradient>
        </defs>
        <path 
          d="M17 30C17 33 18 36 20 36C22 36 23 33 23 30" 
          stroke="url(#flameGradient)" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none" 
          className="flame"
        />
      </svg>
    );
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
