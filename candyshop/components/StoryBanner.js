import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const StoryBanner = () => {
    return (
        <div className={styles.storyBannerWrapper}>
            <Image
                    src={'/story banner.svg'}
                    alt="Banner"
                    width={1520}
                    height={384}
                    className={styles.storyBanner}
                />
                <Link href={"/candy"} passHref><button type="button" className={styles.buttonStoryBanner}>SHOP NOW</button></Link>
        </div>
    );
};

export default StoryBanner;