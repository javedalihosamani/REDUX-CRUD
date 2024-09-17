import { toast } from "react-toastify";
import { createBlog, deleteBlog, readAllBlog, updateBlog } from "../Action/BlogAction";

const { createSlice } = require("@reduxjs/toolkit");


// Initialize the State
const initialState = []; // The state passed to your reducer the first time. 

/* 
1) createSlice takes an object of reducer functions, a slice name, and an initial state value
2) Lets us auto-generate action types and action creators, based on the name of reducer functions that we supply 
*/

// Reducer Slices
const blogSlice = createSlice({
    name : "BLOG",
    initialState,
    extraReducers : (builder) => {
        builder
       .addCase(createBlog.fulfilled, (state, action) => {
        // Add a new blog to the state array
        console.log("Reducer Payload = ", action.payload)
        return [...state, action.payload];
       })
       .addCase(createBlog.rejected, (state, action) => {
        // Handle the error case
        toast.error("Error creating blog = ", action.error);
       });

       builder
       .addCase(readAllBlog.fulfilled, (state, action) => {
        // Add all the blogs to the state array
        return [...action.payload];
       })
       .addCase(readAllBlog.rejected, (state, action) => {
        // Handle the error case
        toast.error("Error reading blogs = ", action.error);
       });

        builder
        .addCase(deleteBlog.fulfilled, (state, action) => {
            // Remove the blog from the state array
            return  state.filter(blog => blog.id!== action.payload);
            /* state[index] = {
                ...state[index],
                ...action.payload,
            } */
        })
        .addCase(deleteBlog.rejected, (state, action) => {
            // Handle the error case
            toast.error("Error deleting blog = ", action.error);
        });

        builder
        .addCase(updateBlog.fulfilled, (state, action) => {
            // Update the blog in the state array
            return  state.map(blog => blog.id === action.payload.id? action.payload : blog);
            /* state[index] = {
                ...state[index],
                ...action.payload,
            } */
        })
        .addCase(updateBlog.rejected, (state, action) => {
            // Handle the error case
            toast.error("Error updating blog = ", action.error);
        });
    }
});

// Export the action creators
const {reducer} = blogSlice;
export default reducer;