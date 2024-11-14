import React from 'react'
import TechBlog from '../components/Blog/TechBlog'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
const Blogs = () => {
  return (
    <div>
        <Navbar/>
     <TechBlog/>
     <Categories/>
     <Footer/> 
    </div>
  )
}

export default Blogs
