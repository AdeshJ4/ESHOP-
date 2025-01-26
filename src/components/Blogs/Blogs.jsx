import React from 'react';
import Heading from '../shared/Heading';
import BlogCard from './BlogCard';

// Images
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'

const blogs = [
    {
        id: 1,
        title: "How to choose perfect smartwatch",
        subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Dilshad",
        image: Img1,
        aosDelay: "0"
    },
    {
        id: 2,
        title: "How to choose perfect gadget",
        subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Satya",
        image: Img2,
        aosDelay: "200"
    },
    {
        id: 3,
        title: "How to choose perfect VR headset",
        subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Sabir",
        image: Img3,
        aosDelay: "300"
    },
]


const Blogs = () => {
    return (
        <div className='my-20'>
            <div className='container'>
                {/* header section */}
                <Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />
                {/* blog section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 '>
                    {
                        blogs.map(blog => <BlogCard blog={blog} key={blog.id} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs