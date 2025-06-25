import React from 'react';

const RecruitPage = () => {
  return (
    <section className="min-h-screen pt-[80px] pb-[60px] px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">🚀 Tuyển Dụng Gia Sư</h1>
        <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
          Bạn có đam mê giảng dạy và muốn kiếm thêm thu nhập? Hãy trở thành gia sư của chúng tôi và đồng hành cùng hàng ngàn học viên trên cả nước!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-left">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">📌 Yêu cầu</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Sinh viên hoặc đã tốt nghiệp đại học</li>
              <li>Có kiến thức chuyên môn vững</li>
              <li>Kỹ năng truyền đạt tốt, thái độ tích cực</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">🎁 Quyền lợi</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Chủ động chọn lịch dạy và học viên</li>
              <li>Hỗ trợ từ đội ngũ quản lý</li>
              <li>Thu nhập hấp dẫn, thanh toán đúng hạn</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-blue-700 mb-4">📥 Đăng ký trở thành gia sư</h3>
          <form className="max-w-md mx-auto text-left space-y-4">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full border px-4 py-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded-lg"
            />
            <textarea
              placeholder="Giới thiệu bản thân"
              rows={4}
              className="w-full border px-4 py-2 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Gửi hồ sơ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecruitPage;
