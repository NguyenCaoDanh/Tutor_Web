import React, { useState } from 'react';
import {
  FaCalculator,
  FaLanguage,
  FaLightbulb,
  FaLaptopCode,
} from 'react-icons/fa';
import clsx from 'clsx';

const topics = [
  { label: 'Toán học', icon: <FaCalculator /> },
  { label: 'Tiếng Anh', icon: <FaLanguage /> },
  { label: 'Kỹ năng mềm', icon: <FaLightbulb /> },
  { label: 'Lập trình', icon: <FaLaptopCode /> },
];

const BlogSidebar = () => {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  return (
    <aside className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl border border-gray-100 w-full h-full overflow-y-auto">
      <h3 className="text-2xl font-extrabold text-blue-700 mb-6 tracking-tight">📚 Chủ đề phổ biến</h3>
      <ul className="space-y-4">
        {topics.map((topic) => {
          const isActive = activeTopic === topic.label;
          return (
            <li key={topic.label}>
              <button
                onClick={() => setActiveTopic(topic.label)}
                className={clsx(
                  'w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left group',
                  isActive
                    ? 'bg-orange-100 text-orange-700 shadow-md'
                    : 'hover:bg-orange-50 text-gray-700'
                )}
              >
                <div
                  className={clsx(
                    'p-2 rounded-full text-white text-lg transition-colors',
                    isActive
                      ? 'bg-orange-500'
                      : 'bg-blue-500 group-hover:bg-orange-400'
                  )}
                >
                  {topic.icon}
                </div>
                <span className="font-semibold text-base">{topic.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default BlogSidebar;
