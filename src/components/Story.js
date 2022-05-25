import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "./styles.css";

import { Scrollbar } from "swiper";


function Story() {
    return (
        <div className='container mt-5 mb-5 '>
            <div className='row d-none d-lg-block'>
            <Swiper
                slidesPerView={9}
                spaceBetween={36}
                loop={true}
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="myStorySwiper"
            >
                <SwiperSlide className='mb-4'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mayis/story/cizgili-tshirtler.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>ÇİZGİLİ TİŞÖRTLER</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-4'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mayis/story/Mustafa-Kemal-Ataturk.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>ATATÜRK KOLEKSİYONU</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-4'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/nisan/story/renklijeans.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>RENKLİ JEANS</div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='mb-4'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/nisan/story/cocukelbise.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>49.99TL'DEN BAŞLAYAN</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-4'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/nisan/story/erkektshirtstory.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>MAKSİMUM 59.99TL</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-4'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mart/story/aksesuar-story.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>AKSESUAR</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-4'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mart/story/trend-renkler.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>TREND RENKLER</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-4'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/nisan/story/cocuktisort.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>29.99TL'DEN BAŞLAYAN</div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='mb-4'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mart/story/t-shirt.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>MAKSİMUM 69.99TL</div>
                    </div>
                </SwiperSlide>



            </Swiper>

            </div>

            <div className='row d-md-block d-lg-none px-1'>
            <Swiper
                slidesPerView={4}
                spaceBetween={16}
                loop={true}
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="myStorySwiper"
            >
                <SwiperSlide className='mb-3'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mayis/story/cizgili-tshirtler.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>ÇİZGİLİ TİŞÖRTLER</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-3'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mayis/story/Mustafa-Kemal-Ataturk.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>ATATÜRK KOLEKSİYONU</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-3'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/nisan/story/renklijeans.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>RENKLİ JEANS</div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='mb-3'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/nisan/story/cocukelbise.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>49.99TL'DEN BAŞLAYAN</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-3'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/nisan/story/erkektshirtstory.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>MAKSİMUM 59.99TL</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-3'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mart/story/aksesuar-story.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>AKSESUAR</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-3'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mart/story/trend-renkler.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>TREND RENKLER</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-3'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/nisan/story/cocuktisort.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>29.99TL'DEN BAŞLAYAN</div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='mb-3'>
                    <div className='story'>
                    <img src='https://img-kotontr.mncdn.com/images/2022/mart/story/t-shirt.jpeg' className='w-100 story' alt=''></img>
                    <div className='storytext'>MAKSİMUM 69.99TL</div>
                    </div>
                </SwiperSlide>

            </Swiper>

            </div>

        </div>
        
    )
}

export default Story;


