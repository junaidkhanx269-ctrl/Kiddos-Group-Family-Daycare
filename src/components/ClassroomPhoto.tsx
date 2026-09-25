import React from 'react';

export type PhotoId = 'circle-time' | 'jungle-room' | 'learning-tables' | 'sun-corner' | 'location-exterior';

interface ClassroomPhotoProps {
  id: PhotoId;
  title?: string;
  className?: string;
  aspectRatio?: string;
  onClick?: () => void;
}

const photoUrls: Record<PhotoId, string> = {
  'circle-time': 'https://i.ibb.co/s99HXYBk/IMG-6365.jpg',
  'jungle-room': 'https://i.ibb.co/MDb3k4Sw/IMG-6366.jpg',
  'learning-tables': 'https://i.ibb.co/XZQ863Fv/IMG-6367.jpg',
  'sun-corner': 'https://i.ibb.co/DDVX5hnc/IMG-6369.jpg',
  'location-exterior': 'https://i.ibb.co/gLNxZpds/IMG-6370.jpg',
};

export const ClassroomPhoto: React.FC<ClassroomPhotoProps> = ({
  id,
  title,
  className = '',
  aspectRatio = 'aspect-[4/3]',
  onClick,
}) => {
  const imageUrl = photoUrls[id];

  return (
    <div
      onClick={onClick}
      className={`relative group overflow-hidden rounded-2xl shadow-md border-4 border-white bg-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        onClick ? 'cursor-pointer' : ''
      } ${aspectRatio} ${className}`}
    >
      <img
        src={imageUrl}
        alt={title || id}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="text-white w-full">
          <p className="text-xs font-semibold text-yellow-300 tracking-wider uppercase">Classroom Gallery</p>
          {title && (
            <h4 className="text-base md:text-lg font-bold font-poppins mt-0.5 leading-tight">{title}</h4>
          )}
        </div>
      </div>
    </div>
  );
};
