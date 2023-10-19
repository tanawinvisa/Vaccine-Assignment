'use client'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

export default function Banner () {
    const covers1 = ['none','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index , setIndex] = useState(0)
    const router = useRouter();
    const {data: session} = useSession();
//   console.log(session?.user.token);

    return (
        <div className={'flex m-0 w-full h-[600px] relative bg-[rgb(9,21,42)] bg-cover bg-center'} style={{ backgroundImage: `url(${covers1[index%4]})` }} onClick={()=>{setIndex(index+1)}}>
            {
            session ? <span className="text-white font-bold absolute top-0 right-0 mr-4">Welcome {session.user?.name} !</span> : ''
          }
            <div className={'text-white z-1 flex justify-center relative ml-[150px] leading-[58px] flex-col w-[60%] top-[-30px] bg-gradient-to-r from-[rgb(9,21,42)] to-black '  + `${(index%4 != 0) &&  '!bg-none'}`}>
                <h4 className='font-semibold text-custom-blue'>Get Vaccine ,Boost Your Health</h4>
                <h1 className='font-black text-[44px]'>Get Vaccinated<br/>
                Now Easily With <br/>
                Vaccining
                </h1>

                <div className="absolute mt-[30px] pt-[50px] right-0 pr-[25px] text-[20px]">
        </div>
                
                <p className='font-normal w-1/2 text-justify leading-[24px] mt-[10px] text-slate-300'>Welcome to our Vaccine Reservation Service.
                Your health and safety are our top priorities. We're here to make the vaccine reservation process easy and convenient for you.
                Secure your appointment today and take a step towards a safer, healthier tomorrow.</p>
                
                <button className='bg-custom-blue rounded-lg h-[50px] w-[200px] font-bold mt-[30px] text-white z-10'>Reserve Now</button>
                <button className='absolute bg-white h-[50px] w-[200px] font-bold mt-[30px] z-10 text-black rounded-lg left-[70vw] top-[470px] hover:bg-custom-blue'
                onClick={(e)=>{
                    router.push('/hospital')
                    e.stopPropagation(); 
                }}
                >Select Hospital Now</button>
            </div>
            <div className={'flex w-2/5 ' + `${(index%4 != 0) &&  'hidden'}`}>
                <Image src={'/img/cover.jpg'} 
                alt='cover'
                width={5000}
                height={5000}
                className='object-cover m-0 !w-full'
                />
            </div>
        </div>
    );
}