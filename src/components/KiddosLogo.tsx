import React, { useState } from 'react';

interface KiddosLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const KiddosLogo: React.FC<KiddosLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [imgSrc, setImgSrc] = useState<string>('IMG_6373.png');
  const [isFallback, setIsFallback] = useState<boolean>(false);

  // Dimensions for circular badge
  const sizeClasses = {
    sm: 'w-12 h-12 min-w-[3rem]',
    md: 'w-16 h-16 min-w-[4rem]',
    lg: 'w-24 h-24 min-w-[6rem]',
    xl: 'w-32 h-32 min-w-[8rem]',
  };

  const textClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const handleImgError = () => {
    if (!isFallback) {
      setImgSrc('https://i.ibb.co/C3LmJh1q/IMG-6368.jpg');
      setIsFallback(true);
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Golden/Amber circular badge with no white background for the logo */}
      <div
        className={`relative rounded-full overflow-hidden bg-[#FFFBF0] border-2 border-amber-400 shadow-sm flex items-center justify-center shrink-0 ${sizeClasses[size]} hover:scale-105 transition-all duration-300`}
      >
        <img
          src={imgSrc}
          alt="Kiddos Daycare Logo"
          onError={handleImgError}
          className={`w-full h-full object-contain mix-blend-multiply p-1 ${
            isFallback ? 'scale-[1.9] object-[center_49%]' : 'scale-[1.1] object-center'
          }`}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight select-none">
          <div className={`font-bold tracking-tight ${textClasses[size]}`}>
            <span className="text-[#4CAF50]">K</span>
            <span className="text-[#FFEB3B] [text-shadow:_0_1px_1px_rgba(0,0,0,0.15)]">i</span>
            <span className="text-[#F44336]">d</span>
            <span className="text-[#FFEB3B] [text-shadow:_0_1px_1px_rgba(0,0,0,0.15)]">d</span>
            <span className="text-[#2196F3]">o</span>
            <span className="text-[#9C27B0]">s</span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-[#2196F3] tracking-wide font-serif italic">
            Group Family Daycare
          </span>
        </div>
      )}
    </div>
  );
};


