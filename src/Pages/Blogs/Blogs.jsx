import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    const [blogs, setBlog] = useState([])

    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='flex flex-col gap-4'>
             <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                
            </Helmet>
            {
                blogs.map(blog => <div className='p-5 flex flex-col gap-5 bg-gray-100 border-2 border-gray-200 rounded-2xl'>
                    <p>Question: {blog.question}</p>
                    <hr className='border-2 border-gray-200' />
                    <p>Answer: {blog.answer} </p>
                </div>)
            }
        </div>
    );
};

export default Blogs;