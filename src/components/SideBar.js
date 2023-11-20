import React from 'react'
import MenuItem from './MenuItem'
import { FaRegUser, FaPlus } from "react-icons/fa6";
import { PiWallet } from "react-icons/pi";
import { MdHistory, MdSupportAgent } from "react-icons/md";
import { IoMdNotificationsOutline} from "react-icons/io"

const SideBar = () => {
    return (
        <section className='side-bar'>
            <div className='w-[200px] h-full text-center bg-[#FFFFFF]'>
                <div className=''>
                    <div>
                        <img src='images/ludo-indian.png' />
                    </div>
                </div>
                <div className=''>
                    <div className=''>
                        <h1 className='text-[#0E002B] text-[30px] font-extrabold leading-[40.92px]'>
                            LUDO KING
                        </h1>
                        <p className='text-[#000000] text-[20px] leading-[24.5px] font-normal'>
                            punch line
                        </p>
                    </div>
                </div>
                <div className='mt-[24px] py-[16px] flex justify-center flex-wrap gap-[8px]'>
                    <MenuItem style='bg-[#FFB653] hover:bg-[#ffffff] border-[#FFB653] hover:border-[#ffffff]' icon={<FaPlus  className='side-icon' />} text='New game' />
                    <MenuItem icon={<FaRegUser className='side-icon' />} text='Profile' />
                    <MenuItem icon={<img src='images/money-svg.svg' className='side-icon' />} text='Win Cash' />
                    <MenuItem icon={<PiWallet className='side-icon' />} text='My Wallet' />
                    <MenuItem icon={<MdHistory className='side-icon' />} text='Game History' />
                    <MenuItem icon={<FaRegUser className='side-icon' />} text='Transaction History' />
                    <MenuItem icon={<img src='images/refer-svg.svg' className='side-icon' />} text='Refer and Earn' />
                    <MenuItem icon={<IoMdNotificationsOutline className='side-icon' />} text='Notification' />
                    <MenuItem icon={<MdSupportAgent className='side-icon' />} text='Support' />
                </div>
            </div>
        </section>
    )
}

export default SideBar