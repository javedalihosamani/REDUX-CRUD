import axios from "axios";

const blogAPI = {
    create: async (blog) =>{
        return axios.request({
            method: 'POST',
            url: '/blogs',
            data: blog
        })
    },
    getAll : async (blog) =>{
        return axios.request({
            method: 'GET',
            url: '/blogs',
        })
    },
    delete : async (id) =>{
        return axios.request({
            method: 'DELETE',
            url: `/blogs/${id}`,
        })
    },
    getSingle : async (id) =>{
        return axios.request({
            method: 'GET',
            url: `/blogs/${id}`,
        })
    },
    update : async (blog,id) =>{
        return axios.request({
            method: 'PATCH',
            url: `/blogs/${id}`,
            data: blog,
        })
    },
};

export default blogAPI;