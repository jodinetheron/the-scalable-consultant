import React from 'react';

interface LogoProps {
  variant?: 'default' | 'dark' | 'white'; // This prop will now primarily affect the TEXT color
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  className = '',
}) => {
  // This function now primarily determines the TEXT color
  const getTextColor = () => {
    switch (variant) {
      case 'white':
        return 'text-white';
      case 'dark':
        return 'text-space-dark';
      default:
        // Use a default text color that works with the gradient icon
        // Let's assume space-dark is a good default text color here
        return 'text-space-dark';
    }
  };

  const renderLogo = () => {
    // Define a unique ID for the gradient
    const gradientId = "rocketStrokeGradient";

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        // Stroke is now handled by the gradient reference below
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        // Keep width/height for sizing, className might be used for layout/margin
        width="40"
        height="40"
        // className is removed from SVG itself as color comes from gradient
      >
        {/* Define the gradient */}
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            {/* Attempt to use CSS variables, fallback to hex if needed */}
            {/* Adjust these colors to match your desired text-gradient */}
            <stop offset="0%" stopColor="var(--color-space-blue, #0077FF)" />
            <stop offset="100%" stopColor="var(--color-space-purple, #6A0DAD)" />
            {/* --color-space-purple was just a guess, replace #6A0DAD if needed */}
          </linearGradient>
        </defs>

        {/* Apply the gradient stroke to all paths */}
        <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' stroke={`url(#${gradientId})`}></path>
        <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' stroke={`url(#${gradientId})`}></path>
        <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' stroke={`url(#${gradientId})`}></path>
        <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' stroke={`url(#${gradientId})`}></path>
      </svg>
    );
  };

  // This part uses getTextColor() for the text spans
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        {renderLogo()}
      </div>
      <div className="font-display font-semibold text-xl leading-none">
        <span className={getTextColor()}>The </span>
        <span className={getTextColor()}>Scalable</span>
        <div className={getTextColor()}>Consultant</div>
      </div>
    </div>
  );
};

export default Logo;
