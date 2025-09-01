import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-50 text-center py-20 sm:py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Together, We Can Change the World
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          A community of passionate individuals dedicated to making a positive impact. Share your knowledge, collaborate on projects, and be part of the change.
        </p>
        <Link
          to="/join"
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
