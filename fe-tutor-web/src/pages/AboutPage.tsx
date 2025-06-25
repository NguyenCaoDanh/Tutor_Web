import React from 'react';

const AboutPage = () => {
  return (
    <section className="min-h-screen pt-[80px] pb-[60px] px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">🌟 Về Chúng Tôi</h1>
        <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
          Chúng tôi là nền tảng giáo dục hàng đầu, kết nối học viên với những gia sư chất lượng trên toàn quốc. Với sứ mệnh mang đến môi trường học tập hiệu quả, linh hoạt và đáng tin cậy, chúng tôi không ngừng đổi mới để phục vụ tốt hơn mỗi ngày.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🎯 Sứ mệnh</h3>
            <p className="text-gray-600 text-sm">Mang đến giải pháp học tập cá nhân hóa, phù hợp với từng học viên.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">💡 Tầm nhìn</h3>
            <p className="text-gray-600 text-sm">Trở thành nền tảng giáo dục trực tuyến hàng đầu Đông Nam Á.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🤝 Giá trị</h3>
            <p className="text-gray-600 text-sm">Chất lượng – Minh bạch – Học viên là trung tâm của mọi hành động.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
