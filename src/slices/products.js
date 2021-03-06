import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, title: "Lay's", description: 'Chips', price: 75 },
    { id: 2, title: 'Coca-Cola', description: 'Drink', price: 180 },
    { id: 3, title: 'Light', description: 'Rusks', price: 220 },
    { id: 4, title: 'Chaka', description: 'Peanut', price: 600 },
    { id: 5, title: 'Water', description: 'Drink', price: 40 },
    { id: 6, title: 'Fanta', description: 'Cold drink', price: 400 },
    { id: 7, title: 'Nutella', description: 'Chocolate paste', price: 550 },
];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default productsSlice.reducer;
