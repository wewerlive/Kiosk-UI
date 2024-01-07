//@ts-nocheck
'use client';
import type { NextPage } from 'next';
import { buttonVariants } from '@/components/ui/button';
import { useRef, useEffect } from 'react';
const Page = () => {
  const videoRef = useRef(null)
  useEffect(() => {
    addCamera();
  }, [videoRef]);

  const addCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      let video = videoRef.current
      video.srcObject = stream
      video.play()
    }
    ).catch((err) => {
      console.log(err)
    }
    )
  }


  return <>
    <div className="z-0 relative h-">
      <video ref={videoRef}
        style={{ width: '100%', height: '50%' }}
      />
    </div>
    <div className = "z-10 absolute bottom-10 w-7 flex flex-col">

      <img src="./shirt.svg" alt="" />
      <img src="./shirt.svg" alt="" />

    </div>

    <div className="child z-10 bottom-0 left-0" >

      <button className={buttonVariants({
        size: 'lg',
        className: "bg-red-500 z-10 text-white"
      })} onClick={}>
        camera off
      </button>
    </div>

  </>;
};

export default Page;
