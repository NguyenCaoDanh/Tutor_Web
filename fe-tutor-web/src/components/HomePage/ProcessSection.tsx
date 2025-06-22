import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  'Đăng ký tài khoản',
  'Tìm gia sư phù hợp',
  'Đặt lịch học',
  'Bắt đầu học ngay',
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white text-center">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-16 animate-fade-up">
        Quy Trình Tìm Gia Sư
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 px-4 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-center lg:flex-row flex-col gap-4 relative group"
          >
            {/* Số thứ tự */}
            <motion.div
              whileHover={{ scale: 1.2, boxShadow: '0 0 20px rgba(255,165,0,0.6)' }}
              className="p-6 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full shadow-lg transition-all"
            >
              <span className="text-2xl font-extrabold">{index + 1}</span>
            </motion.div>

            {/* Nội dung */}
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold text-gray-700 group-hover:text-orange-600 transition-all max-w-xs text-center lg:text-left"
            >
              {step}
            </motion.p>

            {/* Mũi tên */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="hidden lg:block"
              >
                <ArrowRight className="text-orange-500" size={32} />
              </motion.div>
            )}

            {/* Timeline dọc khi mobile */}
            {index < steps.length - 1 && (
              <div className="lg:hidden w-1 h-8 bg-orange-500"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
