import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function AboutUsComponent() {
  return (
    <>
      <div className="container my-10 md:my-25">
        <div className="flex flex-col lg:flex-row">
          <div className="relative flex-center my-16 lg:w-full">
            <div className="absolute w-full lg:w-[120%] h-[130%] sm:h-[122%] md:h-[118%] lg:h-[120%] xl:h-[105%] bg-pink-400 z-0 -top-14 lg:-top-12 xl:-top-4 -right-16 xs:-right-24 md:-right-36 rounded-tl-[70px]"></div>
            <img
              src="images/aboutUs.jpg"
              alt="aboutImg"
              className="rounded-tl-[70px] z-10"
            />
          </div>

          <div className="space-y-4 xl:mt-10 lg:w-full mr-4">
            <h3 className="font-EstedadBold text-2xl xs:mt-8 md:text-3xl xl:text-4xl md:text-center">
              چرا متانت را انتخاب کنید؟
            </h3>
            <p className="text-md lg:text-sm xl:text-base text-zinc-600">
              تئوری انتخاب مدرسه فرض میکند که والدین بازیگرانی منطقی هستند که
              میتوانند اطلاعات خود را جمع آوری و مصرف کنند تا مدرسه ای پیدا کنند
              که با نیاز های فرزندشان مطابقت داشته باشد.
            </p>
            <ul className="space-y-3 text-zinc-800 xs:space-y-2 child:lg:text-sm child:xl:text-base">
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                تقویت هوشهای گاردنر
              </li>
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                یادگیری با سرگرمی
              </li>
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                محیط دوستانه و شاد
              </li>
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                زمین بازی بزرگ با پارک کودکان
              </li>
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                آموزشها آمیزه ای از اتاق بازی و کارگاه آموزشی دست ورزی هستند
              </li>
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                آموزشها گروهی با همه ی گروه های سنی برای تقویت یادگیری همتا به
                همتا
              </li>
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                سیستم آموزش مطابق با نیاز های منحصر به فرد دانش آموز
              </li>
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                پروراندن علاقه به یادگیری در دانش آموز
              </li>
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                استقلال و اعتماد به نفس و کارآفرینی اصل پایه آموزش به سبک مونته
                سوری میباشد
              </li>
              <li>
                <CheckCircleIcon
                  fontSize="small"
                  className="text-pink-400 ml-1"
                />
                برگزاری کارگاه فلسفه برای کودکان
              </li>
            </ul>
            <div className="pt-5 lg:pt-6 xl:pt-10">
              <button className="bg-pink-400 text-white font-bold font-MikhakWoff2one py-3 px-6 xs:px-20 md:px-30 lg:px-40 rounded-3xl lg:rounded-r-sm lg:rounded-bl-sm  hover:bg-transparent hover:text-amber-500 hover:outline outline-1 transition-all">
                بیشتر بدانید
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsComponent;
