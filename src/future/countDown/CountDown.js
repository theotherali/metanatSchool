import React from "react";

export default function CountDown() {
  return (
    <div className="flex-center text-white my-24">

      {/* Desktop CountDown */}
      <div className="hidden lg:block chevronWrraper">
        <div className="chevronWrraperLeft">
          <div class="flex-center" x-data="beer()" x-init="start()">
            <div class="z-10 mt-14">
              <h1 class="text-3xl text-center mb-3 font-extralight">
                پذیرش برای سال تحصیلی ۱۴۰۳
              </h1>
              <div class="text-6xl text-center flex-center w-full">
                <div class="text-3xl mr-1 font-extralight">تا</div>
                <div class="w-24 mx-1 p-2 bg-white text-lightishBlue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="seconds">
                    00
                  </div>
                  <div class="uppercase text-sm leading-none">ثانیه</div>
                </div>
                <div class="w-24 mx-1 p-2 bg-white text-lightishBlue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="minutes">
                    00
                  </div>
                  <div class="uppercase text-sm leading-none">دقیقه</div>
                </div>
                <div class="w-24 mx-1 p-2 bg-white text-lightishBlue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="hours">
                    00
                  </div>
                  <div class="uppercase text-sm leading-none">ساعت</div>
                </div>
                <div class="w-24 mx-1 p-2 bg-white text-lightishBlue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="days">
                    00
                  </div>
                  <div class="uppercase text-sm leading-none">روز</div>
                </div>
              </div>
              <p class="text-2xl text-center mt-3">دیگر بسته میشود</p>
            </div>
          </div>
        </div>
        <div className="chevronWrraperRight">
          <div className="mt-14 space-y-3">
            <h1 className="mt-16 text-2xl font-MikhakWoff2one px-10">
              اولین مدرسه ی مونته سوری در استان مرکزی برای سال تحصیلی جدید ثبت
              نام میکند
            </h1>
            <div className="pt-8">
              <button className="bg-pink-400 text-xl text-white rounded-b-full font-bold font-MikhakWoff2one py-3 px-6 xs:px-20 md:px-30 lg:px-40 hover:bg-cyan-50 hover:text-amber-500 hover:outline outline-2 transition-all">
                بیشتر بدانید
              </button>
            </div>
          </div>
        </div>
        {/* <!-- component --> */}
        {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script> */}
      </div>

      {/* Mobile CountDown */}

      <div className="hexagon lg:hidden text-black">
        <div className="">
          <div class="flex-center" x-data="beer()" x-init="start()">
            <div class="z-10 mt-14">
              <h1 class="text-3xl text-center mb-3 font-extralight">
                پذیرش برای سال تحصیلی ۱۴۰۳
              </h1>
              <div class="text-6xl text-center flex-center w-full">
                <div class="text-3xl mr-1 font-extralight">تا</div>
                <div class="w-24 mx-1 p-2 bg-white text-lightishBlue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="seconds">
                    00
                  </div>
                  <div class="uppercase text-sm leading-none">ثانیه</div>
                </div>
                <div class="w-24 mx-1 p-2 bg-white text-lightishBlue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="minutes">
                    00
                  </div>
                  <div class="uppercase text-sm leading-none">دقیقه</div>
                </div>
                <div class="w-24 mx-1 p-2 bg-white text-lightishBlue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="hours">
                    00
                  </div>
                  <div class="uppercase text-sm leading-none">ساعت</div>
                </div>
                <div class="w-24 mx-1 p-2 bg-white text-lightishBlue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="days">
                    00
                  </div>
                  <div class="uppercase text-sm leading-none">روز</div>
                </div>
              </div>
              <p class="text-2xl text-center mt-3">دیگر بسته میشود</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-14 space-y-3">
            <h1 className="mt-16 text-2xl font-MikhakWoff2one px-10">
              اولین مدرسه ی مونته سوری در استان مرکزی برای سال تحصیلی جدید ثبت
              نام میکند
            </h1>
            <div className="pt-8">
              <button className="bg-pink-400 text-xl text-white rounded-b-full font-bold font-MikhakWoff2one py-3 px-6 xs:px-20 md:px-30 lg:px-40 hover:bg-cyan-50 hover:text-amber-500 hover:outline outline-2 transition-all">
                بیشتر بدانید
              </button>
            </div>
          </div>
        </div>
        {/* <!-- component --> */}
        {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script> */}
      </div>

      {/* <script>
function beer() {
    return {
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '00',
        distance: 0,
        countdown: null,
        beerTime: new Date('May 17, 2021 00:00:00').getTime(),
        now: new Date().getTime(),
        start: function() {
            this.countdown = setInterval(() => {
                // Calculate time
                this.now = new Date().getTime();
                this.distance = this.beerTime - this.now;
                // Set Times
                this.days = this.padNum( Math.floor(this.distance / (1000*60*60*24)) );
                this.hours = this.padNum( Math.floor((this.distance % (1000*60*60*24)) / (1000*60*60)) );
                this.minutes = this.padNum( Math.floor((this.distance % (1000*60*60)) / (1000*60)) );
                this.seconds = this.padNum( Math.floor((this.distance % (1000*60)) / 1000) );
                // Stop
                if (this.distance < 0) {
                    clearInterval(this.countdown);
                    this.days = '00';
                    this.hours = '00';
                    this.minutes = '00';
                    this.seconds = '00';
                }
            },100);
        },
        padNum: function(num) {
            var zero = '';
            for (var i = 0; i < 2; i++) {
                zero += '0';
            }
            return (zero + num).slice(-2);
        }
    }
}
</script> */}

      {/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
      {/* <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div> */}
    </div>
  );
}

// import React, {useState, useEffect, useRef} from 'react'
// const STATUS = {
//   STARTED: 'Started',
//   STOPPED: 'Stopped',
// }

// const INITIAL_COUNT = 120

// export default function CountdownApp() {
//   const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
//   const [status, setStatus] = useState(STATUS.STOPPED)

//   const secondsToDisplay = secondsRemaining % 60
//   const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
//   const minutesToDisplay = minutesRemaining % 60
//   const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

//   const handleStart = () => {
//     setStatus(STATUS.STARTED)
//   }
//   const handleStop = () => {
//     setStatus(STATUS.STOPPED)
//   }
//   const handleReset = () => {
//     setStatus(STATUS.STOPPED)
//     setSecondsRemaining(INITIAL_COUNT)
//   }
//   useInterval(
//     () => {
//       if (secondsRemaining > 0) {
//         setSecondsRemaining(secondsRemaining - 1)
//       } else {
//         setStatus(STATUS.STOPPED)
//       }
//     },
//     status === STATUS.STARTED ? 1000 : null,
//     // passing null stops the interval
//   )
//   return (
//     <div className="App">
//       <h1>React Countdown Demo</h1>
//       <button onClick={handleStart} type="button">
//         Start
//       </button>
//       <button onClick={handleStop} type="button">
//         Stop
//       </button>
//       <button onClick={handleReset} type="button">
//         Reset
//       </button>
//       <div style={{padding: 20}}>
//         {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
//         {twoDigits(secondsToDisplay)}
//       </div>
//       <div>Status: {status}</div>
//     </div>
//   )
// }

// // source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// function useInterval(callback, delay) {
//   const savedCallback = useRef()

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback
//   }, [callback])

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current()
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay)
//       return () => clearInterval(id)
//     }
//   }, [delay])
// }

// // https://stackoverflow.com/a/2998874/1673761
// const twoDigits = (num) => String(num).padStart(2, '0')
