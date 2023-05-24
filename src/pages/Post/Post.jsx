import { useNavigate, useParams } from 'react-router-dom'
import './Post.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Posts = () => {
  const {id} = useParams()
  console.log(id)
  const [post, setPost] = useState({
    title:'',
    body:''
  })

  const navigate = useNavigate()

  useEffect(()=>{
    if(id === 'new') return

    const fetchPost = async ()=>{
      const {data} = await axios.get(`https://dummyjson.com/posts/${id}`);
      setPost(data)
    };
    fetchPost()
  },[])
  console.log(post)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    try{
      if(id === 'new'){
        await axios.post('https://jsonplaceholder.typicode.com/posts',post);
        alert('New post')
        return navigate('/');
      }else{
        await  axios.put('https://dummyjson.com/posts'+'/'+ id, post);
        alert('You update post')
        return navigate('/')
      }
    }catch (error) {
      console.log(error)
    }
  }


  const handleChange = (e) =>{
    const postClone = {...post};
    postClone[e.target.name] = e.target.value
    setPost(postClone)
  }

  return (
    <div className='post__wrapper'>
        <div className="container-post">
            <form className='post'>
              <input name='title' type="text" placeholder='Title' value={post.title} onChange={handleChange} />
              <input name='body' type="text" placeholder='Body' value={post.body} onChange={handleChange}/>
              <button  onClick={handleSubmit} className="btn btn-primary">{id === 'new' ?'Post':'Update'}</button>
            </form>
        </div>
    </div>
  )
}

export default Posts