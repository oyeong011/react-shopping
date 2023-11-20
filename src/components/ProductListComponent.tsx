// src/components/ProductListComponent.tsx
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/fakeStoreApi';
import './ProductListComponent.css';

const ProductListComponent: React.FC = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    const fetchProducts = async () => {
    try {
        const productsData = await getProducts();
        setProducts(productsData);
        console.log('productsData: ', productsData);
    } catch (error) {
        console.error("상품을 불러오는 데 실패했습니다:", error);
    }
    };

    fetchProducts();
}, []);

return (
    <div className='main-container'>
        <h1>Product</h1>
        <div className="btn-List">
            <button>모두</button>
            <button>전자기기</button>
            <button>쥬얼리</button>
            <button>남성의류</button>
            <button>여성의류</button>
        </div>
        <div className="product-list">
            {products.map((product : any) => (
                <div key={product.id} className="product-item">
                <div className="title">{product.title}</div>
                <div className="image-container">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="price">{product.price} $</div>
                </div>
            ))}
        </div>
    </div>
   
);
};

export default ProductListComponent;