import Image from 'next/image'
import styles from '../styles/StoryBanner.module.css'
import Link from 'next/link';

const StoryBanner = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.banner}>
                <div className={styles.textFirstBanner}>
                    <p className={styles.shopAt}>SHOP OUR SELECTION OF BULK CANDY, GUMMIES, CHOCOLATES AND MORE</p>
                    <p className={styles.treat}>Stock up on sweet treats today!</p>
                    <Link href={"/candy"} passHref>
                        <button type="button">SHOP NOW</button>
                    </Link>
                </div>
            </div>
        </div>
       
    );
};

export default StoryBanner;