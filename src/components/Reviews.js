import React from 'react';
import { useEffect , useState} from 'react';
import '../assets/style/reviews.css';

const Reviews = () => {

    const [testimonials, setTestimonials] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
   
    useEffect(() => {
        // Simulating server response
        const fetchTestimonials = async () => {
          const data = [
            { text: "Dui varius sed egestas et scelerisque vitae nulla. Sollicitudin semper vel amet sollicitudin laoreet arcu.", author: "Sourabh Panday", company: "Digital Solutions" },
            { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel turpis id massa aliquam sollicitudin vitae ut leo.", author: "John Doe", company: "Tech Innovations" },
            { text: "Aliquam erat volutpat. Integer gravida cursus metus. Vestibulum auctor velit at felis ultricies, in aliquet purus cursus.", author: "Jane Smith", company: "Creative Solutions" },
            { text: "Fusce consequat, purus nec pretium suscipit, felis augue consequat libero, non sollicitudin lacus nulla eu libero.", author: "Michael Lee", company: "Future Corp" },
            { text: "Donec scelerisque, urna eget ullamcorper lacinia, lorem purus ultricies erat, ut accumsan lacus lectus sed lacus.", author: "Emily Clark", company: "InnovateX" },
            { text: "Nam at enim sit amet velit faucibus vulputate non nec justo. Duis bibendum odio ut tortor luctus, vel tempus libero viverra.", author: "David Liu", company: "Bright Ideas" }
          ];
          setTestimonials(data); // Setting the data as testimonials
        };
        
        fetchTestimonials();
      }, []);

      useEffect(() => {
        const carouselElement = document.getElementById('testimonialCarousel');
    
        const handleSlide = (event) => {
          setActiveIndex(event.to); // Update active index when the slide changes
        };
    
        carouselElement.addEventListener('slid.bs.carousel', handleSlide);
    
        return () => {
          // Cleanup the event listener when the component unmounts
          carouselElement.removeEventListener('slid.bs.carousel', handleSlide);
        };
      }, []);

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#F2F2F2" }}>
      {/* Heading */}
      <div className="text-center mb-5">
        <h1>Customer's testimonials</h1>
      </div>

       {/* Testimonial Carousel */}
       <div id="testimonialCarousel" className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        {/* Carousel Inner */}
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="testimonial-box mx-auto p-5">
                <div className="text-center mb-4">
                  <i className="fa-solid fa-quote-left quote-icon"></i>
                </div>
                
                <div className='text-center'>
                <p className="testimonial-text">
                  {testimonial.text}
                </p>
                <h5 className="testimonial-author mt-4">{testimonial.author} - {testimonial.company}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Dots */}
        <div className="custom-dots text-center mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
