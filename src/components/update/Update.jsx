import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBlog } from '../../Action/BlogAction';
import { toast } from 'react-toastify';
import blogAPI from './../../API/BlogAPI';

const Update = () => {
    const [blog, setBlog] = useState({
        title: '',
        subTitle: '',
        image: '',
        content: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setBlog({...blog, [name]: value });
    }

    const dispatch = useDispatch(); // Assuming blogActions is a Redux action creator for blog slice
    const navigate = useNavigate();
    const params = useParams();

    const getSingle = async () => {
        const res = await blogAPI.getSingle(params.id);
        setBlog(res.data);       
    }
    useEffect(()=> {
        getSingle();
    }, [])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBlog({blog:blog, id:params.id}))
        .then(res=>{
            toast.success("Blog updated successfully");
            navigate('/');
        })
        .catch(error=> toast.error(error.message))
    }

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6  ">
                <div className="border rounded p-3 shadow">
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <div className="form-group bg-warning rounded">
                            <h3 className="text-white text-center p-2">UPDATE BLOG ID {params.id}</h3>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" className="form-control" placeholder='Blog Title' required onChange={handleInputChange} value={blog.title}/>
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="subTitle">Sub Title</label>
                            <input type="text" name="subTitle" id="subTitle" className="form-control" placeholder='Blog Sub Title' required onChange={handleInputChange} value={blog.subTitle}/>
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="image">Image URL</label>
                            <input type="url" name="image" id="image" className="form-control" placeholder='Image URL' required onChange={handleInputChange} value={blog.image}/>
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="content">Content</label>
                            <textarea name="content" id="content" className="form-control" placeholder='Blog Content' required onChange={handleInputChange} value={blog.content}/>
                        </div>
    
                        <div className="form-group mt-3">
                            <input type="submit" value="Create" className="btn btn-outline-warning" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Update;