import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const StoryBanner = () => {
    return (
        <div className={styles.storyBannerWrapper}>
            <Image
                    src={'/story banner2.svg'}
                    alt="Banner"
                    width={1520}
                    height={384}
                    className={styles.storyBanner}
                />
                <div className={styles.textWrapper}>
                    <p className={styles.shopOurSO}>SHOP OUR SELECTION OF</p>
                    <p className={styles.bulk}>BULK CANDY, GUMMIES</p>
                    <div className={styles.chocoAndMore}>
                        <p className={styles.chocolates}>CHOCOLATES</p>
                        <p className={styles.shopOurSO}>, AND MORE</p>
                    </div>
                    <p className={styles.stock}>Stock up on sweet treats today!</p>
                </div>
                <Link href={"/candy"} passHref className={styles.btnLink}><button type="button" className={styles.buttonStoryBanner}>SHOP NOW</button></Link>
        </div>
    );
};

export default StoryBanner;