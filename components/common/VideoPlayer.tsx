"use client"
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const videoSrc = "/videos/umuravaVideo.mp4";
    const [isClient, setIsClient] = useState(false)

    const [play,setPlay] = useState(false);

    const handlePlayORStop = ()=>{
        setPlay((prev)=>!prev)
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    const checkWindowSize = () => {
        setIsLargeScreen(window.innerWidth >= 680);
        console.log(isLargeScreen)
    };

    useEffect(() => {
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []); 

    return (
        <div className='flex items-center justify-center cursor-pointer' onClick={handlePlayORStop}>
            {isClient ?
                <ReactPlayer
                    url={videoSrc}
                    playing={play}
                    light={false}
                    width={isLargeScreen ? 950 : "100%"}
                    height={"100%"}
                    muted={false}
                    loop={true}
                    pip={true}
                    style={{ filter: 'brightness(80%)' }}
                /> : null
            }
            <source src={videoSrc} type="video/mp4" />·
        </div>
    );
};

export default VideoPlayer;