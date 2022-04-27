import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/products';
import moneyReducer from '../slices/money';

export default configureStore({
    reducer: {
        products: productsReducer,
        money: moneyReducer,
    },
});
