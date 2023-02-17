import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { handleAddToFavourites, checkIfFavourite, handleAddToShoppingCart } from '../helpers';
import { MyContext } from '../context.js'

const ListProductCard = ({ name, short_description, picture, price, id, product, onHeartClick, prevState }) => {
    const {setInMyShoppingCart, setInMyFavourites, inMyFavourites} = useContext(MyContext);
    const handleHeartClick = () => {
        onHeartClick(!prevState);
    }
    return (
        <>
            <div className={styles.listProductCard}>
                <div className={styles.productUpper}>
                    <button onClick={() => {handleAddToFavourites(product, setInMyFavourites); handleHeartClick()}} className={styles.buttonFavourite}>
                        <Image
                            src={checkIfFavourite(product,inMyFavourites) === false ? '/productPics/EmptyHeart.svg' : '/productPics/FullHeart.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageFavourite}
                        />
                    </button>
                    <Link href={`../candy/${product.slug}`} className={styles.linkWrapper}>
                        <Image
                            src={picture}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageProduct}
                        />
                    </Link>
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
                            onClick={() => handleAddToShoppingCart(product, setInMyShoppingCart)}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ListProductCard;