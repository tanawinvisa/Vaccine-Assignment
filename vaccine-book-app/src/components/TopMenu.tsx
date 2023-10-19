import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'


export default async function TopMenu () {

    const session = await getServerSession(authOptions)

    return (
        <div className='h-[50px] bg-black fixed top-0 left-0 right-0 z-10 flex w-full p-2 pr-5 justify-end'>
            <div className='absolute top-0 left-0 z-[12] pt-5 w-full font-bold pl-2'>
                {
                    session ? <Link href="/api/auth/signout">
                        <div className='flex items-center absolute h-full px-2 text-white text-md'>
                            Sign-Out of {session.user?.name}
                        </div>
                    </Link>
                        : <Link href="/api/auth/signin" >
                            <div className='flex items-center absolute h-full px-2 text-white text-md'>
                                Sign-In
                            </div>
                        </Link>
                }
            </div>
            <TopMenuItem title="Booking" pageRef="/booking" />
            <Image
                src={'/img/logo.png'} 
                className="h-full w-auto"
                alt='logo'
                width={0}
                height={0}
                sizes='100vh'
            />
        </div>
    );
}