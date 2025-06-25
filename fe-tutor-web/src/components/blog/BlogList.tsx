import React from 'react';
import BlogCard from './BlogCard';

const dummyPosts = [
  {
    id: 1,
    title: 'Làm sao để học tốt Toán?',
    description: 'Một số mẹo giúp bạn học Toán hiệu quả và nhớ lâu hơn.',
    thumbnail: 'https://picsum.photos/seed/toan/600/300',
    createdAt: '2025-06-15',
  },
  {
    id: 2,
    title: '10 cách học tiếng Anh siêu tốc',
    description: 'Bạn sẽ ngạc nhiên với kết quả nếu kiên trì áp dụng các mẹo này.',
    thumbnail: 'https://picsum.photos/seed/anh/600/300',
    createdAt: '2025-06-12',
  },
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {dummyPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
