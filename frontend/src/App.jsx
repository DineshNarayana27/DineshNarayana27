import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import SubmitArticlePage from './pages/SubmitArticlePage';
import SubmitProjectPage from './pages/SubmitProjectPage';

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
