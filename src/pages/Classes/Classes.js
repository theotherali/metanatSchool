import React, { useRef } from "react";
import Slider from "react-slick";

function Classes() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <>
      <div className="bg-lightishBlue-600/20 py-2">
        <div className="flex-center flex-col mb-4">
          <h3 className="text-2xl lg:text-4xl font-MikhakWoff2one font-bold my-4">کلاس های ویژه ی ما</h3>
          <span className="text-lg lg:text-xl px-4 text-gray-700 tracking-tighter text-center">
            دیگر برنامه های آموزشی ویژه ی مدرسه ی مونته سوری متانت شامل :
          </span>
        </div>
        <div className="slider-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            <div>
              <div className="mx-2">
                <img src="images/Azmoon.jpg" className="w-full h-full rounded-xl" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-2">
                <img src="images/child_falsafe.jpg" className="w-full h-full rounded-xl" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-2">
                <img src="images/honareTajasomi2.jpg" className="w-full h-full rounded-xl" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-2">
                <img src="images/moshavere.jpg" className="w-full h-full rounded-xl" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-2">
                <img src="images/varzesh.jpg" className="w-full h-full rounded-xl" alt="" />
              </div>
            </div>
            <div>
              <div className="mx-2">
                <img src="images/zabanEnglishhh.jpg" className="w-full h-full rounded-xl" alt="" />
              </div>
            </div>
          </Slider>
          {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
        </div>
      </div>
    </>
  );
}
export default Classes;

// function Classes() {
//   return (
//     <div>
//       Classes
//     </div>
//   )
// }

// export default Classes
