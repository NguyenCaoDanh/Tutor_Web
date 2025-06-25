import React from 'react';

interface TutorFilterProps {
  filterType: string;
  setFilterType: (value: string) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
}

const TutorFilter: React.FC<TutorFilterProps> = ({ filterType, setFilterType, sortOption, setSortOption }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 flex-wrap">
        {['Tất cả', 'Dạy kèm 1-1', 'Dạy nhóm'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-full border ${
              filterType === type ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            } transition`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <label className="font-medium text-gray-700">Sắp xếp:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded px-3 py-2 outline-none"
        >
          <option value="default">Mặc định</option>
          <option value="priceAsc">Học phí thấp đến cao</option>
          <option value="priceDesc">Học phí cao đến thấp</option>
          <option value="ratingDesc">Đánh giá cao nhất</option>
        </select>
      </div>
    </div>
  );
};

export default TutorFilter;
