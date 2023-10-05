'use client'
import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer"
import { useWindowListener } from "./hooks/useWindowListener";


export default function PromoteCard() {
    const [playing, setPlaying] = useState(true);

    useWindowListener('contextmenu', (e : Event) => {
        e.preventDefault();
        e.stopPropagation();
    });

    return (
        <div className="w-[80%] h-[500px] shadow-lg mx-[10%] my-10 p-4 px-6 rounded-lg bg-white flex flex-row items-center gap-[20px]">
            <div className="">
                <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing} />
            </div>
            <div className="flex flex-col content-between gap-[50px]">
                <span className="text-[30px] font-bold pb-2 text-black">Get your vaccine today.</span>
                <button
                className="text-[25px] block rounded-md bg-fuchsia-400
                hover:fuchsia-600 px-[20px] py-2 text-white shadow-sm border-2 
                border-black transform transform-colors duration-300 hover:border-white"
                onClick={() => {
                    setPlaying(!playing);
                }}
                >
                    {playing ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    )
}