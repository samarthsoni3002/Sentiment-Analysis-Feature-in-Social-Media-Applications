import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userId: localStorage.getItem("userId") ? JSON.parse(localStorage.getItem("userId")) : null,
};

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setUserId } = AuthSlice.actions;

export default AuthSlice.reducer;
