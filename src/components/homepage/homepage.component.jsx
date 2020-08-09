import React, { useEffect, useState } from 'react';
import BlogCard from '../blog-card/blog-card.component'
import './homepage.styles.scss';

const HomePage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result)
          console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
    )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {posts.map(post => (
          <BlogCard key={post.id} userId={post.userId} body={post.body} title={post.title}/>
        ))}
      </div>
    );
  }
}

export default HomePage