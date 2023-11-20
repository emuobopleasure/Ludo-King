import React from 'react'
import ChallengeCard from './ChallengeCard'
import { CiSearch } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { GoSortDesc } from "react-icons/go";

const DesktopSection = () => {
    return (
        <section >
            <div className='desktop-body flex gap-[76px]'>
                <div>
                    <div className='text-[20px] text-[#ffffff] pl-[28px] mt-[18px] pb-[34px]'>
                        live open <span className='font-bold'>challenge</span>
                    </div>
                    <div className='ml-[48px] flex flex-col gap-[10px]'>
                        <ChallengeCard />
                        <ChallengeCard />
                        <ChallengeCard />
                    </div>
                </div>
                <div>
                    <div className='text-[20px] text-[#ffffff] mt-[18px] pl-[28px] pb-[34px]'>
                        sort <span className='font-bold'>battle</span>
                    </div>
                    <div className='flex flex-col gap-[16px] ml-[45px]'>
                        <div className='flex items-center gap-[16px] bg-[#ffffff] py-[10px] px-[16px] rounded-[10px] w-[264px]'>
                            <div>
                                <CiSearch className='w-[16.9px] h-[16.9px]' />
                            </div>
                            <div>
                                <input type='search' placeholder='Search Battle' className='w-[141px] mr-[55px]' />
                            </div>
                        </div>
                        <div className='p-[10px] bg-[#ffffff] flex items-center gap-[10px] rounded-[10px] w-[264px]'>
                            <div className='flex items-center gap-[4px] px-[8px]'>
                                <div>
                                    <MdCurrencyRupee className='h-[16px] w-[16px]' />
                                </div>
                                <p className='text-[#00000091] text-[16px]'>
                                    From
                                </p>
                            </div>
                            <div className='p-[6px] rounded-[50%] w-[32px] h-[32px] border-[1.25px] border-[#0F002B]'>
                                <FiFilter />
                            </div>
                            <div className='flex items-center gap-[4px] px-[8px]'>
                                <div>
                                    <MdCurrencyRupee className='h-[16px] w-[16px]' />
                                </div>
                                <p className='text-[#00000091] w-[48px] text-[16px]'>
                                    To
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <div className='p-[10px] bg-[#ffffff] flex items-center gap-[10px] rounded-[10px] w-[162px]'>
                                <div className='p-[6px] rounded-[50%] w-[32px] h-[32px] border-[1.25px] border-[#0F002B ]'>
                                    <img src='images/sort-asc.svg' className='w-[16.67px] h-[15px]' />
                                </div>
                                <div>
                                    <p className='text-[16px]'>
                                        Low to High
                                    </p>
                                </div>
                            </div>
                            <div className='p-[10px] bg-[#ffffff] flex items-center gap-[10px] rounded-[10px] w-[162px]'>
                                <div className='p-[6px] rounded-[50%] w-[32px] h-[32px] border-[1.25px] border-[#0F002B ]'>
                                    <img src='images/sort-des.svg' className='w-[16.67px] h-[15px]' />
                                </div>
                                <div>
                                    <p className='text-[16px]'>
                                        High to Low
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesktopSection