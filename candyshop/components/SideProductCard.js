import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Link from 'next/link';



const SideProductCard = ({ name, short_description, picture, price, id }) => {
    return (
        <>
            <div className={styles.productCard}>
                <div className={styles.productUpper}>
                    <button className={styles.buttonFavourite}>
                        <Image
                            src={'/productPics/EmptyHeart.svg'}
                            width={100}
                            height={100}
                            className={styles.imageFavourite}
                        />
                    </button>
                    <Image
                        src={'/productPics/MaynardWineGums.svg'}
                        width={100}
                        height={100}
                        className={styles.imageProduct}
                    />
                </div>
                <div className={styles.productInfo}>
                    <p className={styles.productDescription}>Chewy sweets, 195g</p>
                    <h2 className={styles.productName}>Maynard wine gums</h2>
                    <span className={styles.productPrice}>7,50€</span>
                    <button className={styles.buttonCart}>
                        <Image
                            src={'/productPics/Add to cart.svg'}
                            width={100}
                            height={100}
                            className={styles.imageCart}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideProductCard;