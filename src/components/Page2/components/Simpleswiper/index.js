import { useState, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCreative, Pagination, Navigation } from 'swiper/modules';
import NavigationLeftPng from '../../../../assets/img/page2/swiper-arrow-left.png';
import NavigationRightPng from '../../../../assets/img/page2/swiper-arrow-right.png';
import SwiperPng1 from '../../../../assets/img/page2/section3-swiper1.png';
import SwiperPng2 from '../../../../assets/img/page2/section3-swiper2.png';
import SwiperPng3 from '../../../../assets/img/page2/section3-swiper3.png';
import SwiperPng4 from '../../../../assets/img/page2/section3-swiper4.png';
import paginationDefault from "../../../../assets/img/page2/swiper-navigation-default.png";
import './index.css'

const MySwiper = () => {
  const [_, setInit] = useState(false);
  const swiperRef = useRef();
  const images = [
    SwiperPng1, SwiperPng2, SwiperPng3, SwiperPng4
  ];

  // 自定义环绕式3D效果配置
  const creativeEffect = {
    limitProgress: 3,
    prev: {
      translate: ['-50%', 0, -1355], // X轴位移
      rotate: [0, 50, 0],          // Z轴旋转
      scale: 1,                   // 缩放为50%
      origin: 'right center'        // 变换原点在右侧
    },
    next: {
      translate: ['50%', 0, -1355],
      rotate: [0, -50, 0],
      scale: 1,
      origin: 'left center'         // 变换原点在左侧
    },
    perspective: true,
    transformEl: '.swiper-slide'
  };

  // 自定义分页器图片
  const pagination = {
    clickable: true,
    // renderBullet: (index, className) => {
    //   return `
    //     <span class="${className}">
    //       <img src="${paginationDefault}" style="margin: 0 16px;width: 32px; height: 32px; object-fit: cover"/>
    //     </span>
    //   `;
    // },
  };

  return (
    <div style={{
      position: 'relative',
      overflow: 'visible',
      width: '1710px',
      margin: '0 auto'
    }}>
      <Swiper
        effect={'creative'}
        creativeEffect={creativeEffect}
        loop={true}
        pagination={pagination}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        modules={[EffectCreative, Pagination, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setInit(true);
        }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: '1334px',
                height: '618px',
                objectFit: 'cover',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 自定义导航按钮 */}
      <button className="custom-prev" style={{
        position: 'absolute',
        left: '0',
        top: '50%',
        zIndex: 10,
        background: 'none',
        border: 'none',
        transform: 'translateY(-50%)'
      }}>
        <img
          src={NavigationLeftPng}
          alt="prev"
          style={{ width: '73px', height: '73px' }}
        />
      </button>

      <button className="custom-next" style={{
        position: 'absolute',
        right: '0',
        top: '50%',
        zIndex: 10,
        background: 'none',
        border: 'none',
        transform: 'translateY(-50%)'
      }}>
        <img
          src={NavigationRightPng}
          alt="next"
          style={{ width: '73px', height: '73px' }}
        />
      </button>
    </div>
  );
};

export default MySwiper;