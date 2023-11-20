// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListComponent from './components/ProductListComponent';
import Header from './components/Header';
import ProductDetailComponent from './components/ProductDetailComponent';
import CartPage from './page/CartPage';

const App: React.FC = () => {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<ProductListComponent />} />
        <Route path="/products/:productId" element={<ProductDetailComponent />} />      
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;