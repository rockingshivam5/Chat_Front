import React from 'react'
import Top from "./Top"
import Bottom from './Bottom'
import Middle from './middle/Middle'


const Main = () => {
    return (
        <div className="flex flex-col w-[360px] h-[680px] rounded-[20px] bg-white p-[4.5px] text-xs">
            <Top />
            <Middle />
            <Bottom />
        </div>
    )
}

export default Main
