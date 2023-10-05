import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
const Banner = () => {
    return (
        <div>
            <Swiper
                className='relative group'
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide",
                }}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className='image relative'>
                        <img className='w-full' src="https://i.ibb.co/Nj12RT2/slider.jpg" alt="" />
                        <div className="title-content absolute top-[25%] left-[12rem]">
                            <h3 className='text-3xl font-bold w-[30%]'>Taking care of your health is our top priority.</h3>
                            <p className='w-[40%] my-2'>Being healthy is more than just not getting sick. It entails mental, physical, and social well being. It&apos;s not just about treatment, it&apos;s about healing.</p>
                            <button className='px-[2rem] bg-blue-50 uppercase text-[17px]  p-2 mt-2'>Know More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image'>
                        <img className='w-full' src="https://i.ibb.co/mXr4ScP/slider2.jpg" alt="" />
                        <div className="title-content absolute top-[25%] left-[12rem]">
                            <h3 className='text-3xl font-bold'>Ask your question to doctor <br /> now</h3>
                            <p className='w-[40%] my-2'>Get advice from a professional doctor via chat, phone or video. Choose the appropriate type of payment: compulsory medical insurance, VHI or choose a private clinic.</p>
                            <button className='px-[2rem] bg-blue-50 uppercase text-[17px] rounded-full p-2 mt-2'>Ask your question</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image'>
                        <img className='w-full' src="https://i.ibb.co/hFm4Qq5/slider4.jpg" alt="" />
                        <div className="title-content absolute top-[25%] left-[12rem]">
                            <h3 className='text-3xl font-bold'>Your healthy heart <br /> hospital providing <br /> generations of <br /> Caring</h3>
                            <p className='w-[40%] my-2'>Healthy heart is where you find brilliance and treatment expertise combined with the human touch</p>
                            <button className='px-[2rem] bg-blue-50 uppercase text-[17px]  p-2 mt-2'>Know More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className='top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 w-[50px] h-[50] text-black bg-[#fff] grid place-items-center'>
                    <FaAngleLeft />
                </div>
                <div className='top-[50%] absolute z-10 button-prev-slide group-hover:right-0 -right-[23rem] duration-500 w-[50px] h-[50] text-black bg-[#fff] grid place-items-center'>
                    {""}
                    <FaAngleRight />
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;