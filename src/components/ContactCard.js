import React from 'react'

const ContactCard = () => {
    return (
        <article>
            <div className='bg-[#FEAD3A] rounded-[10px] pt-[20px] pb-[21px]'>
                <p className='text-[20px] font-normal pl-[20px]'>
                    start your own <span className='font-extrabold'>battle</span>
                </p>
                <div className='px-[22px]'>
                    <div className='p-[10px] flex items-center bg-[#FFFFFF] rounded-[10px] justify-between mb-[28px]'>
                        <p className='text-[#0F002B]'>
                            ₹
                        </p>
                        <input type='search' placeholder='Your battle amount' className='text-[rgba_(0,_0,_0,_0.57)] text-[16px] w-[220px]' />
                        <div className='p-[6px] bg-[#FEAD3A] rounded-[50%]'>
                            <img src='images/arcticons_battle.png' />
                        </div>
                    </div>
                    <div className='px-[21.12px] rounded-[13.20px] bg-[#FFFFFF] flex items-center justify-between'>
                        <a href='' className='p-[3.40px]'>
                            <img src='images/whatsapp.png' />
                        </a>
                        <a href='' className='p-[3.40px]'>
                            <img src='images/facebook.png' />
                        </a>
                        <a href='' className='p-[3.40px]'>
                            <img src='images/twitter-x.png' />
                        </a>
                        <a href='' className='p-[3.40px]'>
                            <img src='images/copy.png' />
                        </a>
                        <a href='' className='p-[3.40px]'>
                            <img src='images/share.png' />
                        </a>
                    </div>
                </div>
                <div className='border-[#0F002B] border-[3px] w-[90px] mx-auto mt-[37.2px]'>

                </div>
            </div>
        </article>
    )
}

export default ContactCard