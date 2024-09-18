import React, { useRef } from 'react'
import Slider from "react-slick";

function TeachersComponent() {
    let sliderRef = useRef(null);

    const settings = {
      dots: false,
      infinite: true,
      autoplay: false,
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
          <div className="pb-6 pt-8 lg:pt-12 xl:pt-16 text-zinc-700 my-10">
            <div className="flex-center space-y-3 lg:space-y-6 flex-col mb-3 xs:mb-8 lg:mb-10">
              <h3 className="text-2xl lg:text-4xl font-MikhakWoff2one font-bold">
                استادان محترم
              </h3>
              <span className="text-lg lg:text-xl px-4 tracking-tighter text-center">
              مدرسه، خانه ای با کیفیت در آموزش همراه با معلمان مجرب
              </span>
            </div>
            <div className="slider-container">
              <Slider ref={(slider) => (sliderRef = slider)} {...settings} className="px-2">
                <div>
                  <div className="relative mx-2 rounded-xl overflow-hidden group">
                    <img
                      src="images/teachers_1.jpg"
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="w-full h-full absolute flex-center flex-col top-[350px] group-hover:top-0 transition-all duration-300 bg-gradient-to-t from-white via-white/10 to-white/0">
                      <p className="font-MikhakWoff2one text-2xl font-bold mt-60">والتر وایت</p>
                      <span>مربی شیمی</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative mx-2 rounded-xl overflow-hidden group">
                    <img
                      src="images/teachers_2.jpg"
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="w-full h-full absolute flex-center flex-col top-[350px] group-hover:top-0 transition-all duration-300 bg-gradient-to-t from-white via-white/10 to-white/0">
                      <p className="font-MikhakWoff2one text-2xl font-bold mt-60">میکاسا یاگامی</p>
                      <span>استاد فلسفه</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative mx-2 rounded-xl overflow-hidden group">
                    <img
                      src="images/teachers_3.webp"
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="w-full h-full absolute flex-center flex-col top-[350px] group-hover:top-0 transition-all duration-300 bg-gradient-to-t from-white via-white/10 to-white/0">
                      <p className="font-MikhakWoff2one text-2xl font-bold mt-60">ماریانا جنر </p>
                      <span>مربی هنر</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative mx-2 rounded-xl overflow-hidden group">
                    <img
                      src="images/teachers_4.jpg"
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="w-full h-full absolute flex-center flex-col top-[350px] group-hover:top-0 transition-all duration-300 bg-gradient-to-t from-white via-white/10 to-white/0">
                      <p className="font-MikhakWoff2one text-2xl font-bold mt-60">سلنا اسمیت</p>
                      <span>مربی زبان انگلیسی</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative mx-2 rounded-xl overflow-hidden group">
                    <img
                      src="images/teachers_5.jpg"
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="w-full h-full absolute flex-center flex-col top-[350px] group-hover:top-0 transition-all duration-300 bg-gradient-to-t from-white via-white/10 to-white/0">
                      <p className="font-MikhakWoff2one text-2xl font-bold mt-60">آیسان گوندش</p>
                      <span>مربی زبان ترکی</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative mx-2 rounded-xl overflow-hidden group">
                    <img
                      src="images/teachers_6.jpg"
                      className="w-full h-full"
                      alt=""
                    />
                    <div className="w-full h-full absolute flex-center flex-col top-[350px] group-hover:top-0 transition-all duration-300 bg-gradient-to-t from-white via-white/10 to-white/0">
                      <p className="font-MikhakWoff2one text-2xl font-bold mt-60">جان پیترسون</p>
                      <span>مشاوره تحصیلی</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </>
      );
}

export default TeachersComponent
