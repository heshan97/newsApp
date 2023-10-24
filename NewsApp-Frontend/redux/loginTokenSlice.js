import { createSlice } from '@reduxjs/toolkit';

const loginTokenSlice = createSlice({
  name: 'loginToken',
  initialState: null,
  reducers: {
    setToken: (state, action) => action.payload,
    clearToken: () => null,
  },
});

export const { setToken, clearToken } = loginTokenSlice.actions;
export default loginTokenSlice.reducer;