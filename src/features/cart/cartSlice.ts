// src/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
items: { product: any; quantity: number }[];
}

const initialState: CartState = {
items: [],
};

export const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
    addToCart: (state, action: PayloadAction<{ product: any; quantity: number }>) => {
    const existingIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.product.id
    );

    if (existingIndex >= 0) {
        state.items[existingIndex].quantity += action.payload.quantity;
    } else {
        state.items.push(action.payload);
    }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
    state.items = state.items.filter((item) => item.product.id !== action.payload);
    },
    // 여기에 필요한 다른 액션들을 추가할 수 있습니다.
},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;