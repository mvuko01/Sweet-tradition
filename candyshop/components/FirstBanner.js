import Image from 'next/image';
import styles from '../styles/FirstBanner.module.css'
import Link from 'next/link';

const FirstBanner = () => {
    return (
        <>
        <div className={styles.bannerContainer}>
            <div className={styles.banner}>
                <div className={styles.textFirstBanner}>
                    <p className={styles.shopAt}>SHOP AT SWEET TRADITION!</p>
                    <p className={styles.treat}>TREAT YOURSELF TO SWEETNESS</p>
                    <Link href="/candy/candy">
                        <button type='button'>BUY NOW</button>
                    </Link>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default FirstBanner;