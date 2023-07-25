import React from 'react';
import * as Style from "./styles";
// import { useState, useEffect }  from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import Foto1 from "../../assets/images/foto01.jpg";
import Foto2 from "../../assets/images/foto02.jpg";
import Foto3 from "../../assets/images/foto03.jpg";
import Foto4 from "../../assets/images/image01.svg";
import Foto5 from "../../assets/images/foto05.jpg";
import Foto6 from "../../assets/images/image02.svg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { EffectFade } from 'swiper/modules';


register();


export default function Carrossel() {

  return (
    <Style.SwiperContainer>
     <Style.SwiperImage> 
     
    <Swiper
    // modules={[EffectFade]} effect="fade"
    slidesPerView={3}
    pagination={{ clickable: true }}
    navigation    
    >
     
       
        <SwiperSlide >
          <img src={Foto1} alt="Slider" className='slide-item'/>
          </SwiperSlide>
        <SwiperSlide>
          <img src={Foto2} alt="Slider" className='slide-item'/>        
        </SwiperSlide>      
        <SwiperSlide>
          <img src={Foto3} alt="Slider" className='slide-item'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Foto4} alt="Slider" className='slide-item'/>
        </SwiperSlide>
          <SwiperSlide>
          <img src={Foto5} alt="Slider" className='slide-item'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Foto6} alt="Slider" className='slide-item'/>
            </SwiperSlide>
              
  
    </Swiper>
    </Style.SwiperImage>
    </Style.SwiperContainer>
  )
}
