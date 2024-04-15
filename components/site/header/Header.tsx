import React from 'react'
type Props = {}

const Header = (props: Props) => {
    return (
        <div className='h-[64px] top-0 bg-white w-full p-3 px-8 select-none'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex gap-8 items-center'>
                    <div className='flex gap-2 items-center'>
                        <img src="/playstoreIcon.svg" className='h-[40px] w-[40px]' alt="Playstore Icon" />
                        <h1 className='text-2xl text-[#5F6368] font-medium font-sans'>Google Play</h1>
                    </div>
                    <div className='flex gap-8 items-center pt-1 text-sm'>
                        <div className='cursor-pointer'>Games</div>
                        <div className='cursor-pointer'>Apps</div>
                        <div className='cursor-pointer'>Kids</div>
                    </div>
                </div>
                <div className='flex gap-4 items-center pt-1'>
                    <div className='pt-1'>
                        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
                        <span className="material-symbols-outlined text-slate-600">&#xE8B6;</span>
                    </div>
                    <div className='pt-1'>
                        <span className="material-symbols-outlined text-slate-600">
                            &#xe887;
                        </span>
                    </div>
                    <div>
                        <img src="/CurrentUser.jpg" className='h-[32px] w-[32px] rounded-full' alt="Profile Icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header