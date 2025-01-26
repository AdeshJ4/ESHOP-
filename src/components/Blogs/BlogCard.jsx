import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-900" data-aos="fade-up" data-aos-delay={blog.aosDelay}>
        {/* image section  */}
      <div className="overflow-hidden rounded-2xl mb-2">
        <img src={blog.image} alt="" className="w-full h-[220px] object-cover rounded-2xl  hover:scale-105 duration-500 " />
      </div>
      {/* content sectioon */}
      <div className="space-y-2">
        <p className="text-xs text-gray-500">{blog.published}</p>
        <p className="font-bold line-clamp-1">{blog.title}</p>
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{blog.subtitle}</p>
      </div>
    </div>
  );
};

export default BlogCard;
