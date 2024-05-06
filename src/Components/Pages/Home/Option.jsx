import React from 'react'
import { Compass, Heart, Home, MessageCircleCode, MonitorPlay, Search, SquarePlus, SquareUserRound } from 'lucide-react'
import { FaThreads } from "react-icons/fa6";
import { MdOutlineDensityMedium } from "react-icons/md";
import "./Home.css"

export default function Option() {
    return (
        <div className='option-container'>
            <div className='option-header'>
                <h3 className='text-2xl font-bold'>instagram</h3>
            </div>
            <div className='option-links'>
                <span>
                    <Home />
                    <h5 className='capitalize '>home</h5>
                </span>

                <span>
                    <Search />
                    <h5 className='capitalize'>search</h5>
                </span>

                <span>
                    <Compass />
                    <h5 className='capitalize'>explore</h5>
                </span>

                <span>
                    <MonitorPlay />
                    <h5 className='capitalize'>reels</h5>
                </span>

                <span>
                    <MessageCircleCode />
                    <h5 className='capitalize'>messages</h5>
                </span>

                <span>
                    <Heart />
                    <h5 className='capitalize'>notification</h5>
                </span>

                <span>
                    <SquarePlus />
                    <h5 className='capitalize'>create</h5>
                </span>

                <span>
                    <SquareUserRound />
                    <h5 className='capitalize'>profile</h5>
                </span>
            </div>

            <div className='option-actions'>
                <span >
                    <FaThreads />
                    <h5 className='capitalize'>threads</h5>
                </span>

                <span >
                    <MdOutlineDensityMedium />
                    <h5 className='capitalize'>more</h5>
                </span>
            </div>
        </div>
    )
}
