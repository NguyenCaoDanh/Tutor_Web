import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserRound, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const tutors = [
  { name: 'Nguyễn Văn A', subject: 'Toán', price: '150,000đ/giờ', rating: 4.5 },
  { name: 'Trần Thị B', subject: 'Anh Văn', price: '200,000đ/giờ', rating: 5 },
  { name: 'Phạm Văn C', subject: 'Lý', price: '180,000đ/giờ', rating: 4 },
  { name: 'Lê Thị D', subject: 'Hóa', price: '170,000đ/giờ', rating: 4.8 },
  { name: 'Hoàng Văn E', subject: 'Sinh học', price: '160,000đ/giờ', rating: 4.2 },
];

const subjects = ['Tất cả', 'Toán', 'Anh Văn', 'Lý', 'Hóa', 'Sinh học'];

const TutorsSection = () => {
  const [selectedSubject, setSelectedSubject] = useState('Tất cả');

  const filteredTutors = selectedSubject === 'Tất cả'
    ? tutors
    : tutors.filter((tutor) => tutor.subject === selectedSubject);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white text-center">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-10 animate-pulse">Gia Sư Nổi Bật</h2>

      {/* Bộ lọc môn học */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {subjects.map((subject, index) => (
          <button
            key={index}
            onClick={() => setSelectedSubject(subject)}
            className={`px-4 py-2 rounded-full border ${
              selectedSubject === subject
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 hover:bg-orange-100'
            } transition-all shadow hover:scale-105`}
          >
            {subject}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {filteredTutors.map((tutor, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-6 bg-white border border-gray-200 rounded-3xl shadow hover:shadow-2xl cursor-pointer transition-all mx-4"
            >
              {/* Card Content */}
              <div className="relative flex flex-col items-center space-y-4 z-10">
                {/* Avatar */}
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full shadow-lg group-hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all">
                  <UserRound size={40} />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-700 transition-all">
                  {tutor.name}
                </h3>

                {/* Subject */}
                <p className="text-gray-600 group-hover:text-gray-800 transition">{tutor.subject}</p>

                {/* Price */}
                <p className="text-orange-500 font-semibold text-lg mt-2">{tutor.price}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(tutor.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill={i < Math.floor(tutor.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({tutor.rating})</span>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white rounded-full shadow hover:shadow-lg transition-transform"
                >
                  Xem chi tiết
                </motion.button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TutorsSection;
