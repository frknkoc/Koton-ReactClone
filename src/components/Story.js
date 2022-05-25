import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "./styles.css";

import { Scrollbar } from "swiper";
import Stories from "../data/Stories.json";


function Story() {
    return (
        <div className='container mt-5 mb-5'>
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

                    {
                        Stories.map(story => {
                            return (

                                <SwiperSlide className='mb-4'>
                                    <div className='story'>
                                        <img src={story.url} className='w-100 story' alt=''></img>
                                        <div className='storytext'>{story.text}</div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

            </div>

            <div className='row d-md-block d-lg-none px-1'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={16}
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="myStorySwiper"
                >
                    {
                        Stories.map(story => {
                            return (

                                <SwiperSlide className='mb-4'>
                                    <div className='story'>
                                        <img src={story.url} className='w-100 story' alt=''></img>
                                        <div className='storytext'>{story.text}</div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

            </div>

        </div>

    )
}

export default Story;


