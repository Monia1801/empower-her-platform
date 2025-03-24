
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { ArrowLeft, Bell, MapPin, Shield, Phone, AlertTriangle, Info } from 'lucide-react';

const SafeHer = () => {
  const [location, setLocation] = useState('');
  const [safeMode, setSafeMode] = useState(false);
  
  const handleSafeMode = () => {
    setSafeMode(!safeMode);
    
    if (!safeMode) {
      // This would normally initialize safety tracking
      setTimeout(() => {
        alert('SafeMode activated: Your location is now being monitored for your safety.');
      }, 1000);
    }
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
              SafeHer
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-lavender-800 mb-6">
              Stay Safe, Stay Empowered
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our AI-powered safety tools help you feel secure and protected wherever you go. With features like SOS alerts, location tracking, and community support, you're never alone.
            </p>
          </div>
        </div>

        {/* Safety Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* SOS Button Card */}
          <div className="glass-card rounded-2xl p-8 text-center animate-scale-in lg:col-span-1" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-semibold mb-6 text-lavender-800">Emergency SOS</h3>
            <div className="mb-8">
              <button 
                className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                  safeMode 
                    ? 'bg-green-500 hover:bg-green-600 shadow-lg' 
                    : 'bg-rose-500 hover:bg-rose-600 shadow-lg'
                }`}
                onClick={handleSafeMode}
              >
                <Shield className="w-16 h-16 text-white" />
              </button>
              <p className="mt-4 text-gray-600">
                {safeMode ? 'SafeMode Active' : 'Tap to Activate SafeMode'}
              </p>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              In an emergency, press and hold for 3 seconds to trigger an SOS alert to your emergency contacts and local authorities.
            </p>
            <Button 
              variant="secondary" 
              className="w-full"
            >
              Configure Emergency Contacts
            </Button>
          </div>

          {/* Safety Checkin */}
          <div className="glass-card rounded-2xl p-8 animate-scale-in lg:col-span-2" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-6 text-lavender-800">Safety Check-In</h3>
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow">
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                    Where are you going?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="destination"
                      type="text"
                      placeholder="Enter your destination"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:border-lavender-500"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="arrival-time" className="block text-sm font-medium text-gray-700 mb-1">
                    Expected arrival
                  </label>
                  <input
                    id="arrival-time"
                    type="time"
                    className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:border-lavender-500"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-lavender-600 focus:ring-lavender-500 border-gray-300 rounded" />
                  <span className="text-gray-700">Share location with emergency contacts</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-lavender-600 focus:ring-lavender-500 border-gray-300 rounded" />
                  <span className="text-gray-700">Alert me to check in</span>
                </label>
              </div>
              <Button className="w-full">
                Start Safety Check-In
              </Button>
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Safety Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '100ms' }}>
              <div className="bg-lavender-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Bell className="w-6 h-6 text-lavender-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-lavender-800">SOS Alerts</h3>
              <p className="text-gray-600">
                Send emergency alerts with your location to trusted contacts with a single tap.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-lavender-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <MapPin className="w-6 h-6 text-lavender-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-lavender-800">Location Tracking</h3>
              <p className="text-gray-600">
                Real-time location sharing with optional automatic alerts if you don't arrive at your destination.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-lavender-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <AlertTriangle className="w-6 h-6 text-lavender-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-lavender-800">Danger Zone Alerts</h3>
              <p className="text-gray-600">
                Receive notifications when entering areas with higher safety risks based on community reports.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '400ms' }}>
              <div className="bg-lavender-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Phone className="w-6 h-6 text-lavender-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-lavender-800">Fake Call Feature</h3>
              <p className="text-gray-600">
                Trigger a simulated phone call to your device to help you exit uncomfortable situations.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '500ms' }}>
              <div className="bg-lavender-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Shield className="w-6 h-6 text-lavender-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-lavender-800">AI Safety Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your surroundings and provides safety recommendations based on time, location, and conditions.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '600ms' }}>
              <div className="bg-lavender-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Info className="w-6 h-6 text-lavender-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-lavender-800">Safety Resources</h3>
              <p className="text-gray-600">
                Access to self-defense tips, local emergency numbers, and safety education materials.
              </p>
            </div>
          </div>
        </div>

        {/* Community Safety Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Safety Map</h2>
          <p className="text-gray-600 mb-8">
            View and contribute to our crowdsourced safety map, highlighting safe routes, dangerous areas, and community resources.
          </p>
          
          <div className="bg-lavender-50 rounded-2xl p-6 h-80 flex items-center justify-center animate-fade-in">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-lavender-500 mx-auto mb-4" />
              <p className="text-gray-600">
                Interactive Safety Map <br />
                <span className="text-sm">Coming Soon</span>
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="bg-gradient-to-r from-lavender-500 to-rose-400 rounded-3xl p-10 text-white">
          <h2 className="text-2xl font-bold mb-6">Emergency Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Emergency Services: 911</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>SafeHer Hotline: 1-800-SAFEHER</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Women's Crisis Line: 1-800-799-7233</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Safety Tips</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mt-0.5 mr-2">•</div>
                  <span>Always share your location when traveling alone</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-0.5 mr-2">•</div>
                  <span>Set up regular check-ins with friends or family</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-0.5 mr-2">•</div>
                  <span>Trust your instincts if a situation feels unsafe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button 
              className="bg-white text-lavender-700 hover:bg-white/90"
            >
              View All Safety Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeHer;
