import {Navigation,Pagination,A11y,Autoplay} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import React from 'react';
import Image from 'next/image';
import Preview1 from '../images/carousel/ubcare_main_renewal.svg';
import Preview2 from '../images/carousel/ubcare_main_renewal_event.svg';




const Slider = (): JSX.Element => {
  return (
    <Swiper
          id="carousel"
          modules={[Autoplay,Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation
          autoplay={{delay:6000,
            disableOnInteraction:false}}
          pagination={{ clickable: true }}
          className="my-swiper"
          loop={true}
          height={500}
          >
          <SwiperSlide className="my-swiper-slide">
            <Image src={Preview1} alt="Sample1" width={"100%"} height={500} className="carousel-fit" ></Image>
          </SwiperSlide>
          <SwiperSlide className="my-swiper-slide">
            <Image src={Preview2} alt="Sample1" width={"100%"} height={500} className="carousel-fit" ></Image>
          </SwiperSlide>
        </Swiper>
  );
};

export default Slider;

