import { useState } from 'react';
import './App.css'
import { InputBox, SubmitButton, UserFeed } from './components'
import { useMemo } from 'react';

function App() {
console.log('In app');
  const [post, setPost] = useState('');
  const [postsList, setPostsList] = useState([
    {
      id: 0,
      post: 'Teri Maai Ke -----',
      user:'Old user'
    },
    {
      id: 1,
      post: 'Teri Maai Ke ----- 2',
      user:'Old user 2'
    }

]);

  const addPost = () => {
    if(post.length > 0){
      const tempPost = {
        id: postsList.length,
        post: post,
        user: 'Current User'
      }
      setPostsList((prev) => [tempPost, ...prev]);
      setPost('');
    }
  }

  const memodPost = useMemo(() => {
    return postsList.sort((a,b) => b.id - a.id)
  }, [postsList])
  return (
    <div className='main-div flex flex-col items-center'>
      <div className='w-[500px]'>
        <h1 className='text-4xl font-bold text-orange-400 p-5 text-center'>Social App</h1>
        <div className='form'>
            <div className='flex justify-between mb-9 mt-1'>
              <InputBox post={post} setPost={setPost} type={"text"} placeholder={"Create a post"} />
              <SubmitButton type="submit" onClick={addPost} />
            </div>
            <UserFeed allPosts={memodPost}/>
        </div>
      </div>
    </div>
  )
}

export default App
