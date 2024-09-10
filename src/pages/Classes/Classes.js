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
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div>slide</div>
        <div>slide</div>
        <div>slide</div>
        <div>slide</div>
        <div>slide</div>
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
