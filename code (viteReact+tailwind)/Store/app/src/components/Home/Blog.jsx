import  { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import styles from "../../style";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { blogsdata } from "../../constants/index"; // Ensure correct named export

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setBlogs(blogsdata);
    setIsLoading(false);
  }, []);

  return (
    <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col bg-[#F7ECEA]`}>
      <h3 className="text-2xl font-bold mb-6 text-center py-4"> What's New Today</h3>
      <div className="section flex flex-col items-center py-3 px-16">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, EffectCreative]}
            slidesPerView={3}
            spaceBetween={20}
            navigation
            EffectCreative
            pagination={{ clickable: true }}
            className="mySwiper w-full"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="card sm:w-[100%] w-[90%] bg-[#F7ECEA] shadow-md rounded-lg overflow-hidden mx-auto border-[1px] border-[orange]">
                  <img
                    src={blog.image || "https://via.placeholder.com/300"}
                    alt={blog.title || "Blog Image"}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300";
                    }}
                  />
                  <div className="p-4">
                    <div className="meta flex flex-row justify-between mb-4">
                      <h4 className="text-sm text-gray-600">Date: {blog.date}</h4>
                      <h4 className="text-sm text-gray-600">Time: {blog.time}</h4>
                    </div>
                    <p className="text-gray-700 mb-4">{blog.blogdesc}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      <a href={blog.link || "#"} className="flex items-center">
                        <span>Read more</span>
                        <img
                          src={blog.icon || "https://via.placeholder.com/20"}
                          alt="Read more icon"
                          className="ml-2 w-4 h-4"
                        />
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Blog;
