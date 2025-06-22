import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Code,
  Calculator,
  FlaskConical,
  Languages,
  Atom,
} from 'lucide-react';

const subjects = [
  { name: 'Toán', icon: <Calculator size={32} />, gradient: 'from-pink-400 to-pink-600' },
  { name: 'Lý', icon: <Atom size={32} />, gradient: 'from-purple-400 to-purple-600' },
  { name: 'Hóa', icon: <FlaskConical size={32} />, gradient: 'from-green-400 to-green-600' },
  { name: 'Anh Văn', icon: <Languages size={32} />, gradient: 'from-yellow-400 to-yellow-600' },
  { name: 'Lập trình', icon: <Code size={32} />, gradient: 'from-blue-400 to-blue-600' },
  { name: 'Sinh học', icon: <BookOpen size={32} />, gradient: 'from-orange-400 to-orange-600' },
];

const SubjectsSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-12">
        Môn Học Phổ Biến
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`p-6 bg-white border border-gray-200 rounded-3xl shadow hover:shadow-2xl cursor-pointer transition-all group`}
          >
            <div className="flex flex-col items-center space-y-4">
              <div
                className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${subject.gradient} text-white rounded-full shadow-lg group-hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all`}
              >
                {subject.icon}
              </div>
              <p className="text-lg font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-all">
                {subject.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SubjectsSection;
