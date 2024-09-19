import { useContext, useEffect, useState } from 'react'
import { AppContext } from './context/AppContext'
// import Header from './components/Header';
// import Blogs from './components/Blogs';
// import Pagination from './components/Pagination';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage'

export const App = ()=> {
  const { fetchDataBlog } = useContext(AppContext);
  const [serachParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = serachParams.get("page") ?? 1;
    console.log("page app ",page);
    if(location.pathname.includes("tags")){
      //iska matlab tag wala page show kr
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchDataBlog(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchDataBlog(Number(page), null, category);
    }
    else{
      fetchDataBlog(Number(page));
    }

    
  },[location.pathname, location.search])

  return (
    // <div className='w-full h-full flex flex-col items-center justify-center gap-x-1 '>
    //   {/* <Header />
    //   <Blogs />
    //   <Pagination /> */}
      
    // </div>
       
         <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/blog/:blogId' element={<BlogPage />} />
        <Route path='/tags/:tag' element={<TagPage />} />
        <Route path='/categories/:category' element={<CategoryPage />} />

      </Routes>
   
  )
}

export default App
