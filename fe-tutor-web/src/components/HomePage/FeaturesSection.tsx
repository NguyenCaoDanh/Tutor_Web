import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  'Gia sư uy tín, kiểm duyệt kỹ',
  'Học phí hợp lý, linh hoạt',
  'Học online hoặc offline tùy chọn',
  'Hỗ trợ nhanh chóng, tận tình',
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-12">
        Vì Sao Chọn TutorFinder?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-xl transition-all"
          >
            <CheckCircle className="text-orange-500 mb-4" size={50} />
            <p className="text-gray-700 text-lg font-medium">{feature}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
