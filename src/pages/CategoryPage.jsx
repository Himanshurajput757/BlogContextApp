import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category =  location.pathname.split("/").at(-1);


  return (
    <div className='w-11/12 flex justify-center '>
      {/* <Header /> */}
      <div className=' mt-10'>
        <button className='text-black text-1xl bg-red-50 px-3 py-1 rounded-3xl ' onClick={()=> navigate(-1)}>
          Back
        </button>
        <h2 className='mt-2 text-2xl mx-3 text-blue-400'>
          Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
      
    </div>
  )
}

export default CategoryPage
