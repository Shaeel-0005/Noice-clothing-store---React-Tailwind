import  { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Testimonials } from '../../constants/index';

function Testimonial() {
  const [testimonialss, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Replace this with your actual data fetching logic
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://your-api.com/testimonials');
  //       const data = await response.json();
  //       setTestimonials(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching testimonials:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // for now lets add testimoinials from constant . js

  useEffect(() => {
    // Set testimonials data from the constants file
    setTestimonials(Testimonials);
    setIsLoading(false);
  }, []);
  return (
    <div className=" bg-gray-900 text-white py-16 px-6 shadow-lg">
       <h3 className="text-2xl font-bold mb-6 text-center py-4">Our Clients</h3>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={40}
          navigation={{ clickable: true }}
          
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {testimonialss.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="text-center max-w-xl mx-auto">
                <img
                  className="rounded-full mx-auto w-24 h-24 mb-6 border-4 border-gray-700"
                  src={testimonial.image}
                  alt={testimonial.name}
                  onError={(e) => {
                    e.target.src = 'https://example.com/default-avatar.jpg';
                  }}
                />
                <h3 className="text-2xl font-bold mb-3">{testimonial.name}</h3>
                <p className="text-gray-400 italic mb-6">{testimonial.title}</p>
                <p className="text-lg leading-relaxed ">{testimonial.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}


export default Testimonial;
