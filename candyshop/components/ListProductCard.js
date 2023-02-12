import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { handleAddToFavourites, checkIfFavourite } from '../helpers';

const ListProductCard = ({ name, short_description, picture, price, id, product }) => {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavs(storedFavourites);
    }, []);
    return (
        <>
        <Link href={`../candy/${product.slug}`}>
            <div className={styles.listProductCard}>
                <div className={styles.productUpper}>
                    <button onClick={() => handleAddToFavourites(product)} className={styles.buttonFavourite}>
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
        </Link>
        </>
    );
};

export default ListProductCard;