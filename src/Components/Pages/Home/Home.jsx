import React from 'react'
import Option from './Option'
import Requset from './Request'
import Maininfo from './Maininfo'
import "./Home.css"

export default function Home() {
    return (
        <div className=''>
            <div className='flex justify-between w-100 gap-3'>
                <div className='w-[25%]'>
                    <Option />
                </div>
                <div className='w-[35%]'>
                    <Maininfo />
                </div>
                <div className='w-[30%] '>
                    <Requset />
                </div>

                {/*
      
       */}
            </div>
        </div>
    )
}
