// src/components/ProductListComponent.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts as fetchProducts } from '../services/fakeStoreApi';
import { productsLoaded, selectFilteredProducts } from '../features/counter/products/productsSlice';
import './ProductListComponent.css';
import CategoryButtons from './CategoryButtons';
import { useNavigate } from 'react-router-dom';

const ProductListComponent: React.FC = () => {
    const dispatch = useDispatch();
    // useSelector를 이용하여 필터링된 상품 목록을 가져옵니다.
    const products = useSelector(selectFilteredProducts);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductsAsync = async () => {
            try {
                const productsData = await fetchProducts();
                
                console.log('productsData: ', productsData);
                // 상품 로딩 성공 액션을 디스패치합니다.
                dispatch(productsLoaded(productsData));
            } catch (error) {
                console.error("상품을 불러오는 데 실패했습니다:", error);
            }
        };

        fetchProductsAsync();
    }, [dispatch]);

    const handleProductClick = (productId: number) => {
        navigate(`/products/${productId}`);
    };

    return (
        <div className='main-container'>
            <CategoryButtons />
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item"
                    onClick={() => { handleProductClick(product.id)}}>
                        <div className="title">{product.title}</div>
                        <div className="image-container">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="price">
                            <button
                                onClick={() => {

                                }}
                            >
                                장바구니 담기
                            </button>
                            {product.price} $
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListComponent;