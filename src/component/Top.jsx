import React from 'react'
import BotIcon from "../assets/CHATBOTS.png"
import Vector from "../assets/Vector.png"

const Top = () => {
    return (
        <div className="h-[80px] bg-blue-50 rounded-t-[20px] flex justify-between items-center text-sm text-blue-500 pl-4 pr-4">

            <div className="flex items-center gap-2">
                <div className="relative">
                    <img src={BotIcon} alt="icon" />
                    <div className="w-2 h-2 rounded-full bg-green-500 absolute right-1 top-10"></div>
                </div>
                <div className="flex flex-col">
                    <div className='flex gap-2 '>
                        <span className="font-bold"> Timpu </span>
                        <img className="w-4  top-1" src={Vector} alt="verified" />
                    </div>
                    <span> Chat assistant</span>
                </div>
            </div>
            <div className='flex justify-center items-center gap-1'>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>Online</div>

            </div>
        </div>

    )
}

export default Top


