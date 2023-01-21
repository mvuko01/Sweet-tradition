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
                    <div className={styles.shop}>
                        <div className={styles.shopAtWrapper}>
                            <p className={styles.shopAt}>SHOP AT</p>
                            <p className={styles.sweet}>SWEET</p>
                        </div>
                            <h1>TRADITION!</h1>
                    </div>
                    <p className={styles.treat}>TREAT YOURSELF TO SWEETNESS</p>
                    <Link href="/candy/candy">
                    <button type='button'>BUY NOW</button>
                    </Link>
                </div>
        </div>
        </>
    );
};

export default FirstBanner;