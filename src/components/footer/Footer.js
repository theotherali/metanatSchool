import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IoIosSchool } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-purple-800/60 mt-10">
      <svg
        id="curve"
        viewBox="0 0 100 22"
        fill="#ecfeff"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-[1px] right-0 left-0 mx-auto hidden md:inline-block w-[154px] rotate-180"
      >
        <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"></path>
      </svg>

      <div className="absolute -top-3 right-0 left-0 mx-auto translate-y-[6px] hidden md:flex-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full">
        <KeyboardArrowUpIcon className="w-5 h-5 text-zinc-700" />
      </div>

      <div className=" text-zinc-800 sm:w-[94%] lg:w-[90%] px-4 md:px-0 mx-auto">
        <div className="flex justify-between flex-wrap">
          <div>
            <div className="logo flex items-center font-EstedadBold mb-2 mt-10 md:mt-[26px]">
              <span className="text-2xl mb-1 pl-2 text-white">
                مدرسه مونته سوری
              </span>
              <Link to={"/"} className="flex items-center text-amber-300">
                <span className="text-3xl">متانت</span>
                <IoIosSchool className="w-14 h-14" />
              </Link>
            </div>
            <p className="xl:max-w-[800px] text-lg md:text-lg/[40px]">
              روش مونته سوری یک روش آموزشی است که بر روی علایق و فعالیت‌های
              روزمره و طبیعی کودکان تمرکز دارد. این روش کاملاً از روش‌های خشک و
              رسمی آموزشی جدا بوده و بیشتر بر روی مهارت‌هایی تأکید می‌کند که در
              دنیای واقعی برای کودکان کاربرد دارد. این روش معمولاً در محیط‌های
              آموزشی مانند مدارس و مهدکودک‌ها اجرا می‌شود و کودکان را به یادگیری
              دانش مشتاق می‌کند. کودکان در روش مونته سوری دیگر با مفاهیم خشک و
              انتزاعی سر و کار ندارند و می‌توانند جهان اطراف خود را با نگاه
              تازه‌تری درک کنند. همچنین هیچ زور و اجباری بر روی کودکان نیست و
              آن‌ها کاملا احساس آزادی عمل دارند.
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <h4 className="font-DanaDemiBold text-2xl mb-6 md:mb-7">
              دسترسی سریع
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 md:gap-y-5 gap-x-10 md:gap-x-16">
              <Link
                to={"/"}
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-amber-200 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                صفحه اصلی
              </Link>
              <Link
                to={"/aboutUs"}
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-amber-200 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                درباره ی ما
              </Link>
              <Link
                to={"/classes"}
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-amber-200 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                کلاس ها
              </Link>
              <Link
                to={"/events"}
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-amber-200 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                رویداد ها
              </Link>
              <Link
                to={"/teachers"}
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-amber-200 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                مربیان
              </Link>
              <Link
                to={"/contactUs"}
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-amber-200 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                درباره ما
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-11">
            <h4 className="font-MikhakWoff2one font-bold text-2xl text-white mb-6 md:mb-7">
              ارتباط با ما
            </h4>
            <div>
              <div className="md:text-xl mb-6 md:mb-10">
                <span className="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
                  {/* <svg className="shrink-0 w-6 h-6 md:w-6 md:h-6">
                    <use href="#map-pin"></use>
                  </svg> */}
                  <LocationOnIcon fontSize="large" />
                  مرکزی - اراک - خیابان شهید بهشتی - کوچه عضد ۱
                </span>
                <div className="flex flex-wrap gap-x-5 gap-y-4 font-DanaMedium">
                  <a
                    href="mailto:info@Metanat.com"
                    className="flex items-center gap-x-2 md:gap-x-3 text-amber-200"
                  >
                    <MailIcon fontSize="large" />
                    info@Metanat.com
                  </a>
                  <div className="flex items-center gap-x-2 md:gap-x-3">
                    <PhoneIcon fontSize="large" />
                    <span>0902 123 6628</span>
                    <span>021 - 6789012</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-1.5 md:gap-x-6 ltr-text font-DanaMedium md:text-xl">
                <Link
                  to={"/"}
                  className="flex-center gap-x-2 flex-grow h-12 text-zinc-700 bg-gradient-to-r from-amber-200 to-amber-300 rounded-xl"
                >
                  @metanat_school
                  <TelegramIcon fontSize="large" />
                </Link>
                <a
                  href={''}
                  className="flex-center gap-x-2 flex-grow h-12 border border-amber-200 text-amber-200 rounded-xl"
                >
                  @metanat5353
                  <InstagramIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 font-DanaMedium text-xs/[5] md:text-base border-t border-t-white/10 pt-7 md:pt-8 mt-10 md:mt-11">
          <div className="flex items-center gap-x-2.5">
            <div className="flex-center shrink-0 w-[30px] h-[30px] border border-white/10 rounded-full">
              <div className="flex-center w-5 h-5 border border-white/20 rounded-full">
                <div className="w-2.5 h-2.5 bg-gradient-to-t from-orange-200 to-orange-300 rounded-full"></div>
              </div>
            </div>
            <p>
              تمام حقوق این رابط کاربری متعلق به{" "}
              <span className="text-orange-200">مدرسه متانت </span> میباشد
            </p>
          </div>
          <span className="ltr-text mr-auto">
            Copyright © 2023 Metanat School. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
