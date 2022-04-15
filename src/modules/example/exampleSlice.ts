import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICounterState {
  value: number;
}
const initialState: ICounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    increment: state => ({ ...state, value: state.value + 1 }),
    decrement: state => ({ ...state, value: state.value - 1 }),
    incrementByAmount: (state, action: PayloadAction<number>) => ({
      ...state,
      value: action.payload,
    }),
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
