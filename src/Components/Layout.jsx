import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListPosts from './ListPosts'

function Layout() {
  return (

    <Routes >
        <Route path='/' index element={<ListPosts/>} />
    </Routes>
    
  )
}

export default Layout