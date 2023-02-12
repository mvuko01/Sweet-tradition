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
                    <p className={styles.shopOurSO}>SHOP OUR SELECTION OF <span className={styles.bulk}>BULK CANDY, GUMMIES, CHOCOLATES</span> AND MORE</p>
                    <p className={styles.stock}>Stock up on sweet treats today!</p>
                
                    <Link href={"/candy"} passHref className={styles.btnLink}><button type="button" className={styles.buttonStoryBanner}>SHOP NOW</button></Link>
                </div>
        </div>
    );
};

export default StoryBanner;