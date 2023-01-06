import Image from 'next/image'
import styles from '../styles/Home.module.css'

const FeaturingCandy = () => {
    return (
        <>
        <section className={styles.product}>
            <h1 className={styles.featuringHeading}>WHAT'S TRENDING</h1>
            
            <div className ={styles.productContainer}>
                <button className= {styles.buttonPrevious}>
                    <Image
                        src={'/Arrow.svg'}
                        alt=""
                        width={100}
                        height={100}
                        className={styles.imageArrow}
                    />
                </button>
                <div className = {styles.productCard}>
                    <div className = {styles.productUpper}>
                        <button className= {styles.buttonFavourite}>
                            <Image
                                src={'/EmptyHeart.svg'}
                                width={100}
                                height={100}
                                className ={styles.imageFavourite}
                            />
                        </button>
                        <Image
                            src={'/MaynardWineGums.svg'}
                            width={100}
                            height={100}
                            className = {styles.imageProduct}
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <p className={styles.productDescription}>Chewy sweets, 195g</p>
                        <h2 className={styles.productName}>Maynard wine gums</h2>
                        <span className={styles.productPrice}>7,50€</span>
                        <button className={styles.buttonCart}>
                            <Image
                                src={'/Add to cart.svg'}
                                width={100}
                                height={100}
                                className ={styles.imageCart}
                            />
                        </button>
                    </div>
                </div>
                <div className = {styles.mainProductCard}>
                    <div className = {styles.productUpper}>
                        <button className= {styles.buttonFavourite}>
                            <Image
                                src={'/EmptyHeart.svg'}
                                width={100}
                                height={100}
                                className ={styles.imageFavourite}
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
                        <p className={styles.mainProductDescription}>Chewy sweets, 125g</p>
                        <h2 className={styles.mainProductName}>Bilar swedish candy</h2>
                        <span className={styles.mainProductPrice}>2,50€</span>
                        <button className={styles.buttonCart}>
                            <Image
                                src={'/Add to cart.svg'}
                                width={100}
                                height={100}
                                className ={styles.imageCart}
                            />
                        </button>
                    </div>
                </div>
                <div className = {styles.productCard}>
                    <div className = {styles.productUpper}>
                        <button className= {styles.buttonFavourite}>
                            <Image
                                src={'/EmptyHeart.svg'}
                                width={100}
                                height={100}
                                className ={styles.imageFavourite}
                            />
                        </button>
                        <Image
                            src={'/BassetsMurrayMints.svg'}
                            width={100}
                            height={100}
                            className = {styles.imageProduct}
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <p className={styles.productDescription}>Mints, 193g</p>
                        <h2 className={styles.productName}>Bassett's Murray Mints</h2>
                        <span className={styles.productPrice}>7,50€</span>
                        <button className={styles.buttonCart}>
                            <Image
                                src={'/Add to cart.svg'}
                                width={100}
                                height={100}
                                className ={styles.imageCart}
                            />
                        </button>
                    </div>
                </div>
                <button className= {styles.buttonNext}>
                    <Image
                        src={'/Arrow.svg'}
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