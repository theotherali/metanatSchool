import React from "react";
import SlickSliderHome from "../../components/slider/SlickSliderHome";
import CoursesComponent from "../../components/courses/CoursesComponent";
import AboutUsComponent from "../../components/aboutUs/AboutUsComponent";
// import CountDown from "../../future/countDown/CountDown";
import ClassesComponent from "../../components/classes/ClassesComponent";
import TeachersComponent from "../../components/teachers/TeachersComponent";
import ContactUsComponent from "../../components/contactUs/ContactUsComponent";
import Footer from "../../components/footer/Footer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EventComponent from "../../components/event/EventComponent";

// import Countdown from "react-countdown";
// import CountDown from "../../future/countDown/CountDown";

function Home() {
  return (
    <>
      <SlickSliderHome />
      {/* Description card */}
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap child:shadow-md child:sm:w-[263px] md:child:w-[326px] lg:child:w-[297px] xl:child:w-96 2xl:child:w-[467px] items-center child:w-full child:px-6 gap-4 child:bg-cyan-600/30 text-center mt-2 mb-14 md:mb-24 md:mt-20">
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
      <CoursesComponent />

      {/* About Us */}
      <AboutUsComponent />

      {/* Countdown */}
      {/* <CountDown/> */}

      {/* Classes */}
      <ClassesComponent />

      {/* Teachers */}
      <TeachersComponent />

      {/* Events */}
      <EventComponent />

      {/* Contact Us */}
      <ContactUsComponent />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
