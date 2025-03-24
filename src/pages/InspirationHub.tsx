
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { ArrowLeft, Heart, Share2, MessageCircle, Filter } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: "Dr. Mae Jemison",
    title: "First African American Woman in Space",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    quote: "Never be limited by other people's limited imaginations.",
    story: "Dr. Mae Jemison broke barriers as the first African American woman to travel in space when she served as a mission specialist aboard the Space Shuttle Endeavour. A graduate of Stanford University and Cornell Medical School, Jemison was also a Peace Corps physician and has founded multiple technology companies. Her story is a powerful example of how determination and excellence can overcome societal limitations.",
    category: "Science",
    likes: 248,
    comments: 32,
  },
  {
    id: 2,
    name: "Malala Yousafzai",
    title: "Nobel Peace Prize Laureate & Education Activist",
    image: "https://images.unsplash.com/photo-1516604518909-2d38da2137e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    quote: "One child, one teacher, one book, one pen can change the world.",
    story: "Malala Yousafzai gained international recognition for her advocacy for girls' education in Pakistan, despite facing threats from the Taliban. After surviving an assassination attempt at just 15 years old, she continued her activism globally, becoming the youngest person ever to receive the Nobel Peace Prize. Today, her foundation works to secure girls' rights to education in communities worldwide.",
    category: "Activism",
    likes: 425,
    comments: 64,
  },
  {
    id: 3,
    name: "Geena Davis",
    title: "Actor & Gender Equality Advocate",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    quote: "If she can see it, she can be it.",
    story: "Academy Award-winning actor Geena Davis founded the Geena Davis Institute on Gender in Media after noticing the lack of female characters in children's entertainment. Her research-based organization works with the entertainment industry to increase representation of women and girls in media. Through data-driven advocacy, she has helped create meaningful change in Hollywood's portrayal of female characters.",
    category: "Entertainment",
    likes: 173,
    comments: 29,
  },
  {
    id: 4,
    name: "Reshma Saujani",
    title: "Founder of Girls Who Code",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    quote: "Perfect is the enemy of done.",
    story: "After running for Congress and witnessing the gender gap in computer science education, Reshma Saujani founded Girls Who Code to close the gender gap in technology. The organization has taught coding skills to over 300,000 girls worldwide. Saujani also advocates for policies supporting women's economic advancement and has authored books on leadership and bravery, encouraging girls to embrace imperfection and take risks.",
    category: "Technology",
    likes: 319,
    comments: 47,
  },
];

const InspirationHub = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Science', 'Technology', 'Activism', 'Entertainment', 'Business'];

  const filteredStories = activeCategory === 'All' 
    ? stories 
    : stories.filter(story => story.category === activeCategory);

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
              Inspiration Hub
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-lavender-800 mb-6">
              Stories That Inspire
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the powerful stories of women who have broken barriers, challenged norms, and made history. Let their journeys inspire your own path to greatness.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-lavender-500 text-white'
                    : 'bg-lavender-100 text-lavender-700 hover:bg-lavender-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full bg-lavender-50 text-lavender-700 hover:bg-lavender-100 text-sm font-medium transition-colors flex items-center">
              <Filter className="w-4 h-4 mr-1" />
              More Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredStories.map((story, index) => (
            <div 
              key={story.id} 
              className="glass-card rounded-2xl overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="inline-block bg-white text-lavender-800 text-xs px-2 py-1 rounded-full mb-3">
                    {story.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{story.name}</h3>
                  <p className="text-white/80">{story.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-lg font-medium text-lavender-700 italic mb-4 border-l-4 border-lavender-300 pl-4">
                  "{story.quote}"
                </p>
                <p className="text-gray-600 mb-6">
                  {story.story}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-rose-500 transition-colors">
                      <Heart className="w-5 h-5 mr-1" />
                      <span>{story.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-lavender-600 transition-colors">
                      <MessageCircle className="w-5 h-5 mr-1" />
                      <span>{story.comments}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-lavender-600 transition-colors">
                      <Share2 className="w-5 h-5 mr-1" />
                      <span>Share</span>
                    </button>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Story */}
        <div className="glass-card rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-lavender-800 mb-4">
                Share Your Story
              </h2>
              <p className="text-gray-600 mb-6">
                Everyone has a unique journey worth sharing. Your experiences could inspire others and create meaningful connections within our community.
              </p>
              <Button className="mb-4">
                Submit Your Story
              </Button>
              <p className="text-sm text-gray-500">
                Selected stories will be featured in our community spotlight and may be eligible for our annual Inspiration Awards.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-lavender-100 to-rose-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-lavender-800">Why Share Your Story?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-lavender-600 font-medium">1</span>
                  </div>
                  <span className="text-gray-700">Inspire others on similar journeys</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-lavender-600 font-medium">2</span>
                  </div>
                  <span className="text-gray-700">Connect with a supportive community</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-lavender-600 font-medium">3</span>
                  </div>
                  <span className="text-gray-700">Reflect on your own achievements</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-lavender-600 font-medium">4</span>
                  </div>
                  <span className="text-gray-700">Become a mentor for others</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationHub;
