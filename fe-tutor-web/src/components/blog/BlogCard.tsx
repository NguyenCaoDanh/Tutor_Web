import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }: { post: any }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2 line-clamp-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.description}</p>
        <p className="text-gray-400 text-xs mb-3">📅 Ngày đăng: {post.createdAt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="inline-block text-orange-600 font-medium hover:underline"
        >
          👉 Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
