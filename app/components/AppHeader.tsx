import GoogleButton from '@/components/site/button/GoogleButton'
import React from 'react'

type Props = {}

const AppHeader = (props: Props) => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-4">
                    <div className="text-6xl font-medium w-[80%]">
                        Photoshop Express Photo Editor
                    </div>
                    <div className="">
                        <div className="text-[#01875F] text-lg font-medium ">Adobe</div>
                        <div className="text-xs font-medium text-slate-500">In-app purchases</div>
                    </div>
                    {/** 3 Columns */}
                    <div className="flex justify-between w-[40%] my-5">
                        <div className="flex flex-col gap-1 items-center">
                            <div className="flex items-center gap-1">
                                <div className="font-medium text-sm">4.4</div>
                                <div><img src="/star.svg" className="text-black w-3 h-3" /></div>
                            </div>
                            <div className="text-xs  font-medium">
                                2.18M reviews
                            </div>
                        </div>
                        <div className="w-[1px] bg-slate-200 h-[70%] rounded -mx-2"></div>
                        <div className="flex flex-col gap-1 items-center">
                            <div className="flex items-center gap-1">
                                <div className="font-medium text-sm">100M+</div>
                                <div><img src="/star.svg" className="text-black w-3 h-3 hidden" /></div>
                            </div>
                            <div className="text-xs  font-medium">
                                Downloads
                            </div>
                        </div>
                        <div className="w-[1px] bg-slate-200 h-[70%] rounded -mx-2"></div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="flex items-center gap-1">
                                <div className="font-medium text-sm"></div>
                                <div><img src="/3+.png" className="text-black w-4 h-4" /></div>
                            </div>
                            <div className="text-xs font-medium">
                                Rated for 3+
                            </div>
                        </div>
                    </div>

                    {/** Install Button */}
                    <div className="flex gap-3 items-center">
                        <GoogleButton caption="Install on more devices" type="install" />
                        <GoogleButton icon="/shareIcon.svg" caption="Share" type="share" />
                    </div>
                </div>
                <div className="relative flex justify-center">
                    <img src="/AppLogo.jpg" alt="adobe" className="w-60 h-60 rounded-[50px] z-[1]" />
                    <img src="/AppLogo.jpg" alt="adobe" className="w-56 h-56 rounded-[50px] absolute bottom-[80px] blur-md opacity-50" />
                </div>
            </div>
            <div className="flex gap-3 items-center my-5">
                <div>
                    <svg className="fill-[#5f6368] w-5 h-5" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z" /></svg>
                </div>
                <div className="text-sm text-[#5F6368] font-medium">This app is available for some of your devices</div>
            </div>
        </div>
    )
}

export default AppHeader