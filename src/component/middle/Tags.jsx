import React from 'react'

const Tags = ({ name }) => {
    return (
        <div className="min-w-10">
            <button className='border border-blue-500 bg-blue-50 rounded-md text-blue-600 h-7 flex justify-center items-center p-2	' > {name}</button>
        </div>

    )
}

export default Tags
