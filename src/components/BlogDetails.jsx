import React from 'react'
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
    return (
        <div className=''>
            <NavLink to={`/blog/${post.id}`}>
                <span className='text-2xl font-semibold text-slate-900 '>{post.title}</span>
            </NavLink>
            <p>
                By
                    <span className='mx-1 text-slate-800 '>{post.author}</span>
                    on {" "}
                   <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className='text-sm text-blue-400'>{post.category}</span>
                    </NavLink> 
            </p>
            <p className='font-medium mt-1 text-slate-600'>Posted on {post.date}</p>
            <p className='text-sm my-1 text-slate-500 hover:text-slate-700'>{post.content}</p>
            <div>
                {post.tags.map((tag, index)=>(
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span className='text-blue-700 mx-1'>{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>

        </div>
    )
}

export default BlogDetails
