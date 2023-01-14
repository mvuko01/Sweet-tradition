import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainProductCard from './MainProductCard';
import SideProductCard from './SideProductCard';

const FeaturingCandy = () => {
    return (
        <>
            <section className={styles.product}>
                <h1 className={styles.featuringHeading}>WHAT'S TRENDING</h1>

                <div className={styles.productAndArrowContainter}>
                    <button className={styles.buttonPrevious}>
                        <Image
                            src={'/productPics/Arrow.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageArrow}
                        />
                    </button>
                    <div className={styles.productContainer}>
                        <SideProductCard />
                        <MainProductCard />
                        <SideProductCard />
                    


                    </div>
                    <button className={styles.buttonNext}>
                        <Image
                            src={'/productPics/Arrow.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageArrow}

                        />
                    </button>
                </div>
            </section>

        </>
    );
};

export default FeaturingCandy;