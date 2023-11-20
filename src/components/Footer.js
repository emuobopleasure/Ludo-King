import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";


const Footer = () => {
    return (
        <footer className='relative '>
            <div className='footer bg-[#FFB653] fixed bottom-0 w-[885px] h-[222px]'>
                <div>
                    <p className='text-[#000000] my-[28px] ml-[28px]'>
                        start your own <span className='font-extrabold'>battle</span>
                    </p>
                </div>
                <div className='flex items-start gap-[118px]'>
                    <div className='p-[10px] flex items-center bg-[#FFFFFF] rounded-[10px] justify-between w-[290px] ml-[62px]'>
                        <p className='text-[#0F002B]'>
                            ₹
                        </p>
                        <input type='search' placeholder='Your battle amount' className='text-[rgba_(0,_0,_0,_0.57)] text-[16px] w-[220px]' />
                        <div className='p-[6px] bg-[#FEAD3A] rounded-[50%]'>
                            <img src='images/arcticons_battle.png' />
                        </div>
                    </div>
                    <div className='px-[21.12px] rounded-[13.20px] bg-[#FFFFFF] flex items-center justify-between h-[52.8px]'>
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
                <p className='text-[12px] font-normal text-[#00000091] mt-[8px] ml-[154px]'>
                    *3.5% commision on battle amount
                </p>
                <button className='arrow-down absolute top-[-22px] left-[47%] bg-[#ffffff] p-[10px] rounded-[50%]'>
                    <RiArrowDownSLine size='28px' />
                </button>
            </div>
        </footer>
    )
}

export default Footer