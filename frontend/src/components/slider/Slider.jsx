import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

import Images1 from "../../assets/images/1.png";
import Images2 from "../../assets/images/2.png";
import Images3 from "../../assets/images/3.png";
import Images4 from "../../assets/images/4.png";
import Images5 from "../../assets/images/5.png";

const Slider = () => {
  const images = [Images1, Images2, Images3, Images4, Images5];
  return (
    <>
     <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={1} loop={true} autoplay={{delay:3000, disableOnInteraction:false}} >
  {images.map((d, i) => (
    <SwiperSlide key={i}>
      <img
        src={d}
        alt="Banner"
        style={{ height: "550px", width: "100%", objectFit: "cover" }}
      />
    </SwiperSlide>
  ))}
</Swiper>

    </>
  );
};

export default Slider;
