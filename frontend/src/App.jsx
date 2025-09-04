import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import SubmitArticlePage from './pages/SubmitArticlePage.jsx';
import SubmitProjectPage from './pages/SubmitProjectPage.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/submit-article" element={<SubmitArticlePage />} />
          <Route path="/submit-project" element={<SubmitProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
