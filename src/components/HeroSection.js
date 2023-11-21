import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero-section pl-[29px] lg:hidden'>
        <div className='mb-[10px] flex gap-4 overflow-scroll'>
            <img src='images/hero-banner.png' className='w-[333px]'/>
            <img src='images/hero-banner.png' className='w-[333px]'/>
        </div>
        <div className='flex justify-center items-center gap-[4px] pb-[27px]'>
            <div className='dot rounded-[10px] bg-[#0F002B] h-[6px] w-[6px]'></div>
            <div className='dot rounded-[10px] bg-white h-[6px] w-[6px]'></div>
            <div className='dot rounded-[10px] bg-white h-[6px] w-[6px]'></div>
            <div className='dot rounded-[10px] bg-white h-[6px] w-[6px]'></div>
        </div>
    </section>
  )
}

export default HeroSection