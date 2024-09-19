import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteBlog, readAllBlog } from '../../Action/BlogAction';
import { toast } from 'react-toastify';

const BlogCard = (props) => {
    const {id, title, subTitle,image, content} = props;

    const dispatch = useDispatch();
    
    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure you want to delete a BLOG id = ${id}`)) {
            dispatch(deleteBlog(id))
            .then(res=>{
                toast.success("Blog deleted successfully");
                dispatch(readAllBlog());
            })
            .catch(error=> toast.error(error.message))
        } else {
            toast.warning(`Delete failed`);
        }        
    }
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card shadow">
            <img className="card-img-top" src={image} alt={title} style={{height:"300px"}}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className='text-warning'>SubTitle :</span>
                        <span className="float-end">{subTitle}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='text-warning'>Content :</span>
                        <span className="float-end">{content}</span>
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <NavLink to={`/update/${id}`} className="btn btn-outline-success shadow">
                    <i className="bi bi-pen"></i>
                </NavLink>
                <button className="btn btn-outline-danger shadow float-end" onClick={()=> handleDelete(id)}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default BlogCard