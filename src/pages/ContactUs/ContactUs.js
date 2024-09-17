import React from "react";
import { contactUsImage } from "../../datas";

function ContactUs() {
  return (
    <div className="container">
      <div className="flex-center flex-col mb-12">
        <h3 className="mb-3 xs:mb-8 lg:mb-10text-2xl lg:text-4xl font-MikhakWoff2one font-bold">
          در تماس باشیم
        </h3>
        <div className="w-[90%] h-[450px] bg-contactUs shadow-2xl rounded-3xl overflow-hidden">
          <div className="h-full flex bg-gradient-to-r from-lightishBlue-800/40 via-emerald-800/30 to-black/70">
          <form
            action="#"
            className="w-2/5 space-y-5 p-6"
          >
            <div className="rounded-xl p-4 w-full shadow-white/15 backdrop-blur shadow-normal">
              <input
                type="text"
                className="w-full text-white outline-none bg-transparent"
                placeholder="نام و نام خانوادگی"
              />
            </div>
            <div className="rounded-xl p-4 w-full shadow-white/15 backdrop-blur shadow-normal">
              <input
                type="email"
                className="w-full text-white outline-none bg-transparent"
                placeholder="ایمیل"
              />
            </div>
            <div className="rounded-xl p-4 w-full shadow-white/15 backdrop-blur shadow-normal">
              <input
                type="text"
                className="w-full text-white outline-none bg-transparent"
                placeholder="موبایل"
              />
            </div>
            <div className="rounded-xl p-4 w-full shadow-white/15 backdrop-blur shadow-normal">
              <input
                type="text"
                className="w-full text-white outline-none bg-transparent"
                placeholder="پیام ..."
              />
            </div>
            <div className="shadow-none bg-slate-400">
              <button type="submit" className="">
                ارسال
              </button>
            </div>
          </form>
          <div className="w-3/5 flex-center flex-col text-center">
            <p>نظرات ارزشمند شما</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
