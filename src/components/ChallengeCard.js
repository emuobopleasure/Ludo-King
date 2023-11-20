import React from 'react'

const ChallengeCard = () => {
    return (
        <article>
            <div className='card bg-[#ffffff] rounded-[10px]'>
                <div className='card-top px-[15px] py-[13px] rounded-[10px] text-[#0F002B] text-[16px]'>
                    <p>
                        <span className='italic'>open challenge from</span> <span className='font-extrabold'>ravan3p</span>
                    </p>
                    <p>
                        · 2 minutes ago
                    </p>
                </div>
                <div className='card-bottom py-[15px] pl-[16px] pr-[32px] mx-[1px] border-t bg-[#FEAD3A] rounded-bl-[10px] rounded-br-[10px] text-[#ffffff] flex justify-between items-center'>
                    <div>
                        <p>
                            Entry fee
                            <span className='ml-[15px] font-extrabold'>₹40</span>
                        </p>
                        <p>
                            Prize
                            <span className='ml-[15px] font-extrabold'>₹80</span>
                        </p>
                    </div>
                    <div className='bg-[#0F002B] p-[11px] rounded-[50%]'>
                        <img src='images/arcticons.png' />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ChallengeCard