import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data
const userArticles = [
  { id: 1, title: 'The Future of Ethical AI' },
  { id: 2, title: 'Building Stronger Communities' },
];

const userProjects = [
  { id: 1, title: 'Project Clean Water' },
];

const DashboardPage = () => {
  const handleAction = (action, type, id) => {
    alert(`${action} action for ${type} #${id} is not yet implemented.`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Your Dashboard</h1>
          <p className="text-gray-600">Welcome back, ChangeMaker!</p>
        </div>
        <div className="flex space-x-4">
          <Link to="/submit-article" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            + Submit Article
          </Link>
          <Link to="/submit-project" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors">
            + Submit Project
          </Link>
        </div>
      </div>

      {/* Your Articles Section */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Articles</h2>
        <ul className="space-y-4">
          {userArticles.map(article => (
            <li key={article.id} className="flex justify-between items-center p-4 border rounded-md">
              <span className="text-lg text-gray-700">{article.title}</span>
              <div className="space-x-2">
                <button onClick={() => handleAction('Edit', 'article', article.id)} className="text-sm text-blue-500 hover:underline">Edit</button>
                <button onClick={() => handleAction('Delete', 'article', article.id)} className="text-sm text-red-500 hover:underline">Delete</button>
              </div>
            </li>
          ))}
        </ul>
        {userArticles.length === 0 && <p className="text-gray-500">You haven't submitted any articles yet.</p>}
      </div>

      {/* Your Projects Section */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Projects</h2>
        <ul className="space-y-4">
          {userProjects.map(project => (
            <li key={project.id} className="flex justify-between items-center p-4 border rounded-md">
              <span className="text-lg text-gray-700">{project.title}</span>
              <div className="space-x-2">
                <button onClick={() => handleAction('Edit', 'project', project.id)} className="text-sm text-blue-500 hover:underline">Edit</button>
                <button onClick={() => handleAction('Delete', 'project', project.id)} className="text-sm text-red-500 hover:underline">Delete</button>
              </div>
            </li>
          ))}
        </ul>
        {userProjects.length === 0 && <p className="text-gray-500">You haven't submitted any projects yet.</p>}
      </div>
    </div>
  );
};
