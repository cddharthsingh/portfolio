// src/App.js
import React from 'react';
import Layout from './components/Layout';
import DynamicGradient from './components/DynamicGradient';
import './index.css'; // Ensure this imports Tailwind CSS

function App() {
  return (
    <div className="relative">
      <DynamicGradient />
      <Layout>
        <h1 className="text-6xl font-bold text-white">Siddharth Singh</h1>
      </Layout>
    </div>
  );
}

export default App;
