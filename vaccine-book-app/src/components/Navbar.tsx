import styles from './navbar.module.css'

export default function Navbar () {
    return (
        <div className={styles.navbar}>
            <div>WinWithVac</div>
            <div>
                <div>
                    Home
                </div>
                <div>
                    Schedule
                </div>
                <div>
                    Contact
                </div>
            </div>
            <div>Call Center</div>
        </div>
    );
}