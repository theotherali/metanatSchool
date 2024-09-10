import React, { useState } from "react";
import Slider from "react-slick";
import { sliderImg } from "../../datas";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider() {
  const [sliderImages, SetSliderImages] = useState(sliderImg);

  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="" {...settings}>
      {sliderImages.map((img) => (
        <div key={img.id} className="relative">
          <div className="bg-purple-700/50 absolute w-full h-full"></div>
          <img
            src={img.src}
            alt="picHesder"
            className="h-60 xs:h-[400px] md:h-[750px] object-cover w-full"
          />
          <div className="flex-center absolute top-8 xs:top-16 md:top-[40%] w-full">
            <div className="font-MikhakWoff2one w-4/5 text-center text-white font-bold">
              <h2 className="text-xl/relaxed xs:text-2xl/relaxed sm:text-4xl/relaxed lg:text-5xl/tight xl:text-6xl/tight ">
                مونته‌ سوری، ایجاد شناخت و یادگیری از طریق شناخت درونی است
              </h2>
              <p className="font-normal xs:text-lg md:text-xl/8 lg:text-2xl/10 mt-8 xs:mt-14 mx-auto w-72 xs:w-80 sm:w-[450px] md:w-[600px] lg:w-[650px]">
                یک رویکرد آموزشی است که تمرکز خود را بر روی علایق و فعالیت‌های
                طبیعی و روزمره کودکان قرار میدهد
              </p>
            </div>
          </div>

          <div class="circle circle--main circle--lg">
            <div class="circle circle--md">
              <div class="circle circle--sm"></div>
            </div>
          </div>

          <svg
            id="curve"
            viewBox="0 0 100 22"
            fill="#ecfeff"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 left-0 mx-auto hidden md:inline-block w-[134px] text-cyan-50"
          >
            <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"></path>
          </svg>

          <div
          className="absolute bottom-0 right-0 left-0 mx-auto translate-y-[6px] hidden md:flex-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full"
        >
          <KeyboardArrowDownIcon className="w-5 h-5 text-zinc-700" />
        </div>
        </div>
      ))}
    </Slider>
  );
}

export default SlickSlider;
