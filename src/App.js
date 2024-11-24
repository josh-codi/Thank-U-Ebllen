import './App.css';
import {flo1, port1, port2, port3, port4} from './assets/index'

function App() {
  return (
    <div className="w-screen h-[100dvh] relative text-center">
      <img src="https://images.unsplash.com/photo-1607935911096-f31f85819be7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
      <section className="fixed w-screen h-screen top-0 left-0 flex flex-col items-center md:py-[5dvh]">
        <div className="w-full md:w-[777px] lg:w-[800px] h-full flex flex-col items-center bg-gray-100 md:rounded-2xl shadow-2xl overflow-hidden relative">
          <div className="w-full md:min-h-[250px] grid grid-cols-4 z-10">
            <aside className="size-full overflow-hidden flex items-start">
              <img src={port1} alt="" className="size-full object-cover" />
            </aside>
            <aside className="size-full overflow-hidden flex items-start">
              <img src={port2} alt="" className="size-full object-cover" />
            </aside>
            <aside className="size-full overflow-hidden flex items-start">
              <img src={port3} alt="" className="size-full object-cover" />
            </aside>
            <aside className="size-full overflow-hidden flex items-start">
              <img src={port4} alt="" className="size-full object-cover" />
            </aside>
            {/* <img src="https://w0.peakpx.com/wallpaper/324/667/HD-wallpaper-bride-and-groom-bride-wedding-groom-love-landscape.jpg" alt="" className="w-full h-full object-cover" /> */}
          </div>
          <br />
          <div className="flex flex-col justify-between items-center h-full z-10 md:pb-0 pb-20">
            <section className="flex flex-col items-center">
              <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-semibold">Thank You</h1>
              <br />
              <div className="flex flex-col items-center px-3 text-sm sm:text-base">
                <small className='sm:w-[300px] md:w-[400px] my-2 tracking-[0.25rem]'>WE WOULD LIKE TO THANK OUR FAMILY AND FRIENDS FOR SHARING THIS SPECIAL CEREMONY WITH US!</small>
                <small className='sm:w-[350px] md:w-[500px] my-2 tracking-[0.25rem]'>ALSO FOR ALL OF THE LOVE, SUPPORT, ENCOURAGEMENT AND LAUGHTER YOU HAVE COUNTRIBUTED TO OUR LIVES.</small>
                <small className='my-2 tracking-[0.25rem]'>WE LOVE YOU ALL</small>
              </div>
              <br />
            </section>
            <section className="flex flex-col items-center">
              <div className="flex items-center justify-center md:mb-0 mb-3">
                <div className="w-10 border border-black mt-1"/>
                <h1 className="text-xl md:text-3xl font-bold italic mx-2">Love</h1>
                <div className="w-10 border border-black mt-1"/>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.3rem]">
                <span>E</span><span className='text-lg sm:text-xl md:text-2xl mr-2'>BENEZER</span> 
                <span>A</span><span className='text-lg sm:text-xl md:text-2xl mr-2'>ND</span>
                <span>E</span><span className='text-lg sm:text-xl md:text-2xl'>LLEN</span>
              </h1>
              <p className='uppercase tracking-[0.25rem] font-bold text-xs md:text-sm text-slate-600 mt-1'>November 23, 2024</p>
            </section>
          </div>
          <br />
          <div className="md:hidden w-full absolute -bottom-0 sm:-bottom-20 right-0 transition-all duration-500 ease-linear">
            <img className='rotate-180 w-full' src="https://img.freepik.com/premium-photo/pure-white-background-with-red-roses-scattered-white-ground-blurry-background_327072-7084.jpg" alt="" />
          </div>
          <div className="hidden md:block absolute -bottom-10 -left-10 transition-all duration-500 ease-linear">
            <img className='w-[300px]' src={flo1} alt="" />
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
