import Image from 'next/image'
import styles from '../styles/Home.module.css'

const FeaturingCandy = () => {
    return (
        <>
        <h1 className={styles.featuringHeading}>WHAT'S TRENDING</h1>
        <div className={styles.biggestCandy}>
        <Image
                src={'/image 19.svg'}
                alt="Banner"
                fill="position"
            />
        </div>
        </>
    );
};

export default FeaturingCandy;