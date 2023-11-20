import React from 'react'
import { IoIosMenu } from "react-icons/io";

const Header = () => {
    return (
        <header>
            <nav className='navbar px-[20px] pt-[7px] pb-[26px]'>
                <div className='mobile-nav'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <button>
                                <IoIosMenu color='#FFFFFF' size='1.5rem' />
                            </button>
                            <hgroup className='text-[#0F002B] flex flex-col gap-3 items-center'>
                                <h1 className='h-1 font-extrabold text-[16px] leading-[22px]'>
                                    LUDO KING
                                </h1>
                                <h5 className='h-5 italic text-[15.72px] font-normal'>
                                    punch line
                                </h5>
                            </hgroup>
                        </div>
                        <div>
                            <button>
                                <img src='images/avatar.png'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div></div>
            </nav>
        </header>
    )
}

export default Header