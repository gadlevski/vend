import { configureStore } from '@reduxjs/toolkit';
// import productsReducer from '../slices/products';
import cashReducer from '../slices/cash';

export default configureStore({
    reducer: {
        // products: productsReducer,
        cash: cashReducer,
    },
});
