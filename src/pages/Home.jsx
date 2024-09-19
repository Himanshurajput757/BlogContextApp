import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='w-full '>
      <Header />
    <div className='w-11/12 flex justify-center items-center '>
    <Blogs/>
    <Pagination />
    </div>
    </div>
  )
}

export default Home
