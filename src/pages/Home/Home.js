import React from "react";
import SlickSliderHome from "../../components/slider/SlickSliderHome";
import SlickSlider from "../../components/slider/SlickSlider";
import Courses from "../Courses/Courses";
import AboutUs from "../AboutUs/AboutUs";
// import CountDown from "../../future/countDown/CountDown";
import Classes from "../Classes/Classes";
import Teachers from "../Teachers/Teachers";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../components/footer/Footer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

// import Countdown from "react-countdown";
// import CountDown from "../../future/countDown/CountDown";

function Home() {
  return (
    <>
      <SlickSliderHome />
      <SlickSlider />
      {/* Description card */}
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap child:shadow-md child:sm:w-[263px] md:child:w-[326px] lg:child:w-[297px] xl:child:w-96 2xl:child:w-[467px] items-center child:w-full child:px-6 gap-4 child:bg-cyan-600/30 text-center my-5 md:mt-20">
          <div className="flex-center flex-col grow gap-y-1 sm:gap-y-4 rounded-lg lg:rounded-tr-[80px] h-32 sm:h-60">
            <div className="flex-center w-16 sm:w-14 h-11 sm:h-14 rounded-tr-2xl rounded-bl-2xl bg-fuchsia-500/90">
              <AccessTimeIcon fontSize="large" className="text-white" />
            </div>
            <p className="text-lg sm:text-2xl">ساعت کاری</p>
            <span className="text-sm sm:text-lg tracking-tighter text-zinc-500">
              یکشنبه - پنجشنبه : ۱۰:۰۰ صبح - ۰۶:۰۰ عصر
            </span>
          </div>

          <div className="flex-center flex-col grow gap-y-1 sm:gap-y-4 rounded-lg h-32 sm:h-60">
            <div className="flex-center w-16 sm:w-14 h-11 sm:h-14 rounded-tr-2xl rounded-bl-2xl bg-fuchsia-500/90">
              <PhoneIcon fontSize="large" className="text-white" />
            </div>
            <p className="text-lg sm:text-2xl">تلفن</p>
            <span className="text-sm sm:text-lg tracking-tighter text-zinc-500">
              ۰۲۱-۱۲۳۴۵۶۷۸
            </span>
          </div>

          <div className="flex-center flex-col gap-y-1 grow sm:gap-y-4 rounded-lg lg:rounded-tl-[80px] h-32 sm:h-60">
            <div className="flex-center w-16 sm:w-14 h-11 sm:h-14 rounded-tr-2xl rounded-bl-2xl bg-fuchsia-500/90">
              <LocationOnIcon fontSize="large" className="text-white" />
            </div>
            <p className="text-lg sm:text-2xl">آدرس</p>
            <span className="text-sm sm:text-lg tracking-tighter text-zinc-600">
              مرکزی - اراک - خیابان شهید بهشتی - کوچه عضد ۱
            </span>
          </div>
        </div>
      </div>

      {/* courses */}
      <Courses />

      {/* About Us */}
      <AboutUs />

      {/* Countdown */}
      {/* <CountDown/> */}

      {/* Classes */}
      <Classes />

      {/* Teachers */}
      <Teachers />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
