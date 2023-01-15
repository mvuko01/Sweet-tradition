import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const FirstBanner = () => {
    return (
        <>
        <div className={styles.firstBannerWrapper}>
            <Image
                    src={'/banner image.svg'}
                    alt="Banner"
                    width={1}
                    height={1}
                    className={styles.firstBannnerImage}
                />
                <div className={styles.textFirstBanner}>
                    <h1 className={styles.shop}>
                        <div className={styles.shopAtWrapper}>
                        SHOP AT
                            <h1 className={styles.sweet}>SWEET</h1>
                        </div>
                            <h1>TRADITION!</h1>
                    </h1>
                    <p className={styles.treat}>TREAT YOURSELF TO SWEETNESS</p>
                    <Link href="/candy">
                    <button type='button'>BUY NOW</button>
                    </Link>
                </div>
        </div>
        </>
    );
};

export default FirstBanner;