import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('doctor.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='mt-16'>
            <div className='flex flex-col items-center'>
                <h2 className='text-3xl text-center font-semibold'>Our Blog</h2>
                <div className='grid md:grid-cols-3 gap-8'>
                    {
                        blogs?.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                        ></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;