// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListComponent from './components/ProductListComponent';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<ProductListComponent />} />
        {/* 추가 라우트를 여기에 배치할 수 있습니다. */}
      </Routes>
    </Router>
  );
};

export default App;