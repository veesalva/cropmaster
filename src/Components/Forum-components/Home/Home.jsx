import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context';
import { useGlobalContext as useContext } from '../../../context';
import Navbar from '../components/Navbar';
import SinglePost from './SinglePost';
import api from '../../../api';

const Home = () => {
  const sections = ["Trending", "All Forums", "New Posts"]
  const {userData, token} = useContext()
  const [activeSection, setActiveSection] = useState(0)
  const [posts, setPosts] = useState([])
  const {newPostAlert} = useGlobalContext()


  useEffect( () => {
    async function fetchPosts(){
      console.log(userData, token)
      const {data:{results}} =  await  api.get(
        '/discussion/posts/',  { headers:{Authorization: `Token ${token}`}}
      )
      const postsArray = results.map(
        (it)=>{
          const { title, author, content, comments, created_at, id} = it;
          return {
            id,
        username: author === userData.id ? userData.username:"testUser",
            comments,
            title, 
            likes:0,
            description:content,
            createdAt:created_at
  
          }
        }
      )
      console.log(postsArray)
      if(activeSection===0){
        // trending
        postsArray.sort((a, b) => {
          return b.likes - a.likes
        })}
      else if(activeSection===1){
        // all forums
        postsArray.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt)
        })}
      else if(activeSection===2){
        // new posts
        postsArray.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt)
        })}
      setPosts(postsArray)
    }
   fetchPosts();
  
  }, [activeSection, newPostAlert]);

  return (
    <div className='font-roboto'>
    <Navbar />
    <div className='mx-2'>
   
      <div className='flex'>
        {sections.map((section, index) => (
          <div key={index} className={`p-2 m-2 ${ activeSection===index ?"bg-green-700 text-white":"bg-green-200 text-black"} shadow-md rounded-md`} onClick={()=>{setActiveSection(index)}} >
            <h1 className={`text-lg font-semibold `}>{section}</h1>
          </div>
        ))}
      </div>

      

    </div>
    <div className='mx-2'>
      {  posts.map((post, index) =>{
   
        return  (
        <SinglePost key={post.id}  post={post} />
      )}
      )}
      </div>
    </div>
  )
}

export default Home