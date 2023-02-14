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
        // <div className={styles.storyBannerWrapper}>
        //     <Image
        //             src={'/story banner2.svg'}
        //             alt="Banner"
        //             width={1800}
        //             height={384}
        //             className={styles.storyBanner}
        //         />
        //         <div className={styles.textWrapper}>
        //             <p className={styles.shopOurSO}>SHOP OUR SELECTION OF <span className={styles.bulk}>BULK CANDY, GUMMIES, CHOCOLATES</span> AND MORE</p>
        //             <p className={styles.stock}>Stock up on sweet treats today!</p>
                
        //             <Link href={"/candy"} passHref className={styles.btnLink}><button type="button" className={styles.buttonStoryBanner}>SHOP NOW</button></Link>
        //         </div>
        // </div>
    );
};

export default StoryBanner;