import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome to HomeLink
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At HomeLink, we believe in making the process of finding your dream home as seamless as possible. Whether you're looking to buy, sell, or rent, we've got you covered. Our platform offers a comprehensive listing of properties, ranging from cozy apartments to luxurious estates.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Our mission is simple: to connect people with their perfect homes. With our user-friendly interface and advanced search features, you can easily narrow down your options and find a property that meets your specific needs and preferences.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          HomeLink is more than just a listing site - it's a community. Join thousands of satisfied homeowners, renters, and real estate professionals who trust HomeLink for all their property needs.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            to="/search"
            className="text-slate-400  hover:text-slate-700  text-slate text-lg font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Explore Listings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
