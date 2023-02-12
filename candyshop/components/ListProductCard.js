import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { handleAddToFavourites, checkIfFavourite } from '../helpers';

const ListProductCard = ({ name, short_description, picture, price, id, product, onHeartClick, prevState }) => {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavs(storedFavourites);
    }, []);

    const handleHeartClick = () => {
        onHeartClick(!prevState);
    }

    return (
        <>
            <div className={styles.listProductCard}>
                <div className={styles.productUpper}>
                    <button onClick={() => {handleAddToFavourites(product, setFavs); handleHeartClick()}} className={styles.buttonFavourite}>
                        <Image
                            src={checkIfFavourite(product,favs) === false ? '/productPics/EmptyHeart.svg' : '/productPics/FullHeart.svg'}
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
                    <Link href={`../candy/${product.slug}`} className={styles.listProductName}>{name}</Link>
                    <div className={styles.listProductPrice}>{price}</div>
                    <button className={styles.buttonCart}>
                        <Image
                            src={'/productPics/Add to cart.svg'}
                            alt="Add to cart"
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