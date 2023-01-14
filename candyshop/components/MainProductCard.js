import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Link from 'next/link';



const MainProductCard = ({ name, short_description, picture, price, id }) => {
    return (
        <>
            <div className = {styles.mainProductCard}>
                <div className = {styles.productUpper}>
                    <button className= {styles.buttonFavourite}>
                        <Image
                            src={'/productPics/EmptyHeart.svg'}
                            width={100}
                            height={100}
                            className ={styles.imageFavourite}
                        />
                    </button>
                    <Image
                        src={'/productPics/BilarSwedishCandy.svg'}
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
                            src={'/productPics/Add to cart.svg'}
                            width={100}
                            height={100}
                            className ={styles.imageCart}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default MainProductCard;