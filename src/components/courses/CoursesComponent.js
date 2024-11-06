import React from 'react'
import { Link } from "react-router-dom";
import { CoursesData } from '../../datas';

function CoursesComponent() {
    return (
        <>
          <div className="container my-10 md:my-25">
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

              {CoursesData.map(courses => (
                <div key={courses.id} className="flex flex-col max-w-[340px] h-[410px] bg-purple-300/70 p-5 rounded-tl-4xl rounded-br-4xl">
                <div className="h-52 rounded-tl-2xl overflow-hidden">
                  <img src={courses.img} alt={courses.alt} />
                </div>
                <div className="flex-center flex-col mt-3 space-y-4 text-center text-zinc-700">
                  <h3 className="text-xl font-EstedadBold">{courses.title}</h3>
                  <span className="pb-4 line-clamp-2 h-12">
                    {courses.desc}
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
      );
}

export default CoursesComponent
