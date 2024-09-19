import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

const TagPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div className='w-full flex mt-28 justify-center'>
       <Header />
       <div className='mx-5'>
        <button className='text-1xl bg-red-50 px-3 py-1 rounded-3xl' onClick={()=> navigate(-1)}>
            Back
        </button>
        <h2 className='mt-5'>
            Blogs Tagged <span className='text-blue-600'>#{tag}</span>
        </h2>
       </div>
       <Blogs />
       <Pagination />

      
    </div>
  )
}

export default TagPage
