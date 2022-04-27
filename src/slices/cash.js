import { createSlice } from '@reduxjs/toolkit';

// const initialState = 0;

const cashSlice = createSlice({
    name: 'cash',
    initialState: {
        cash: 0,
    },
    reducers: {
        addCash(state, action) {
            state.cash = +state.cash + +action.payload;
            console.log('state', state.cash);
        },
    },
});

export default cashSlice.reducer;
export const { addCash } = cashSlice.actions;
