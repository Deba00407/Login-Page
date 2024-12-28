import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './userSlice'

const store = configureStore({
    reducer: {
        user: loginReducer
    }
})

export default store;