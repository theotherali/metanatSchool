import React, { useRef } from "react";
import Slider from "react-slick";
import { classesData } from "../../datas";

function ClassesComponent() {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-lightishBlue-600/20 pb-6 pt-8 lg:pt-12 xl:pt-16 my-10">
        <div className="flex-center space-y-3 lg:space-y-6 flex-col mb-3 xs:mb-8 lg:mb-10">
          <h3 className="text-2xl lg:text-4xl font-MikhakWoff2one font-bold">
            کلاس های ویژه ی ما
          </h3>
          <span className="text-lg lg:text-xl px-4 text-gray-700 tracking-tighter text-center">
            دیگر برنامه های آموزشی ویژه ی مدرسه ی مونته سوری متانت شامل :
          </span>
        </div>
        <div className="slider-container">
          <Slider
            ref={(slider) => (sliderRef = slider)}
            {...settings}
            className="px-2"
          >
            {classesData.map((classes) => (
              <div key={classes.id}>
                <div className="relative mx-2 rounded-xl overflow-hidden group">
                  <img
                    src={classes.img}
                    className="w-full h-full"
                    alt={classes.alt}
                  />
                  <div className="w-full h-full absolute flex-center top-[350px] group-hover:top-0  transition-all duration-300 text-white bg-gradient-to-t from-purple-700/70 to-purple-700/0">
                    <h3 className="font-MikhakWoff2one text-2xl font-bold mt-60">
                      {classes.desc}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default ClassesComponent;
