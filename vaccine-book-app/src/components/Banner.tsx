import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerText}>
                <h4>Get Vaccine ,Boost Your Health</h4>
                <h1>Get Vaccinated<br/>
                Now Easily With <br/>
                Vaccining
                </h1>
                
                <p>Welcome to our Vaccine Reservation Service.
                Your health and safety are our top priorities. We're here to make the vaccine reservation process easy and convenient for you.
                Secure your appointment today and take a step towards a safer, healthier tomorrow.</p>
                
                <button>Reserve Now</button>
            </div>
            <Image src={'/img/cover.jpg'} 
            alt='cover'
            objectFit='contain'
            fill
            />
        </div>
    );
}