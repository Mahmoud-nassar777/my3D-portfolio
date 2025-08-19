import React from 'react'
import { motion} from 'framer-motion';
import { styles } from '../styles';
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay} from "swiper/modules";


const FeedbackCard = ({ index , testimonial, name, designation, company, image }) => (
    <div
        // variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-7 rounded-3xl  w-full d-flex justify-center items-center '
    >
        <p className='text-white font-black text-[48px]' >"</p>

        <div className='mt-1' >
            <p className='text-white tracking-wider text-[18px] ' >{testimonial}</p>
            <div className='mt-7 flex justify-between items-center gap-1' >
                <div className='flex-1 flex flex-col' >
                    <p className='text-white font-medium text-[16px]' >
                        <span className='blue-text-gradient' >@</span>  {name}
                    </p>    
                    <p className='mt-1 text-secondary text-[12px]' >
                        {designation}  {company}
                    </p>
                </div>
                <img 
                    src={image} 
                    alt={`feedback-by-${name}`}
                    className='w-10 h-10 rounded-full object-cover '
                />
            </div>
        </div>

    </div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px] max-w-[1300px] mx-auto ' >
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] ` } >
            <motion.div variants={textVariant} >
                <p className={styles.sectionSubText} >What others say</p>
                <h2 className={styles.sectionHeadText} >Testimonials.</h2>
            </motion.div>
        </div>
       
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true} // ✅ يخليه يلف على طول
            // centeredSlides={true}
            autoplay={{
                delay: 1000, // السرعة (2.5 ثانية)
                disableOnInteraction: false, // يفضل شغال حتى لو المستخدم لمس السلايدر
            }}
            speed={2000}
            // pagination={{ clickable: true }}
            breakpoints={{
                425: { slidesPerView: 1.1 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3 },
            }}
            className={`-mt-20`}
            wrapperClass={` -mt-10 gap-2`}
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.name} className="!flex justify-center" >
                    <FeedbackCard index={index} {...testimonial} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Feedbacks