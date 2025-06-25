import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import TutorCard from '../components/Tutor/TutorCard';
import TutorFilter from '../components/Tutor/TutorFilter';

const tutors = [/* dữ liệu mẫu như trước */];

const FindTutorPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Tất cả');
  const [sortOption, setSortOption] = useState('default');

  const filteredTutors = tutors
    .filter(
      (tutor) =>
        (tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tutor.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tutor.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterType === 'Tất cả' || tutor.type === filterType)
    )
    .sort((a, b) => {
      if (sortOption === 'priceAsc') return parseInt(a.price) - parseInt(b.price);
      if (sortOption === 'priceDesc') return parseInt(b.price) - parseInt(a.price);
      if (sortOption === 'ratingDesc') return b.rating - a.rating;
      return 0;
    });

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-4 mb-12">
        <div className="flex items-center bg-white border rounded-full shadow px-4 py-3">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Tìm theo tên, môn học hoặc địa điểm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-gray-700 bg-transparent"
          />
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 ml-2">
            Tìm kiếm
          </Button>
        </div>
      </div>

      {/* Filter and Sort */}
      <TutorFilter
        filterType={filterType}
        setFilterType={setFilterType}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {/* Tutor List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor, index) => <TutorCard key={index} tutor={tutor} />)
        ) : (
          <div className="col-span-3 text-center text-gray-600 text-lg">
            Không tìm thấy gia sư phù hợp.
          </div>
        )}
      </div>
    </section>
  );
};

export default FindTutorPage;
