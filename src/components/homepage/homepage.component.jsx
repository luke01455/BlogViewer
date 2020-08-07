import React, { useEffect, useState } from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title} {post.body}
          </li>
        ))}
      </ul>
    );
  }
}

export default HomePage