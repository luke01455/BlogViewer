import React from 'react';
import './blog-card.styles.scss';

const BlogCard = ({ userId, title, body }) => {

    return (
        <div className='blog-card-container'>
            <div className='card-top-half'>
                <div className='userId-container'> <h1> {userId} </h1></div>
                <div className='blog-title-container'> {title}</div>
            </div>
            <div className='card-body'>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default BlogCard