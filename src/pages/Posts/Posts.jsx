import { useEffect, useState } from "react"
import "./Posts.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

 const Posts = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])


  useEffect(()=>{
    const fetchPosts = async ()=>{
      const {data} = await axios.get('https://dummyjson.com/posts?limit=10&skip=20&select=title,body')
      console.log(data)
      setPosts(data.posts)
    };
    fetchPosts()
  },[])

  const handleDelete = async (p) =>{
    try{
      setPosts(posts.filter((p) => p.id !== p.id))

      await axios.delete(`https://dummyjson.com/posts/${p.id}`);
      alert('You delete post')
      return navigate('/')

    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="posts">
         <div className="container">
         <button onClick={()=>navigate('/post/new')} className="btn btn-primary mb-4">New Post</button>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p) => (
                  <tr key={p.id}>
                    <td>{p.title}</td>
                    <td>{p.body}</td>
                    <td><button onClick={()=> navigate(`/post/${p.id}`)} className="btn btn-primary">Update</button></td>
                    <td><button className="btn btn-danger" onClick={()=>handleDelete(p)}>Delete</button></td>
                  </tr>
                ))} 
              </tbody>
            </table>
         </div>
    </div>
  )
}
export default Posts