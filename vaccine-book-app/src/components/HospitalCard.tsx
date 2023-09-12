import styles from './hospitalcard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';

export default function HospitalCard ({hospitalName, imgSrc}: {hospitalName:string, imgSrc:string}) {
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className={styles.hospitalcard}>
                <div className='w-full h-[200px] relative'>
                    <Image
                    src={imgSrc}
                    alt='Hospital Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                    />
                </div>
                <div className={styles.hospitalText}>
                    <h2 className='font-semibold'>{hospitalName}</h2>
                </div>
            </div>
        </InteractiveCard>
    );
}