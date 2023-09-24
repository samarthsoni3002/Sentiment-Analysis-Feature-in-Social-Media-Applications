import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    userData: null,
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
        setLoading(state, value) {
          state.loading = value.payload;
        },
        setUserData(state, value) {
          state.userData = value.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLoading , setUserData } = UserSlice.actions

export default UserSlice.reducer;