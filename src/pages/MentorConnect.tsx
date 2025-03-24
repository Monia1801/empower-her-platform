
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { ArrowLeft, Star, Search, Filter } from 'lucide-react';

const mentors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Tech Executive & Computer Scientist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.9,
    reviews: 124,
    expertise: ['Career Development', 'Tech Industry', 'Leadership'],
    availability: 'Available this week',
  },
  {
    id: 2,
    name: 'Maya Patel',
    title: 'Entrepreneur & Business Coach',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.8,
    reviews: 98,
    expertise: ['Entrepreneurship', 'Business Strategy', 'Networking'],
    availability: 'Limited availability',
  },
  {
    id: 3,
    name: 'Dr. Rebecca Lee',
    title: 'Medical Researcher & Healthcare Advocate',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 5.0,
    reviews: 87,
    expertise: ['Medical Careers', 'Research', 'Work-Life Balance'],
    availability: 'Available next week',
  },
  {
    id: 4,
    name: 'Professor Amara Wilson',
    title: 'STEM Educator & Diversity Advocate',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.7,
    reviews: 112,
    expertise: ['STEM Education', 'Academia', 'Public Speaking'],
    availability: 'Available this week',
  },
];

const MentorConnect = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMentors, setFilteredMentors] = useState(mentors);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = mentors.filter(mentor => 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredMentors(filtered);
  };

  return (
    <div className="page-container pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <Link to="/solutions" className="inline-flex items-center text-lavender-700 hover:text-lavender-800 mb-6 animated-link">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Solutions
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block bg-lavender-100 text-lavender-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              MentorConnect
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-lavender-800 mb-6">
              Find Your Perfect Mentor
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with experienced mentors who can guide you on your journey to personal and professional growth. Our mentors are leaders in their fields and passionate about helping young women succeed.
            </p>
          </div>
          
          <form onSubmit={handleSearch} className="max-w-2xl flex gap-3">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, title, or expertise..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:border-lavender-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
            <Button variant="outline" type="button">
              <Filter className="w-5 h-5 mr-1" /> Filter
            </Button>
          </form>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Available Mentors</h2>
          <div className="text-sm text-gray-500">
            Showing {filteredMentors.length} of {mentors.length} mentors
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMentors.map((mentor, index) => (
            <div 
              key={mentor.id} 
              className="glass-card hover-lift rounded-2xl overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-600 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1 inline" fill="currentColor" />
                    {mentor.rating} ({mentor.reviews} reviews)
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1 text-lavender-800">{mentor.name}</h3>
                <p className="text-gray-600 mb-3">{mentor.title}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {mentor.expertise.map(exp => (
                      <span 
                        key={exp} 
                        className="bg-lavender-100 text-lavender-700 text-xs px-2 py-1 rounded-full"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{mentor.availability}</p>
                </div>
                
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorConnect;
