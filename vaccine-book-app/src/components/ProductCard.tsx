import styles from './productcard.module.css'
import Image from 'next/image'

export default function ProductCard () {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image
                src={'/img/card1.png'}
                alt='Vaccine Picture'
                fill
                objectFit='contain'
                />
            </div>
            <div className={styles.cardText}>
                <h2>Why should we vaccinate?</h2>
                <p>
                Vaccines offer a powerful shield against infectious diseases, providing several key benefits. They not only protect individuals from severe illness and potentially life-threatening infections but also contribute to broader community immunity. Vaccines are instrumental in preventing outbreaks, reducing healthcare burdens, and ultimately saving lives. By getting vaccinated, individuals can confidently navigate their daily lives, travel safely, and contribute to the collective effort to curb the spread of infectious diseases, safeguarding the health of entire populations.
                </p>
            </div>
        </div>
    );
}