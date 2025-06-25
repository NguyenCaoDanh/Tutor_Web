import React, { useState, useEffect } from 'react';
import BlogList from '../components/blog/BlogList';
import BlogSidebar from '../components/blog/BlogSidebar';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BlogPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
  }, [showSidebar]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Toggle button (mobile) */}
      <button
        className="fixed top-1/2 left-3 -translate-y-1/2 z-50 p-3 bg-white rounded-full shadow-lg border border-gray-300 lg:hidden"
        onClick={() => setShowSidebar(true)}
      >
        <FaBars className="text-xl text-blue-700" />
      </button>

      {/* Sidebar (mobile overlay) */}
      <AnimatePresence>
        {showSidebar && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSidebar(false)}
            />

            {/* Sidebar drawer */}
            <motion.div
              className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-2xl pt-[80px] p-6 overflow-y-auto"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
            >
              {/* Close button */}
              <button
                onClick={() => setShowSidebar(false)}
                className="absolute top-4 right-4 text-xl text-red-500"
              >
                <FaTimes />
              </button>
              <BlogSidebar />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="pt-[80px] pb-[60px] px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        {/* Sidebar (desktop only) */}
        <div className="hidden lg:block">
          <BlogSidebar />
        </div>

        {/* Blog list */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-8 tracking-tight">
            📰 Bài Viết Mới Nhất
          </h1>
          <BlogList />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
