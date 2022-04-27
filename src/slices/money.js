import { createSlice } from '@reduxjs/toolkit';

const moneySlice = createSlice({
    name: 'money',
    initialState: {
        balance: 0,
    },
    reducers: {
        addCash(state, action) {
            state.balance = +state.balance + +action.payload;
        },
    },
});

export default moneySlice.reducer;
export const { addCash } = moneySlice.actions;
