import { Provider } from "react-redux"
import { store } from "./Components/Store/Store"
import ListPosts from "./Components/ListPosts"
import {  Route, Routes } from "react-router-dom"

import Add from "./Components/Add"



function App() {


  return (
    
      <Provider store={store} >
        <Routes >
          <Route path='/'  element={<ListPosts />} />
          <Route path='/posts/:id'  element={<ListPosts/>} />
          <Route path='/posts/add'  element={<Add/>} />
        </Routes>
      </Provider>
  )
}

export default App
