import React from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/Post.css"
const Post = () => {
    const {category,id} = useParams();
  return (
    <div className="post-container">
        <h1>Post Details</h1>
        <h2>Display {category} Post {id}</h2>
        <p>This is the content of post {id}. It contains some {category} information</p>
    </div>
  )
}

export default Post