import React from 'react'
import Send from './Receive'
import Receive from './Send'
import Tags from './Tags'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Shopping from './Shopping';
import TuneIcon from '@mui/icons-material/Tune';
import Filter from './Filter'
import { useState } from 'react';

const Middle = () => {
    const [message, setMessage] = useState("");

    const icon = ChevronRightIcon
    return (
        <div className="flex grow flex-col gap-2 p-4 ">
            <Send />
            <Receive />
            <div className="text-slate-400 ">Popular tags for handbag</div>
            <div className="flex gap-3 justify-center items-center flex-wrap">
                <Tags name={"Clutch"} />
                <Tags name={"Fabric lining"} />
                <Tags name={"Baggit"} />
                <Tags name={"Multi"} />
                < ChevronRightIcon />
            </div>
            <Shopping />
            <div className='text-sm flex gap-y-2 justify-between text-slate-400 items-center'>
                <span className="text-xs">Select filters</span>
                <span className="text-xs"><TuneIcon /> Filter</span>
            </div>
            <div className='text-sm flex gap-3 flex-wrap'>
                <Tags name={"Strap-Long"} />
                <Filter name={"Colour"} />
                <Filter name={"Size"} />
                <Filter name={"Brand"} />
                <Filter name={"Material"} />
            </div>
        </div>
    )
}

export default Middle
