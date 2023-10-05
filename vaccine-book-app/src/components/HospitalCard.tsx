import styles from './hospitalcard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function HospitalCard ({hospitalName, imgSrc, onClickRating, ratingList}: {hospitalName:string, imgSrc:string, onClickRating:Function, ratingList:Map<string,number>}) {
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
                <div className='relative top-[-31px]'>
                <Rating
                    name="simple-controlled"
                    value={ratingList.get(hospitalName) || 0}
                    onChange={(event,newValue) => {
                        event.stopPropagation();
                        console.log(ratingList.get(hospitalName))
                        onClickRating(newValue)
                        event.preventDefault()
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                      }}
                    />
                </div>
            </div>
        </InteractiveCard>
    );
}