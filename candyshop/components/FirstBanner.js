import Image from 'next/image';
import styles from '../styles/Home.module.css'

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
                    <h1>Shop at SWEET TRADITION!</h1>
                    <p>TREAT YOURSELF TO SWEETNESS</p>
                </div>
        </div>
        </>
    );
};

export default FirstBanner;