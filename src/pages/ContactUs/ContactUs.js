import React from "react";
import { contactUsImage } from "../../datas";

function ContactUs() {
  return (
    <div className="container">
      <div className="flex-center space-y-3 lg:space-y-6 flex-col mb-3 xs:mb-8 lg:mb-10">
        <h3 className="text-2xl lg:text-4xl font-MikhakWoff2one font-bold">
          در تماس باشیم
        </h3>
      </div>
      <div className="py-14 shadow-2xl">
        <div className="flex w-full px-6 py-10">
          <form
            action="#"
            className="w-2/5 space-y-5 px-12 child:w-full child:bg-white child:shadow-md"
          >
            <div className="rounded-xl overflow-hidden p-4">
              <input
                type="text"
                className="w-full outline-none"
                placeholder="نام و نام خانوادگی"
              />
            </div>
            <div className="rounded-xl overflow-hidden p-4">
              <input
                type="email"
                className="w-full outline-none"
                placeholder="ایمیل"
              />
            </div>
            <div className="rounded-xl overflow-hidden p-4">
              <input
                type="text"
                className="w-full outline-none"
                placeholder="موبایل"
              />
            </div>
            <div className="rounded-xl overflow-hidden p-4">
              <input
                type="text"
                className="w-full outline-none"
                placeholder="پیام ..."
              />
            </div>
            <div>
              <button type="submit" className="w-20">
                ارسال
              </button>
            </div>
          </form>
          <div className="w-3/5 bg-[url('images/ContactUs.jpg')]">
            <p>نظرات ارزشمند شما</p>
            <div className="flex-center">
              <img
                src={contactUsImage}
                className="w-[60%]"
                alt="contactUsImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
