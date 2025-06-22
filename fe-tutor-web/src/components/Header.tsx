import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface HeaderProps {
  logo?: string;
  menuItems?: Array<{ label: string; href: string }>;
}

const Header = ({
  logo = 'TutorFinder',
  menuItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tìm gia sư', href: '/find-tutor' },
    { label: 'Bài viết', href: '/blog' },
    { label: 'Tuyển dụng', href: '/tuyen-dung' },
    { label: 'Liên hệ', href: '/contact' },
  ],
}: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const isActive = (href: string) => {
    return (
      location.pathname === href ||
      (href !== '/' && location.pathname.startsWith(href))
    );
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md h-20 flex items-center justify-between px-6 lg:px-12 xl:px-20 sticky top-0 z-50 shadow-lg border-b border-gray-200">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-3 hover:opacity-90 transition"
      >
        <span className="text-blue-800 font-extrabold text-2xl tracking-wide">
          {logo}
        </span>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-10">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={cn(
              'transition-all text-lg font-medium relative group',
              isActive(item.href)
                ? 'text-orange-500'
                : 'text-gray-700 hover:text-orange-500'
            )}
          >
            {item.label}
            {/* Hiệu ứng underline gradient */}
            <span
              className={cn(
                'absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all group-hover:w-full',
                isActive(item.href) && 'w-full'
              )}
            />
          </Link>
        ))}
      </nav>

      {/* Right-side Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <Button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white rounded-full px-6 py-2 shadow hover:scale-105 transition-transform">
          Đăng ký học
        </Button>
        <div className="flex space-x-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full shadow hover:scale-105 transition-transform"
              >
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full shadow hover:scale-105 transition-transform"
              >
                Đăng ký
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-red-500 hover:bg-red-500 text-red-500 hover:text-white rounded-full shadow hover:scale-105 transition-transform"
            >
              Đăng xuất
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden text-blue-800 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMobileMenuOpen
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16M4 18h16'
            }
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-white text-gray-800 flex flex-col px-6 py-4 md:hidden z-40 shadow-lg space-y-4 overflow-hidden rounded-b-2xl"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  'w-full py-2 text-lg font-medium relative group',
                  isActive(item.href)
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all group-hover:w-full',
                    isActive(item.href) && 'w-full'
                  )}
                />
              </Link>
            ))}

            <Button className="w-full mt-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white rounded-full shadow hover:scale-105 transition-transform">
              Đăng ký học
            </Button>

            {!token ? (
              <>
                <Link
                  to="/login"
                  className="w-full text-center py-2 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full shadow hover:scale-105 transition-transform"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center py-2 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full shadow hover:scale-105 transition-transform"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Đăng ký
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-center py-2 border border-red-500 hover:bg-red-500 text-red-500 hover:text-white rounded-full shadow hover:scale-105 transition-transform"
              >
                Đăng xuất
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
