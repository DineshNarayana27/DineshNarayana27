import React from 'react';

const SubmitProjectPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Project submission is not yet implemented.');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Share Your Project</h1>
        <p className="text-gray-600 mb-8">Showcase a project you're proud of.</p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Project Title
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="title"
                id="title"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Open Source Community Garden App"
              />
            </div>
          </div>

          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Project Link (e.g., GitHub, live demo)
            </label>
            <div className="mt-1">
              <input
                type="url"
                name="link"
                id="link"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="https://github.com/..."
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Project Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows="6"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Describe your project, its goals, and how others can contribute..."
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProjectPage;
