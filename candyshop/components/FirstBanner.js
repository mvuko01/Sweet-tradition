import Image from 'next/image';
import styles from '../styles/Home.module.css'

const FirstBanner = () => {
    return (
        <Image
                src={'/cta banner (3).svg'}
                alt="Banner"
                width={1800}
                height={526}
                className={styles.firstBannnerImage}
            />
    );
};

export default FirstBanner;