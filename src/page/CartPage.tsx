import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeFromCart } from '../features/cart/cartSlice';
import './CartPage.css';

const CartPage: React.FC = () => {
const cart = useSelector((state: RootState) => state.cart);
const dispatch = useDispatch();

return (
    <div className='cart-container'>
    <h1>장바구니</h1>
        {cart.items.map((item) => (
        <div className="cart-item">
            <div className="cart-item-image">
            <img src="path_to_product_image.png" alt="Product Name" />
            </div>
            <div className="cart-item-details">
            <div className="cart-item-category">{item.product.category}</div>
            <div className="cart-item-title">{item.product.title}</div>
            <div className="cart-item-price">{item.product.price} $</div>
            <div className="cart-item-quantity">
                <button className="quantity-decrease">-</button>
                <input type="text" value={item.quantity} readOnly={true} />
                <button className="quantity-increase">+</button>
            </div>
            
            </div>
        </div>
        ))}
        <div className="cart-item-total">
            Total: $ 109.95
        </div>
        <div className="cart-item-actions">
            <button className="remove-item">🗑</button>
            <button className="checkout">결제하기</button>
        </div>
    </div>
);
};

export default CartPage;