import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-700 overflow-hidden">
      {/* Content */}
      <div className="text-center px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-extrabold mb-4"
        >
          Tìm Gia Sư Chất Lượng
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base lg:text-lg mb-6 text-gray-100"
        >
          Nhanh chóng - Tiện lợi - Uy tín
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
            Tìm Gia Sư Ngay
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
