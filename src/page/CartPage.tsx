import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeFromCart } from '../features/cart/cartSlice';

const CartPage: React.FC = () => {
const cart = useSelector((state: RootState) => state.cart);
const dispatch = useDispatch();

return (
    <div>
    <h1>장바구니</h1>
    <ul>
        {cart.items.map((item) => (
        <li key={item.product.id}>
            {item.product.title} - {item.quantity}개
            <button onClick={() => dispatch(removeFromCart(item.product.id))}>
            제거
            </button>
        </li>
        ))}
    </ul>
    </div>
);
};

export default CartPage;