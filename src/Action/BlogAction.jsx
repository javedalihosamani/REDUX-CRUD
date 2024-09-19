import { createAsyncThunk } from "@reduxjs/toolkit";
import blogAPI from "../API/BlogAPI";

/* Note :   1) createAsyncThunk is where we perform asynchronous tasks in out slice. It
             receives two parameters 
                a) Name of the action -> The standard convention is "[slice name] / [action name]"
                2) Callback function -> Performs API Call and return the result

            2) createAsyncThunk will generate three redux action creators using createAction : pending, fulfilled and reject */

// To Create a new Blog 
export const createBlog = createAsyncThunk("createBlog", async (blog) => {
    console.log("Payload Data : ", blog);
    const res = await blogAPI.create(blog);
    return res.data;
})

// To read All stored blogs 
export const readAllBlog = createAsyncThunk("readAllBlog", async () => {
    console.log("Reading All Blogs");
    const res = await blogAPI.getAll();
    return res.data;
});

// To Delete a blog
export const deleteBlog = createAsyncThunk("deleteBlog", async (id) =>{
    console.log("Deleting Blog : ", id);
    const res = await blogAPI.delete(id);
    return res.data;
});

// TO Update a blog
export const updateBlog = createAsyncThunk("updateBlog", async ({blog, id}) => {
    console.log("Updating Blog : ", blog, "ID : ", id);
    const res = await blogAPI.update(blog, id);
    return res.data;
});