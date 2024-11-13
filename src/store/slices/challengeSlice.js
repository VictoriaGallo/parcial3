import { createSlice } from '@reduxjs/toolkit';

const challengeSlice = createSlice({
  name: 'challenge',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    reset: (state) => { state.count = 0; }
  }
});

export const { increment, decrement, reset } = challengeSlice.actions;
export default challengeSlice.reducer;
