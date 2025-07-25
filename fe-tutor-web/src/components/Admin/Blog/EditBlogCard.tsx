import { findBlogById, updateBlog } from "@/service/api/Blog";
import { BASE_API } from "@/setting/constant/app";
import { useEffect, useState } from "react"
import { FaSave, FaTimes, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";

const EditBlogCard = ({ blogId, onClose, onSave }) => {
    const [tieuDe, setTieuDe] = useState("");
    const [noiDung, setNoidung] = useState("");
    const [file, setFile] = useState(null);
    const [hinhAnh, setHinhAnh] = useState("");
    const fetchData = async () => {
        try {
            const response = await findBlogById(blogId);
            setTieuDe(response?.data?.data.tieuDe || "");
            setNoidung(response?.data?.data?.noiDung || "");
            setHinhAnh(BASE_API + response?.data?.data?.hinhAnh || "")
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [blogId]);
    const handleSave = async () => {
        try {
            const BlogDTO = {
                tieuDe: tieuDe,
                noiDung: noiDung
            }
            await updateBlog(BlogDTO, file, blogId);
            onSave?.();
            onClose?.();
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }
    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            setFile(selected);
            setHinhAnh(URL.createObjectURL(selected));
        }
    };

    const handleRemoveImage = () => {
        setFile(null);
        setHinhAnh("");
    };
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-screen overflow-y-auto p-8">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                        <h3 className="text-3xl font-semibold text-gray-800">Chỉnh sửa blog</h3>
                        <button onClick={onClose} className="text-red-600 hover:text-red-800">
                            <FaTimes className="text-2xl" />
                        </button>
                    </div>

                    {/* Tiêu đề blog */}
                    <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1 ">Tiêu đề</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:outline-none"
                            value={tieuDe}
                            onChange={(e) => setTieuDe(e.target.value)}
                            placeholder="Nhập tiêu đề..."
                        />
                    </div>
                    <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung</label>
                        <ReactQuill
                            value={noiDung}
                            onChange={setNoidung}
                            className="h-[100px]"
                            placeholder="Nhập nội dung blog..."
                        />
                    </div>
                    <div className="mt-12" style={{ marginTop:'12vh' }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ảnh sản phẩm</label>
                        <div className="flex flex-col gap-3">
                            {hinhAnh && (
                                <div className="relative w-fit">
                                    <img
                                        src={hinhAnh}
                                        alt="Preview"
                                        className="w-40 h-40 object-cover rounded-xl border border-gray-300 shadow"
                                    />
                                    <button
                                        className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                                        onClick={handleRemoveImage}
                                        title="Xóa ảnh"
                                    >
                                        <FaTrash size={12} />
                                    </button>
                                </div>
                            )}


                            <label className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 w-fit">
                                Chọn ảnh
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"

                                />
                            </label>
                        </div>
                    </div>

                    <div>
                        <div>

                        </div>
                        <div className="mt-10 flex justify-end gap-4 sticky bottom-0 bg-white pt-6 pb-4">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all shadow"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all shadow flex items-center gap-2"
                            >
                                <FaSave /> Lưu Thay đổi
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default EditBlogCard;