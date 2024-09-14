import React from "react";
import SlickSlider from "../../components/slider/SlickSlider";
import Classes from "../Classes/Classes";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import Countdown from "react-countdown";
// import CountDown from "../../future/countDown/CountDown";

function Home() {
  return (
    <>
      <SlickSlider />
      <div className="container">
        {/* Description card */}

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
              ایران - استان اراک - خیابان عضد - کوچه عضد ۱
            </span>
          </div>
        </div>
      </div>

      {/* courses */}
      <div className="container my-14 pt-2 lg:my-16">
        <div className="flex-center text-center flex-col gap-y-3 lg:gap-y-5 mb-6">
          <p className="text-2xl lg:text-4xl font-MikhakWoff2one font-bold">
            دوره های منظم ما
          </p>
          <span className="text-lg lg:text-xl max-w-[700px] text-gray-500 tracking-tighter">
            دوره کالج یک کلاس است که توسط یک کالج یا دانشگاه ارایه میشود. این
            دوره ها معمولا بخشی از برنامه های پیشرو هستند
          </span>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-5 2xl:gap-14">
          <Card
            style={{
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.05)",
              borderTopLeftRadius: "32px",
              borderBottomRightRadius: "32px",
              backgroundColor: "rgba(8,145,178, 0.6)",
              padding: "15px",
            }}
            sx={{ maxWidth: 350 }}
          >
            <CardMedia
              component="img"
              alt="courses images"
              height="140"
              image="images/pic-1.jpg"
              className="rounded-tl-2xl"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="bg-pink-400 w-full text-white text-center font-bold text-lg font-MikhakWoff2one mb-2 mx-2 py-1.5 rounded-br-2xl hover:bg-cyan-50 hover:text-amber-500 hover:outline outline-1 transition-all">
                بیشتر بدانید
              </Link>
            </CardActions>
          </Card>
          <Card
            style={{
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.05)",
              borderTopLeftRadius: "32px",
              borderBottomRightRadius: "32px",
              backgroundColor: "rgba(8,145,178, 0.6)",
              padding: "15px",
            }}
            sx={{ maxWidth: 350 }}
          >
            <CardMedia
              component="img"
              alt="courses images"
              height="140"
              image="images/pic-1.jpg"
              className="rounded-tl-2xl"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="bg-pink-400 w-full text-white text-center font-bold text-lg font-MikhakWoff2one mb-2 mx-2 py-1.5 rounded-br-2xl hover:bg-cyan-50 hover:text-amber-500 hover:outline outline-1 transition-all">
                بیشتر بدانید
              </Link>
            </CardActions>
          </Card>
          <Card
            style={{
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.05)",
              borderTopLeftRadius: "32px",
              borderBottomRightRadius: "32px",
              backgroundColor: "rgba(8,145,178, 0.6)",
              padding: "15px",
            }}
            sx={{ maxWidth: 350 }}
          >
            <CardMedia
              component="img"
              alt="courses images"
              height="140"
              image="images/pic-1.jpg"
              className="rounded-tl-2xl"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="bg-pink-400 w-full text-white text-center font-bold text-lg font-MikhakWoff2one mb-2 mx-2 py-1.5 rounded-br-2xl hover:bg-cyan-50 hover:text-amber-500 hover:outline outline-1 transition-all">
                بیشتر بدانید
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
      {/* About Us */}
      <div className="container mb-12">
        <div className="flex flex-col lg:flex-row">
          <div className="relative flex-center my-16 lg:w-full">
            <div className="absolute w-full lg:w-[120%] h-[130%] sm:h-[122%] md:h-[118%] lg:h-[120%] xl:h-[105%] bg-pink-400 z-0 -top-14 lg:-top-12 xl:-top-4 -right-16 xs:-right-24 md:-right-36 rounded-tl-[70px]"></div>
            <img
              src="images/daughter-school.jpg"
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

      {/* Countdown */}
      {/* <CountDown/> */}


      {/* Classes */}
      <Classes />




    </>
  );
}

export default Home;
