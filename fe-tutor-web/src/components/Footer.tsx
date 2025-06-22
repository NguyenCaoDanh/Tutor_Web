import React from "react";
import { cn } from "@/lib/utils";
import { Facebook, Youtube, MessageCircle } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  return (
    <footer
      className={cn(
        "relative z-10 text-gray-700 py-12 px-4 sm:px-6 lg:px-12 bg-white border-t border-gray-200",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              Giới thiệu TutorFinder
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              TutorFinder là nền tảng kết nối học viên với gia sư uy tín và chất lượng. Chúng tôi mang đến giải pháp học tập hiệu quả, linh hoạt và dễ tiếp cận.
            </p>
          </div>

          {/* Column 2: Address */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Địa chỉ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              123 Đường Gia Sư, Phường Học Tập, Quận Tri Thức, TP.HCM
            </p>
          </div>

          {/* Column 3: Hotline */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Hotline</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              0901.123.456 / 0902.654.321
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              Email:{" "}
              <a
                href="mailto:support@tutorfinder.vn"
                className="text-blue-600 hover:underline"
              >
                support@tutorfinder.vn
              </a>
            </p>
          </div>

          {/* Column 4: Quick Links and Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Liên kết nhanh</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                { label: "Trang chủ", href: "/" },
                { label: "Tìm gia sư", href: "/find-tutor" },
                { label: "Môn học", href: "/subjects" },
                { label: "Tuyển dụng", href: "/tuyen-dung" },
                { label: "Liên hệ", href: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-transparent hover:bg-clip-text hover:underline transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6 mt-6">
              <a
                href="#"
                className="text-blue-600 hover:scale-110 hover:text-orange-500 transition-transform duration-300"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:scale-110 hover:text-orange-500 transition-transform duration-300"
                aria-label="YouTube"
              >
                <Youtube size={28} />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:scale-110 hover:text-orange-500 transition-transform duration-300"
                aria-label="Zalo"
              >
                <MessageCircle size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-800">TutorFinder</span>. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
