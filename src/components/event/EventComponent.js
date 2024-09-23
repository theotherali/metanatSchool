import React from 'react'
import { Link } from "react-router-dom";
import { EventsData } from "../../datas";

function EventComponent() {

  return (
    <>
    <div className="container my-10 md:my-25">
      <div className="flex-center text-center flex-col gap-y-3 lg:gap-y-5 mb-10">
        <p className="text-2xl lg:text-4xl font-MikhakWoff2one font-bold">
          رویداد ها
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-5 2xl:gap-14">

        {EventsData.map(event => (
          <div key={event.id} className="flex flex-col max-w-[340px]  bg-cyan-600/60 p-5 rounded-tl-4xl rounded-br-4xl">
          <div className="h-40 rounded-tl-2xl overflow-hidden">
            <img src={event.img} alt={event.alt} className='w-full'/>
          </div>
          <div className="flex-center flex-col mt-3 space-y-4 text-center text-zinc-700">
            <h3 className="text-xl font-EstedadBold">{event.title}</h3>
            <span className="pb-4 line-clamp-2 h-12">
              {event.desc}
            </span>
            <Link className="bg-pink-400 w-full text-white text-center font-bold text-lg font-MikhakWoff2one mb-2 mx-2 py-1.5 rounded-br-2xl hover:bg-cyan-50 hover:text-amber-500 hover:outline outline-1 transition-all">
              بیشتر بدانید
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default EventComponent
