import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { handleAddToFavourites, checkIfFavourite, handleAddToShoppingCart } from '../helpers';
import { MyContext } from '../context.js'

const ListProductCard = ({  product, onHeartClick, prevState }) => {
    const {setInMyShoppingCart, setInMyFavourites, inMyFavourites} = useContext(MyContext);
    let routeString = product.description_path.substring(0,product.description_path.lastIndexOf("."))

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
                    <Link href={`../candy/${routeString}`} className={styles.linkWrapper}>
                        <Image
                            src={`/productPics/${product.picture_paths[0]}`}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageProduct}
                        />
                    </Link>
                </div>
                <div className={styles.productInfo}>
                    <p className={styles.listProductDescription}>{`${product.category.name}, ${product.quantity}`}</p>
                    <Link href={`../candy/${routeString}`} className={styles.listProductName}>{product.name}</Link>
                    <div className={styles.listProductPrice}>{product.price}</div>
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