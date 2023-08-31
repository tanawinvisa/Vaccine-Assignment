import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerText}>
                <h4 className='font-semibold'>Get Vaccine ,Boost Your Health</h4>
                <h1 className='font-black'>Get Vaccinated<br/>
                Now Easily With <br/>
                Vaccining
                </h1>
                
                <p className='font-normal w-1/2'>Welcome to our Vaccine Reservation Service.
                Your health and safety are our top priorities. We're here to make the vaccine reservation process easy and convenient for you.
                Secure your appointment today and take a step towards a safer, healthier tomorrow.</p>
                
                <button>Reserve Now</button>
            </div>
            <div className='flex w-2/5'>
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