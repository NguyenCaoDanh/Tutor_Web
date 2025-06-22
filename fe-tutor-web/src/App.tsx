import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import AdminRoute from './setting/util/AdminRoute';

// Layouts
import MainLayout from './components/Layout/MainLayout';
import AdminLayout from './components/Layout/AdminLayout';

// Auth Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogOut from './pages/Logout';

// User Pages
import HomePage from './pages/HomePage';

// Admin Pages
import DashBoard01 from './pages/DashBoard01';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ScrollToTop />
      <Routes>
        {/* Main Layout Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="logout" element={<LogOut />} />
          {/* Thêm các route khác vào đây nếu cần */}
        </Route>

        {/* Admin Layout Routes */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<DashBoard01 />} />
            {/* Thêm các route admin khác nếu cần */}
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
