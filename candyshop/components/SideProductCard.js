import Image from 'next/image';
import styles from '../styles/Cards.module.css'

const SideProductCard = ({ name, short_description, picture, price, id }) => {
    return (
        <>
            <div className={styles.productCard}>
                <div className={styles.productUpper}>
                    <button className={styles.buttonFavourite}>
                        <Image
                            src={'/productPics/EmptyHeart.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageFavourite}
                        />
                    </button>
                    <Image
                        src={picture}
                        alt=""
                        width={100}
                        height={100}
                        className={styles.imageProduct}
                    />
                </div>
                <div className={styles.productInfo}>
                    <p className={styles.productDescription}>{short_description}</p>
                    <h2 className={styles.productName}>{name}</h2>
                    <span className={styles.productPrice}>{price}</span>
                    <button className={styles.buttonCart}>
                        <Image
                            src={'/productPics/Add to cart.svg'}
                            width={100}
                            height={100}
                            className={styles.imageCart}
                            alt="Add to card"
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideProductCard;