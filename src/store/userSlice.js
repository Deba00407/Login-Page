import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginStatus: false,
    userData: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loginStatus = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.loginStatus = false;
            state.userData = {};
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;