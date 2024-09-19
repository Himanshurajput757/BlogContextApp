import React ,{useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import { NavLink } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const Blogs = () => {
    const {posts, loading} = useContext(AppContext);
    console.log(posts);
  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] mb-[70px] ">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="">
                    <p className="">No Post Found</p>
                </div>
            ) : (
                posts.map((post) => (
                    
                   <BlogDetails key={post.id} post={post} />
                ))
            )}
        </div>
  )
}

export default Blogs
