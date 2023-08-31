import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu () {
    return (
        <div className='h-[50px] bg-black fixed top-0 left-0 right-0 z-10 flex w-full p-2 pr-5 justify-end'>
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