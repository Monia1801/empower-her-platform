
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { ArrowLeft, Search, BookOpen, Award, Briefcase } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Introduction to Coding',
    category: 'Technology',
    level: 'Beginner',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Learn the fundamentals of coding and build your first websites and applications.',
  },
  {
    id: 2,
    title: 'Financial Literacy for Teens',
    category: 'Finance',
    level: 'Beginner',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Gain essential knowledge about money management, savings, and investing for your future.',
  },
  {
    id: 3,
    title: 'Public Speaking & Presentation Skills',
    category: 'Leadership',
    level: 'Intermediate',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Develop confidence and skills to deliver powerful speeches and presentations.',
  },
  {
    id: 4,
    title: 'Women in STEM: Career Pathways',
    category: 'Career',
    level: 'All Levels',
    duration: '5 weeks',
    image: 'https://images.unsplash.com/photo-1581093458791-9a9cd7095f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Explore various career paths in Science, Technology, Engineering, and Mathematics.',
  },
];

const scholarships = [
  {
    id: 1,
    title: "Women in Tech Scholarship",
    organization: "Tech Forward Foundation",
    amount: "$5,000",
    deadline: "March 15, 2023",
    description: "For girls pursuing degrees in computer science, engineering, or related fields."
  },
  {
    id: 2,
    title: "Future Leaders Grant",
    organization: "Global Leadership Institute",
    amount: "$3,000",
    deadline: "April 30, 2023",
    description: "Supporting young women with leadership potential and community involvement."
  },
];

const EduGirls = () => {
  const [activeTab, setActiveTab] = useState('courses');

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
              EduGirls
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-lavender-800 mb-6">
              Learn, Grow, and Excel
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Access quality education resources, scholarships, and career development opportunities designed to help girls succeed academically and professionally.
            </p>
          </div>
          
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className={`py-4 px-6 text-lg font-medium border-b-2 -mb-px transition-colors ${
                activeTab === 'courses'
                  ? 'border-lavender-500 text-lavender-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('courses')}
            >
              <BookOpen className="w-5 h-5 inline mr-2" />
              Courses
            </button>
            <button
              className={`py-4 px-6 text-lg font-medium border-b-2 -mb-px transition-colors ${
                activeTab === 'scholarships'
                  ? 'border-lavender-500 text-lavender-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('scholarships')}
            >
              <Award className="w-5 h-5 inline mr-2" />
              Scholarships
            </button>
            <button
              className={`py-4 px-6 text-lg font-medium border-b-2 -mb-px transition-colors ${
                activeTab === 'career'
                  ? 'border-lavender-500 text-lavender-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('career')}
            >
              <Briefcase className="w-5 h-5 inline mr-2" />
              Career Resources
            </button>
          </div>
        </div>

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="animate-fade-in">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">Featured Courses</h2>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:border-lavender-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="glass-card hover-lift rounded-2xl overflow-hidden flex flex-col h-full animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-48">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex gap-2">
                        <span className="bg-white/90 text-lavender-800 text-xs px-2 py-1 rounded-full">
                          {course.category}
                        </span>
                        <span className="bg-white/90 text-lavender-800 text-xs px-2 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-lavender-800">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      Duration: {course.duration}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Button className="w-full">Enroll Now</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline">View All Courses</Button>
            </div>
          </div>
        )}

        {/* Scholarships Tab */}
        {activeTab === 'scholarships' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Scholarships</h2>
              <p className="text-gray-600">
                Discover scholarships and grants designed to support girls in their educational pursuits.
              </p>
            </div>

            <div className="space-y-6">
              {scholarships.map((scholarship, index) => (
                <div 
                  key={scholarship.id} 
                  className="glass-card hover-lift rounded-2xl p-6 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-lavender-800">{scholarship.title}</h3>
                      <p className="text-gray-600 mb-2">{scholarship.organization}</p>
                      <p className="text-gray-600 mb-4">{scholarship.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-lavender-700">
                          <strong>Amount:</strong> {scholarship.amount}
                        </span>
                        <span className="text-rose-600">
                          <strong>Deadline:</strong> {scholarship.deadline}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button>Apply Now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-lavender-50 rounded-2xl p-8 mt-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-semibold mb-4 text-lavender-800">Need Help Finding Scholarships?</h3>
              <p className="text-gray-600 mb-6">
                Our scholarship matching tool can help you find opportunities that match your profile, interests, and goals.
              </p>
              <Button>Use Scholarship Finder</Button>
            </div>
          </div>
        )}

        {/* Career Resources Tab */}
        {activeTab === 'career' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Career Development</h2>
              <p className="text-gray-600">
                Resources to help you explore career paths, build skills, and prepare for your future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card hover-lift rounded-2xl p-6 text-center animate-scale-in" style={{ animationDelay: '100ms' }}>
                <div className="bg-lavender-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-lavender-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-lavender-800">Career Guides</h3>
                <p className="text-gray-600 mb-6">
                  In-depth guides about various careers and the educational paths to get there.
                </p>
                <Button variant="outline" size="sm">Browse Guides</Button>
              </div>

              <div className="glass-card hover-lift rounded-2xl p-6 text-center animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="bg-lavender-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-lavender-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-lavender-800">Internships</h3>
                <p className="text-gray-600 mb-6">
                  Find internship opportunities with our partner organizations around the world.
                </p>
                <Button variant="outline" size="sm">Find Internships</Button>
              </div>

              <div className="glass-card hover-lift rounded-2xl p-6 text-center animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="bg-lavender-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <Award className="w-8 h-8 text-lavender-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-lavender-800">Skill Building</h3>
                <p className="text-gray-600 mb-6">
                  Workshops and resources to develop essential skills for your future career.
                </p>
                <Button variant="outline" size="sm">Explore Skills</Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lavender-500 to-rose-400 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-semibold mb-4">Career Roadmap Assessment</h3>
                  <p className="text-white/90 mb-0">
                    Take our assessment to discover potential career paths that match your interests, skills, and values.
                  </p>
                </div>
                <Button 
                  className="bg-white text-lavender-700 hover:bg-white/90 min-w-[150px]"
                >
                  Start Assessment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EduGirls;
