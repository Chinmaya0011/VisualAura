import React from 'react'
import CreateBlog from '../components/Blog/CreateBlog'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const CreateBlogPage = () => {
  return (
    <div>
        <Navbar/>
      <CreateBlog/>
      <Footer/>
    </div>
  )
}

export default CreateBlogPage
