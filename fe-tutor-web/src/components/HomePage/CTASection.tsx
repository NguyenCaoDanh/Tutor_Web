import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-center">
      {/* Background Moving Circle */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, delay: 2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"
      />

      {/* Content */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-extrabold mb-4"
      >
        Đăng Ký Tư Vấn Ngay
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg mb-8 max-w-xl mx-auto"
      >
        Chúng tôi sẽ liên hệ hỗ trợ bạn trong thời gian sớm nhất
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        <Button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all">
          Đăng Ký Ngay
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;
