import React, { useRef } from "react";
import Slider from "react-slick";

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
          <Slider ref={(slider) => (sliderRef = slider)} {...settings} className="px-2">
            <div>
              <div className="relative mx-2 rounded-xl overflow-hidden group">
                <img
                  src="images/child_falsafe.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="w-full h-full absolute flex-center top-[350px] group-hover:top-0  transition-all duration-300 text-white bg-gradient-to-t from-purple-700/70 to-purple-700/0">
                  <h3 className="font-MikhakWoff2one text-2xl font-bold mt-60">کارگاه فلسفه برای کودکان</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mx-2 rounded-xl overflow-hidden group">
                <img
                  src="images/honareTajasomi2.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="w-full h-full absolute flex-center top-[350px] group-hover:top-0  transition-all duration-300 text-white bg-gradient-to-t from-purple-700/70 to-purple-700/0">
                  <h3 className="font-MikhakWoff2one text-2xl font-bold mt-60">هنر های تجسمی حرفه ای</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mx-2 rounded-xl overflow-hidden group">
                <img
                  src="images/varzesh.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="w-full h-full absolute flex-center top-[350px] group-hover:top-0  transition-all duration-300 text-white bg-gradient-to-t from-purple-700/70 to-purple-700/0">
                  <h3 className="font-MikhakWoff2one text-2xl font-bold mt-60">ورزش حرفه ای فکری و عملی</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mx-2 rounded-xl overflow-hidden group">
                <img
                  src="images/zabanEnglishhh.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="w-full h-full absolute flex-center top-[350px] group-hover:top-0  transition-all duration-300 text-white bg-gradient-to-t from-purple-700/70 to-purple-700/0">
                  <h3 className="font-MikhakWoff2one text-2xl font-bold mt-60">آموزش زبان انگلیسی</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mx-2 rounded-xl overflow-hidden group">
                <img
                  src="images/zabanTorki.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="w-full h-full absolute flex-center top-[350px] group-hover:top-0  transition-all duration-300 text-white bg-gradient-to-t from-purple-700/70 to-purple-700/0">
                  <h3 className="font-MikhakWoff2one text-2xl font-bold mt-60">آموزش زبان ترکی استانبولی</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mx-2 rounded-xl overflow-hidden group">
                <img
                  src="images/Azmoon.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="w-full h-full absolute flex-center top-[350px] group-hover:top-0  transition-all duration-300 text-white bg-gradient-to-t from-purple-700/70 to-purple-700/0">
                  <h3 className="font-MikhakWoff2one text-2xl font-bold mt-60">آزمون های پیشرفت تحصیلی</h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
export default ClassesComponent;
