import React from 'react'
import { GoPlus } from "react-icons/go";

const MenuItem = ({ icon, text, style }) => {
    return (
        <a href=''>
            <div className={`py-[7px] px-[12px] border flex items-center gap-[8px] text-[#0F002B] w-[160px] rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#FFB653] hover:border-[#FFB653] ${style}`}>
                <div className=''>
                    {icon}
                </div>
                <div className='text-[11px] leading-[15px] font-bold'>
                    {text}
                </div>
            </div>
        </a>
    )
}

export default MenuItem