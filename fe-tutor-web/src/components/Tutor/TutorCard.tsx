import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '../ui/button';

interface TutorCardProps {
  tutor: {
    name: string;
    subject: string;
    price: string;
    location: string;
    experience: string;
    rating: number;
    avatar: string;
    description: string;
    type: string;
    schedule: string;
  };
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  return (
    <div className="bg-white border rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between">
      <img
        src={tutor.avatar}
        alt={tutor.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 shadow"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
        {tutor.name}
      </h3>
      <p className="text-orange-500 font-semibold text-center mb-2">
        {tutor.subject} - {tutor.price}
      </p>
      <p className="text-gray-600 text-sm mb-2 text-center">
        {tutor.experience} • {tutor.location}
      </p>
      <p className="text-gray-600 text-sm mb-2 text-center">
        Loại hình: {tutor.type}
      </p>
      <p className="text-gray-600 text-sm mb-2 text-center">
        Lịch học: {tutor.schedule}
      </p>

      <div className="flex justify-center items-center mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < Math.floor(tutor.rating) ? 'text-yellow-400' : 'text-gray-300'
            }
            fill={i < Math.floor(tutor.rating) ? 'currentColor' : 'none'}
          />
        ))}
      </div>

      <p className="text-gray-600 text-sm mb-4 text-center">
        {tutor.description}
      </p>

      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow hover:scale-105 transition-transform">
        Liên hệ ngay
      </Button>
    </div>
  );
};

export default TutorCard;
