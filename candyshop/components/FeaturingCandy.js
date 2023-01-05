import Image from 'next/image'
import styles from '../styles/Home.module.css'

const FeaturingCandy = () => {
    return (
        <>
        <section className={styles.product}>
            <h1 className={styles.featuringHeading}>WHAT'S TRENDING</h1>
            <button className= {styles.buttonPrevious}>
                <Image
                    src={'/Arrow.svg'}
                    alt=""
                    width={100}
                    height={100}
                    className={styles.imageArrow}
                />
            </button>
            <button className= {styles.buttonNext}>
                <Image
                    src={'/Arrow.svg'}
                    alt=""
                    width={100}
                    height={100}
                    className={styles.imageArrow}

                />
            </button>
            <div className ={styles.productContainer}>
                <div className = {styles.productCard}>
                    <div className = {styles.productUpper}>
                        <button className= {styles.buttonFavourite}>
                            <Image
                                src={'/EmptyHeart.svg'}
                                width={100}
                                height={100}
                            />
                        </button>
                        <Image
                            src={'/image 19.svg'}
                            width={100}
                            height={100}
                            className = {styles.imageProduct}
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <p className={styles.productDescription}>Chewy sweets, 125g</p>
                        <h2 className={styles.productName}>Werthers originals</h2>
                        <span className={styles.productPrice}>2,50€</span>
                        <button className={styles.buttonCart}>
                            <Image
                                src={'/Add to cart.svg'}
                                width={100}
                                height={100}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
};

export default FeaturingCandy;