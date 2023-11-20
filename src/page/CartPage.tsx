import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeFromCart, selectCartTotal } from '../features/cart/cartSlice';
import './CartPage.css';

const CartPage: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const total = useSelector(selectCartTotal);

    return (
        <div className='cart-container'>
        <h1>장바구니</h1>
            {cart.items.map((item) => (
            <div className="cart-item">
                <div className="cart-item-image">
                <img src={item.product.image} alt="Product Name" />
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
                <button className="remove-item" onClick={() => dispatch(removeFromCart(item.product.id))}>🗑</button>
                
                </div>
            </div>
            ))}
            <div className="cart-item-total">
                {total} $
            </div>
            <div className="cart-item-actions">
                <button className="checkout">결제하기</button>
            </div>
        </div>
    );
};

export default CartPage;