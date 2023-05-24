import Posts from "./pages/Posts/Posts"
import Post from "./pages/Post/Post"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import {AboutPage} from './pages/AboutPage/AboutPage'
import NotFounPage from './pages/NotFoudPage/NotFoudPage'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<h3 className='title'>Home page</h3>}/>
      <Route path='about' element={<AboutPage/>} />
      <Route path="posts" element={<Posts/>}/>
      <Route path="post/:id" element={<Post/>}/>
      <Route path='*' element={<NotFounPage/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App