import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';



const ListProductCard = ({ name, short_description, picture, price, id }) => {
    return (
        <>
            <div className={styles.listProductCard}>
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
                    <p className={styles.listProductDescription}>{short_description}</p>
                    <h2 className={styles.listProductName}>{name}</h2>
                    <span className={styles.listProductPrice}>{price}</span>
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

export default ListProductCard;