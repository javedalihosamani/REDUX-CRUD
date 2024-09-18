
import { configureStore } from '@reduxjs/toolkit';
import reducer from './../Reducer/BlogReducer';

// Assign name for the State
const blogReducer = {
    BLOG : reducer
}

const store = configureStore({
    reducer: blogReducer,
    devTools: true, // Enable Redux DevTools
})

export default store;