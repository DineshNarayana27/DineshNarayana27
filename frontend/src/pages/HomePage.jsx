import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <>
      <Hero />
      <section id="articles" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Latest Articles
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Card
              title="The Future of Ethical AI"
              description="An exploration of how we can guide artificial intelligence towards a more humane future."
              link="#"
              linkText="Read More"
            />
            <Card
              title="Sustainable Living: A Practical Guide"
              description="Simple steps you can take to reduce your environmental footprint and live more sustainably."
              link="#"
              linkText="Read More"
            />
            <Card
              title="Building Stronger Communities"
              description="How to foster connection and collaboration in your local neighborhood."
              link="#"
              linkText="Read More"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Community Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Card
              title="Project Clean Water"
              description="A community-driven initiative to provide clean drinking water to underserved areas."
              link="#"
              linkText="Learn More"
            />
            <Card
              title="Open Source Education Platform"
              description="Creating a free and accessible education platform for everyone, everywhere."
              link="#"
              linkText="Contribute"
            />
            <Card
              title="Mental Health Awareness App"
              description="A mobile app designed to provide resources and support for mental health."
              link="#"
              linkText="Get Involved"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            We are a growing community of thinkers, creators, and doers who believe in the power of collaboration to solve the world's most pressing challenges. Our mission is to provide a platform for individuals to share their knowledge, work together on meaningful projects, and inspire a global movement for positive change. We believe that by moving away from greed and chaos, we can build a more peaceful, free, and equitable world for everyone.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
