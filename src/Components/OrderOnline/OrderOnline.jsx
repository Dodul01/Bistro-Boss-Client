import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slideImg1 from '../../assets/home/slide1.jpg'
import slideImg2 from '../../assets/home/slide2.jpg'
import slideImg3 from '../../assets/home/slide3.jpg'
import slideImg4 from '../../assets/home/slide4.jpg'
import slideImg5 from '../../assets/home/slide5.jpg'


const OrderOnline = () => {
  return (
    <div className='mx-20'>
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-4"
      >
        <SwiperSlide className='relative'>
          <img className='rounded-lg' src={slideImg1} alt="" />
          <h3 className='absolute bottom-3 text-2xl font-semibold text-white p-3'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='rounded-lg' src={slideImg2} alt="" />
          <h3 className='absolute bottom-3 text-2xl font-semibold text-white p-3'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='rounded-lg' src={slideImg3} alt="" />
          <h3 className='absolute bottom-3 text-2xl font-semibold text-white p-3'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='rounded-lg' src={slideImg4} alt="" />
          <h3 className='absolute bottom-3 text-2xl font-semibold text-white p-3'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='rounded-lg' src={slideImg5} alt="" />
          <h3 className='absolute bottom-3 text-2xl font-semibold text-white p-3'>Salads</h3>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default OrderOnline
