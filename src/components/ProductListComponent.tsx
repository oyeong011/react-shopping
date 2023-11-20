// src/components/ProductListComponent.tsx
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/fakeStoreApi';

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
    <div>
    {products.map((product: any) => (
        <div key={product.id}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} style={{ width: '100px' }} />
        <p>{product.price} $</p>
        </div>
    ))}
    </div>
);
};

export default ProductListComponent;