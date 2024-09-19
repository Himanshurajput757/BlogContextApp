import React, { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export default function AppContextProvider ({children}){
    const [loading, setLoading]=useState(false);
    const [posts, setPosts]= useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    //data filling
    async function fetchDataBlog(page = 1, tag=null, category) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`;
        
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`
        }

        try{
            const result = await fetch(url);
            const res = await result.json();
            if(!res.posts || res.posts.length ===0)
                throw new Error("something went wrong"); 
            console.log('Api response',res);
            setPage(res.page);
            setPosts(res.posts);
            setTotalPages(res.totalPages);


        }catch(e){
            console.log("Error")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
        }

        const handlerPageChange = (page)=>{
            navigate({search: `?page=${page}`})
            setPage(page);
            
        }

        const value = {
            posts,
            setPosts,
            page,
            setPage,
            loading,
            setLoading,
            fetchDataBlog,
            totalPages,
            setTotalPages,
            handlerPageChange
        };
    

       return <AppContext.Provider value={value}>{children}</AppContext.Provider>

        
    }

  


