import React, { Fragment, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readAllBlog } from '../../Action/BlogAction';
import BlogCard from './../blogCard/BlogCard';

const Home = () => {
    const dispatch = useDispatch();

    const fetchData = useCallback(()=>{
        dispatch(readAllBlog());
    }, [dispatch])
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const blogs = useSelector((item)=>item.BLOG);
    console.table(blogs);
  return (
    <Fragment>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className='text-center text-warning'>Blogs</h1>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <div className="row">
                {
                    blogs.map((item,index)=>{
                        return(<BlogCard key={index} {...item}/>);
                    })
                }
            </div>
        </div>
    </Fragment>
  )
}

export default Home