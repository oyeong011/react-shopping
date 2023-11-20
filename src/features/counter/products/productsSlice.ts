// src/features/products/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';



// 상품 타입 정의
interface Product {
  id: number;
  title: string;
  price : number;
  category : string;
  image: string;
  // 기타 필요한 상품 속성
}

// 상태 타입 정의
interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
  category : string;
}

// 초기 상태
const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  category : "all"
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // 상품 관련 리듀서 정의
    // 예: 상품 로딩 시작
    startLoading(state) {
      state.loading = true;
    },
    // 예: 상품 로딩 성공
    productsLoaded(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
  // 필요한 경우 extraReducers 추가
});
export const selectFilteredProducts = (state: RootState) => {
  if (state.products.category === 'all') {
    return state.products.items;
  } else {
    return state.products.items.filter(
      (product) => product.category === state.products.category
    );
  }
};

export const { startLoading, productsLoaded, setCategory } = productsSlice.actions;
export default productsSlice.reducer;