import React from 'react'

function ContactUsComponent() {
  return (
    <div className="container">
    <div className="flex-center text-zinc-700 flex-col my-10">
      <h3 className="mb-3 xs:mb-8 lg:mb-10text-2xl lg:text-4xl font-MikhakWoff2one font-bold">
        در تماس باشیم
      </h3>
      <div className="w-[90%] h-[450px] bg-contactUs shadow-2xl rounded-3xl md:rounded-br-4xl overflow-hidden">
        <div className="flex-center h-full bg-gradient-to-r from-lightishBlue-800/40 via-emerald-800/30 to-black/70">
          <form
            action="#"
            className="w-[90%] md:w-4/6 lg:w-2/5 space-y-5 p-6"
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
            <div className="rounded-xl p-4 w-full h-25 shadow-white/15 backdrop-blur shadow-normal">
              <input
                type="text"
                className="w-full text-white outline-none bg-transparent"
                placeholder="پیام ..."
              />
            </div>

            <button
              type="submit"
              className="bg-pink-400 text-white font-bold font-MikhakWoff2one py-4 w-full rounded-3xl rounded-l-sm rounded-tr-sm  hover:bg-transparent hover:text-white hover:outline outline-1 transition-all"
            >
              ارسال پیام
            </button>
          </form>
          <div className="hidden lg:flex-center w-3/5 flex-col space-y-6 text-6xl text-white font-MikhakWoff2one font-bold">
            <span>بازخورد های</span>
            <span className="text-amber-300">ارزشمند</span>
            <span>شما</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUsComponent
