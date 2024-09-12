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
  };

  return (
    <>
      <div className="bg">
        <div>
          <h3>کلاس های ویژه ی ما</h3>
          <span>
            دیگر برنامه های آموزشی ویژه ی مدرسه ی مونته سوری متانت شامل :
          </span>
        </div>
        <div className="slider-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            <div>
              <div>
                <img src="images/Azmoon.jpg" alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src="images/falsafe2.jpg" alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src="images/honareTajasomi2.jpg" alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src="images/moshavere.jpg" alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src="images/varzesh.jpg" alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src="images/zabanEnglish.webp" alt="" />
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
