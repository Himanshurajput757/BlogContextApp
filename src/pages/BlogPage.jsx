import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const {setLoading, loading} = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";


  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs)

    }catch(error){
      console.log("Error aa gya in blog id wali call");
      setBlog(null);
      setRelatedBlog(null);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname]);

  return (
    <div className='w-full flex flex-col mx-auto justify-center items-center bg-white'>
      <Header />
      <div className='w-1/2 mx-auto my-28 flex justify-center '>
      <div>
        <button className='mx-5 bg-red-50 px-3 py-1 rounded-3xl' onClick={()=> navigate(-1)}>
          Back
        </button>
      </div>
      {
        loading ? 
        (<div>
          <p className='flex justify-center items-center'>Loading...</p>
        </div>
        ) :
        blog ?
        (
          <div>
            <BlogDetails post={blog} />
            <h2 className='text-3xl mt-3 mb-2'>Related Blog</h2>
            {
              relatedblog.map((post)=>(
                <div className='mb-5' key={post.id}>
                  <BlogDetails post={post} />
                </div>
              ))
            }
          </div>
        ) :
        (<div className='flex justify-center items-center'>
          No Blog Found</div>)
      }
      </div>
      
    </div>
  )
}

export default BlogPage
