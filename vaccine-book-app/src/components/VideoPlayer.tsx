'use client'
import { useRef, useEffect } from "react"

export function VideoPlayer({vdoSrc , isPlaying}: {vdoSrc:string, isPlaying:boolean}) {
    
    const vdoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (isPlaying) {
            vdoRef.current?.play();
        } else {
            vdoRef.current?.pause();
        }
    }, [isPlaying]);

    return (
        <div>
            <video 
            src={vdoSrc}
            ref={vdoRef}
            controls
            loop
            muted
            preload="metadata"
            className="w-full border-4 rounded-lg border-black"
            ></video>
        </div>
    )
}