import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

const SwiperComponent = ({ children, ...props }) => {
  return (
    <Swiper
      loop
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView="auto"
      navigation
      swipeHandler={true}
      width="auto"      
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;