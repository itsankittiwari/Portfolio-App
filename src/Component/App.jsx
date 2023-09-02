import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Blogs from './Blogs'
import Projects from './Projects'
import SubBlog1 from './SubBlog1'
import SubBlog2 from './SubBlog2'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/sub-blogs1' element={<SubBlog1/>} />
          <Route path='/sub-blogs2' element={<SubBlog2/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App